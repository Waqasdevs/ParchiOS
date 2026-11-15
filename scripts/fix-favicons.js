const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const appDir = path.join(rootDir, 'src', 'app');

// Master Image: Approved WhatsApp Profile Icon (Red dot at TOP-RIGHT, Origami Parchi)
const masterSrc = 'C:/Users/waqas/.gemini/antigravity/brain/9b896fd6-71e4-47e2-a91c-0808b6b95bd7/parchios_logo_icon_1794765013153.jpg';

if (!fs.existsSync(masterSrc)) {
  console.error('Master image not found at:', masterSrc);
  process.exit(1);
}

// 1. Build pixel-perfect vector SVG matching the approved master image
const vectorSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">
  <defs>
    <!-- Deep Ink Black Background -->
    <rect id="bg" width="1024" height="1024" fill="#0E0E0E"/>
  </defs>

  <!-- Background -->
  <use href="#bg"/>

  <!-- Logo Group -->
  <g id="parchios-logo">
    <!-- Vertical Stem of P (Warm Ivory) -->
    <rect x="307" y="255" width="154" height="513" fill="#F5EEDC"/>

    <!-- Top Horizontal Bar (Warm Ivory) -->
    <polygon points="307,255 556,255 556,360 461,360 461,255" fill="#F5EEDC"/>

    <!-- Origami Fold Crease Facet (Shaded Ivory) -->
    <polygon points="556,255 660,360 556,360" fill="#E4DAC7"/>

    <!-- Lower Curved Paper Loop (Crisp Paper White) -->
    <path d="M461,614 L640,614 C700,570 717,525 717,480 C717,420 690,375 660,360 L556,360 L461,455 Z" fill="#F8F8F8"/>

    <!-- Inner Triangular Negative Space (Dark Cutout) -->
    <polygon points="461,360 660,360 461,560" fill="#0E0E0E"/>

    <!-- Rush Red Geometric Pulse Dot (Top Right) -->
    <circle cx="683" cy="289" r="34" fill="#D2261A"/>
  </g>
</svg>`;

async function fixAllFavicons() {
  console.log('Generating all favicon and icon assets from the approved master logo...');

  // 1. Update public/icon.svg with matching vector geometry
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), vectorSvg);
  console.log('✓ Updated public/icon.svg (with top-right red dot & origami fold)');

  // 2. Generate PNGs directly from master image for 100% visual fidelity
  // 512x512
  await sharp(masterSrc)
    .resize(512, 512, { kernel: sharp.kernel.lanczos3 })
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'icon-512.png'));
  console.log('✓ Updated public/icon-512.png');

  // 192x192
  await sharp(masterSrc)
    .resize(192, 192, { kernel: sharp.kernel.lanczos3 })
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'icon-192.png'));
  console.log('✓ Updated public/icon-192.png');

  // 180x180 (Apple Touch Icon)
  await sharp(masterSrc)
    .resize(180, 180, { kernel: sharp.kernel.lanczos3 })
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await sharp(masterSrc)
    .resize(180, 180, { kernel: sharp.kernel.lanczos3 })
    .png({ quality: 100 })
    .toFile(path.join(appDir, 'apple-icon.png'));
  console.log('✓ Updated public/apple-touch-icon.png & src/app/apple-icon.png');

  // 64x64 App Router icon.png
  await sharp(masterSrc)
    .resize(64, 64, { kernel: sharp.kernel.lanczos3 })
    .png({ quality: 100 })
    .toFile(path.join(appDir, 'icon.png'));
  console.log('✓ Updated src/app/icon.png');

  // 32x32 Favicon.ico
  const fav32 = await sharp(masterSrc)
    .resize(32, 32, { kernel: sharp.kernel.lanczos3 })
    .png({ quality: 100 })
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), fav32);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), fav32);
  console.log('✓ Updated public/favicon.ico & src/app/favicon.ico');

  // Also save master PNG in public/branding
  await sharp(masterSrc)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'branding', 'parchios-logo-official.png'));
  console.log('✓ Saved public/branding/parchios-logo-official.png');

  console.log('Done! All favicon and icon assets now match the exact approved WhatsApp logo.');
}

fixAllFavicons().catch(err => {
  console.error('Error fixing favicons:', err);
  process.exit(1);
});
