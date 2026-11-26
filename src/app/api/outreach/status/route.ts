import crypto from 'crypto';
import { NextResponse } from 'next/server';
import { get, put } from '@vercel/blob';

export const dynamic = 'force-dynamic';

const STATUS_BLOB_PATH = 'outreach/batch6-statuses.json';
const MAX_HISTORY_PER_LEAD = 50;

const VALID_AUTH_HASHES = new Set([
  '3b494374df4674f4f31920d9cc25b38ea04a6f71117bea5fcb5fc58eefc751ef',
  'e2f691407acb1efa4c9f9f8b1ae626cf6d9a4d96e73e207e9ea7f429293127a8',
  'dcc4b3c6236851fa025598b641a275a4886ef166a94b653bdfdf030310fed7cc',
  '1a473243f879345414a4df5b69a645c46373166115fcdf1e3779c9be041ae116',
]);

const VALID_STATUSES = new Set(['pending', 'pitched', 'interested', 'busy', 'no_answer']);

export interface LeadStatusRecord {
  status: 'pitched' | 'interested' | 'busy' | 'no_answer';
  updatedBy: string;
  updatedAt: string;
}

export interface LeadHistoryEvent {
  status: 'pending' | 'pitched' | 'interested' | 'busy' | 'no_answer' | 'note';
  note?: string;
  by: string;
  at: string;
}

interface OutreachStoreData {
  statuses: Record<string, LeadStatusRecord>;
  history: Record<string, LeadHistoryEvent[]>;
  updatedAt: string;
}

function isAuthorized(request: Request): boolean {
  const rawPasscode = request.headers.get('x-outreach-passcode');
  if (!rawPasscode) return false;
  const clean = rawPasscode.trim().toLowerCase();
  if (!clean) return false;
  const hash = crypto.createHash('sha256').update(clean).digest('hex');
  return VALID_AUTH_HASHES.has(hash);
}

function hasBlobCredentials(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN || process.env.VERCEL_OIDC_TOKEN);
}

async function readStatusStore(): Promise<{ data: OutreachStoreData; etag?: string }> {
  const result = await get(STATUS_BLOB_PATH, {
    access: 'private',
    useCache: false,
  });

  if (!result || result.statusCode !== 200) {
    return {
      data: { statuses: {}, history: {}, updatedAt: new Date(0).toISOString() },
      etag: undefined,
    };
  }

  try {
    const rawText = await new Response(result.stream).text();
    const parsed = JSON.parse(rawText) as Partial<OutreachStoreData>;
    return {
      data: {
        statuses: parsed?.statuses && typeof parsed.statuses === 'object' ? parsed.statuses : {},
        history: parsed?.history && typeof parsed.history === 'object' ? parsed.history : {},
        updatedAt: typeof parsed?.updatedAt === 'string' ? parsed.updatedAt : new Date().toISOString(),
      },
      etag: result.blob.etag,
    };
  } catch {
    return {
      data: { statuses: {}, history: {}, updatedAt: new Date(0).toISOString() },
      etag: result.blob.etag,
    };
  }
}

function sanitizeActorName(value: unknown): string {
  if (typeof value !== 'string') return 'Team';
  const trimmed = value.trim().slice(0, 32);
  return trimmed || 'Team';
}

function sanitizeNote(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim().slice(0, 300);
  return trimmed || undefined;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!hasBlobCredentials()) {
    return NextResponse.json({ error: 'Cloud storage not configured' }, { status: 503 });
  }

  try {
    const { data } = await readStatusStore();
    return NextResponse.json(
      { ok: true, statuses: data.statuses, history: data.history, updatedAt: data.updatedAt },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  } catch (error) {
    console.error('[Outreach Status GET Error]:', error);
    return NextResponse.json({ error: 'Failed to load statuses' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!hasBlobCredentials()) {
    return NextResponse.json({ error: 'Cloud storage not configured' }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const seedStatuses = body.seedStatuses;
  const isSeedRequest = seedStatuses && typeof seedStatuses === 'object' && !Array.isArray(seedStatuses);

  const leadIdRaw = body.leadId;
  const statusRaw = body.status;
  const updatedBy = sanitizeActorName(body.updatedBy);
  const cleanNote = sanitizeNote(body.note);

  if (!isSeedRequest) {
    if ((typeof leadIdRaw !== 'string' && typeof leadIdRaw !== 'number') || String(leadIdRaw).trim() === '') {
      return NextResponse.json({ error: 'Invalid leadId' }, { status: 400 });
    }
    if (typeof statusRaw !== 'string' || (statusRaw !== 'note' && !VALID_STATUSES.has(statusRaw))) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }
    if (statusRaw === 'note' && !cleanNote) {
      return NextResponse.json({ error: 'Note cannot be empty' }, { status: 400 });
    }
  }

  try {
    const { data } = await readStatusStore();
    const nextStatuses: Record<string, LeadStatusRecord> = { ...data.statuses };
    const nextHistory: Record<string, LeadHistoryEvent[]> = { ...data.history };
    const now = new Date().toISOString();

    if (isSeedRequest) {
      if (Object.keys(nextStatuses).length > 0 || Object.keys(nextHistory).length > 0) {
        return NextResponse.json(
          { ok: true, statuses: data.statuses, history: data.history, updatedAt: data.updatedAt },
          { headers: { 'Cache-Control': 'no-store, max-age=0' } }
        );
      }
      let seededCount = 0;
      for (const [id, st] of Object.entries(seedStatuses as Record<string, unknown>)) {
        if (typeof st === 'string' && st !== 'pending' && VALID_STATUSES.has(st)) {
          const typedStatus = st as LeadStatusRecord['status'];
          nextStatuses[id] = {
            status: typedStatus,
            updatedBy,
            updatedAt: now,
          };
          nextHistory[id] = [{ status: typedStatus, by: updatedBy, at: now }];
          seededCount++;
        }
      }
      if (seededCount === 0) {
        return NextResponse.json(
          { ok: true, statuses: data.statuses, history: data.history, updatedAt: data.updatedAt },
          { headers: { 'Cache-Control': 'no-store, max-age=0' } }
        );
      }
    } else {
      const key = String(leadIdRaw).trim();
      const existingLog = Array.isArray(nextHistory[key]) ? nextHistory[key] : [];

      if (statusRaw === 'note') {
        const entry: LeadHistoryEvent = {
          status: 'note',
          note: cleanNote,
          by: updatedBy,
          at: now,
        };
        nextHistory[key] = [entry, ...existingLog].slice(0, MAX_HISTORY_PER_LEAD);
      } else if (statusRaw === 'pending') {
        delete nextStatuses[key];
        const entry: LeadHistoryEvent = {
          status: 'pending',
          note: cleanNote || 'Status reset to To Call',
          by: updatedBy,
          at: now,
        };
        nextHistory[key] = [entry, ...existingLog].slice(0, MAX_HISTORY_PER_LEAD);
      } else {
        const typedStatus = statusRaw as LeadStatusRecord['status'];
        nextStatuses[key] = {
          status: typedStatus,
          updatedBy,
          updatedAt: now,
        };
        const entry: LeadHistoryEvent = {
          status: typedStatus,
          ...(cleanNote ? { note: cleanNote } : {}),
          by: updatedBy,
          at: now,
        };
        nextHistory[key] = [entry, ...existingLog].slice(0, MAX_HISTORY_PER_LEAD);
      }
    }

    const nextStore: OutreachStoreData = {
      statuses: nextStatuses,
      history: nextHistory,
      updatedAt: now,
    };

    await put(STATUS_BLOB_PATH, JSON.stringify(nextStore), {
      access: 'private',
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: 'application/json',
      cacheControlMaxAge: 60,
    });

    return NextResponse.json(
      {
        ok: true,
        statuses: nextStore.statuses,
        history: nextStore.history,
        updatedAt: nextStore.updatedAt,
      },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  } catch (error) {
    console.error('[Outreach Status POST Error]:', error);
    return NextResponse.json(
      {
        error: 'Failed to save status',
        detail: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
