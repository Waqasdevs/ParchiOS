import Dexie, { type Table as DexieTable } from 'dexie';
import type { 
  Order, 
  Table, 
  MenuItem, 
  Category, 
  StockItem, 
  Employee, 
  Shift, 
  RestaurantSettings, 
  SyncMutation 
} from '@/types';
import { HFC_CATEGORIES, HFC_MENU_ITEMS } from '@/lib/initialCatalog';

export class ParchiOSDatabase extends Dexie {
  orders!: DexieTable<Order, string>;
  diningTables!: DexieTable<Table, string>;
  menuItems!: DexieTable<MenuItem, string>;
  categories!: DexieTable<Category, string>;
  stock!: DexieTable<StockItem, string>;
  employees!: DexieTable<Employee, string>;
  shifts!: DexieTable<Shift, string>;
  settings!: DexieTable<RestaurantSettings, string>;
  syncQueue!: DexieTable<SyncMutation, string>;

  constructor() {
    super('ParchiOS_Demo_DB');
    this.version(1).stores({
      orders: 'id, token, type, status, tableNumber, paymentStatus, createdAt',
      diningTables: 'id, number, zone, status',
      menuItems: 'id, categoryId, name, isAvailable',
      categories: 'id, name, order',
      stock: 'id, name, category, currentStock, minThreshold',
      employees: 'id, role, pin, isActive',
      shifts: 'id, employeeId, clockIn',
      settings: 'id',
      syncQueue: 'id, entity, action, clientTimestamp, synced'
    });
    this.version(2).stores({
      menuItems: 'id, categoryId, name, isAvailable, itemNumber'
    });
  }
}

export const db = new ParchiOSDatabase();

// Pre-seeded Initial Database Data for parchiOS Demo
export async function seedInitialData() {
  const existingSettings = await db.settings.get('default');

  if (existingSettings) {
    // Migration: Ensure all items have a sequential itemNumber (1 to 135+)
    const allDbItems = await db.menuItems.toArray();
    const needsNumbering = allDbItems.some(i => !i.itemNumber) || (allDbItems.length > 0 && !allDbItems.find(i => i.id === 'deal-1')?.itemNumber);
    if (needsNumbering && allDbItems.length > 0) {
      const catalogNumMap = new Map<string, number>();
      HFC_MENU_ITEMS.forEach(item => {
        if (item.itemNumber) catalogNumMap.set(item.id, item.itemNumber);
      });

      let nextNum = 126;
      const updated = allDbItems.map(item => {
        if (catalogNumMap.has(item.id)) {
          return { ...item, itemNumber: catalogNumMap.get(item.id) };
        } else if (!item.itemNumber) {
          return { ...item, itemNumber: nextNum++ };
        }
        return item;
      });
      await db.menuItems.bulkPut(updated);
    }
    return; // already initialized
  }

  // 1. Settings (Generic Pakistani Demo Restaurant)
  await db.settings.put({
    id: 'default',
    restaurantName: 'Parchi Grill & Café',
    tagline: 'Powered by parchiOS Offline-First POS',
    address: 'Main Boulevard, Gulberg III, Lahore, Pakistan',
    phone: '0300-1234567 / 042-35780000',
    currency: 'Rs.',
    taxRate: 5, // Standard demo PRA / SRB tax
    defaultDeliveryFee: 150,
    receiptHeader: '*** PARCHIOS DEMO RESTAURANT ***\nFast, Offline-First Pakistani Counter POS',
    receiptFooter: 'Thank you for dining with us!\nPowered by parchiOS • Live Demo Sandbox',
    soundEnabled: true,
    autoPrintReceipt: true,
    supabaseUrl: '',
    supabaseAnonKey: '',
  });

  // 2. Categories
  await db.categories.bulkPut(HFC_CATEGORIES);

  // 3. Stock Items
  const initialStock: StockItem[] = [
    { id: 'stk-chicken-fillet', name: 'Chicken Breast Fillet', category: 'Meat', unit: 'kg', currentStock: 45, minThreshold: 15, costPerUnit: 850, lastRestocked: new Date().toISOString() },
    { id: 'stk-broast-chicken', name: 'Bone-In Broast Chicken', category: 'Meat', unit: 'kg', currentStock: 60, minThreshold: 20, costPerUnit: 720, lastRestocked: new Date().toISOString() },
    { id: 'stk-burger-buns', name: 'Brioche Sesame Buns', category: 'Bakery', unit: 'pieces', currentStock: 120, minThreshold: 30, costPerUnit: 35, lastRestocked: new Date().toISOString() },
    { id: 'stk-fries', name: 'Crinkle Cut French Fries', category: 'Frozen', unit: 'kg', currentStock: 38, minThreshold: 10, costPerUnit: 420, lastRestocked: new Date().toISOString() },
    { id: 'stk-cheese', name: 'Cheddar Cheese Slices', category: 'Dairy', unit: 'packets', currentStock: 25, minThreshold: 8, costPerUnit: 650, lastRestocked: new Date().toISOString() },
    { id: 'stk-garlic-sauce', name: 'Signature Garlic Mayo', category: 'Sauces', unit: 'liters', currentStock: 14, minThreshold: 4, costPerUnit: 550, lastRestocked: new Date().toISOString() },
    { id: 'stk-cooking-oil', name: 'Premium Frying Oil', category: 'Groceries', unit: 'liters', currentStock: 75, minThreshold: 20, costPerUnit: 480, lastRestocked: new Date().toISOString() },
    { id: 'stk-drink-cans', name: 'Cold Drink Cans 330ml', category: 'Beverages', unit: 'cans', currentStock: 96, minThreshold: 24, costPerUnit: 90, lastRestocked: new Date().toISOString() },
  ];
  await db.stock.bulkPut(initialStock);

  // 4. Menu Items (135 Dishes & Deals with sequential numbering [#1] to [#135])
  await db.menuItems.bulkPut(HFC_MENU_ITEMS);

  // 5. Tables
  const initialTables: Table[] = [
    { id: 'tbl-1', number: 'T-01', zone: 'indoor', capacity: 4, status: 'available' },
    { id: 'tbl-2', number: 'T-02', zone: 'indoor', capacity: 4, status: 'available' },
    { id: 'tbl-3', number: 'T-03', zone: 'indoor', capacity: 4, status: 'occupied', currentOrderId: 'order-demo-101', guestCount: 3 },
    { id: 'tbl-4', number: 'T-04', zone: 'indoor', capacity: 6, status: 'available' },
    { id: 'tbl-5', number: 'T-05', zone: 'indoor', capacity: 4, status: 'available' },
    { id: 'tbl-6', number: 'T-06', zone: 'terrace', capacity: 4, status: 'available' },
    { id: 'tbl-7', number: 'T-07', zone: 'terrace', capacity: 4, status: 'available' },
    { id: 'tbl-8', number: 'T-08', zone: 'terrace', capacity: 2, status: 'available' },
    { id: 'tbl-9', number: 'VIP-01', zone: 'vip_family', capacity: 8, status: 'available' },
    { id: 'tbl-10', number: 'VIP-02', zone: 'vip_family', capacity: 10, status: 'available' },
  ];
  await db.diningTables.bulkPut(initialTables);

  // 6. Employees
  const demoStaff: Employee[] = [
    { id: 'emp-manager', name: 'Hamza (Manager)', role: 'manager', pin: '1234', phone: '+92 300 1234567', isActive: true, avatarColor: '#D92B1F' },
    { id: 'emp-cashier', name: 'Bilal (Cashier)', role: 'cashier', pin: '0000', phone: '+92 300 7654321', isActive: true, avatarColor: '#463F35' },
    { id: 'emp-rider', name: 'Usman (Rider)', role: 'rider', pin: '', phone: '+92 321 9876543', isActive: true, avatarColor: '#C9A978' },
  ];
  await db.employees.bulkPut(demoStaff);

  // 7. Seed active shift
  await db.shifts.put({
    id: 'shift-current',
    employeeId: 'emp-manager',
    employeeName: 'Hamza (Manager)',
    role: 'manager',
    clockIn: new Date().toISOString(),
    openingCash: 5000,
    expectedCash: 5000,
    notes: 'Demo shift active'
  });

  // 8. Seed 2 Realistic Demo Live Orders
  const now = Date.now();
  const demoOrders: Order[] = [
    {
      id: 'order-demo-101',
      token: 'PARCHI-101',
      type: 'dine_in',
      status: 'preparing',
      tableNumber: 'T-03',
      items: [
        {
          id: 'item-demo-1',
          menuItemId: 'desi-sp-karahi-half',
          name: 'Special Chicken Karahi (Half)',
          price: 800,
          quantity: 1,
          notes: 'Spicy, less oil'
        },
        {
          id: 'item-demo-2',
          menuItemId: 'tandoor-roghni-naan',
          name: 'Roghni Nan',
          price: 70,
          quantity: 4,
        },
        {
          id: 'item-demo-3',
          menuItemId: 'drink-half-liter',
          name: 'Half Litter Drink',
          price: 130,
          quantity: 2,
        }
      ],
      subtotal: 1340,
      tax: 67,
      discount: 0,
      deliveryCharge: 0,
      total: 1407,
      paymentMethod: 'cash',
      paymentStatus: 'pending',
      serverName: 'Bilal (Cashier)',
      createdAt: new Date(now - 14 * 60 * 1000).toISOString(), // 14 mins ago
      updatedAt: new Date(now - 14 * 60 * 1000).toISOString(),
    },
    {
      id: 'order-demo-102',
      token: 'PARCHI-102',
      type: 'takeaway',
      status: 'ready',
      items: [
        {
          id: 'item-demo-4',
          menuItemId: 'deal-2',
          name: 'Deal 2: Zinger + Shawarma + Half Fries + Drink',
          price: 650,
          quantity: 1,
        }
      ],
      subtotal: 650,
      tax: 0,
      discount: 0,
      deliveryCharge: 0,
      total: 650,
      paymentMethod: 'cash',
      paymentStatus: 'paid',
      serverName: 'Bilal (Cashier)',
      createdAt: new Date(now - 5 * 60 * 1000).toISOString(), // 5 mins ago
      updatedAt: new Date(now - 2 * 60 * 1000).toISOString(),
    }
  ];
  await db.orders.bulkPut(demoOrders);
}
