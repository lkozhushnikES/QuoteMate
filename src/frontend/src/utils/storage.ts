import { MediaQueueItem } from '../types';

const KEY = 'offlineMediaQueue';

function read(): MediaQueueItem[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function write(items: MediaQueueItem[]) {
  localStorage.setItem(KEY, JSON.stringify(items));
}

export function enqueueMedia(item: MediaQueueItem) {
  const items = read();
  items.push(item);
  write(items);
}

export function getQueueLength(): number {
  return read().length;
}

export async function flushQueue(): Promise<MediaQueueItem[]> {
  const items = read();
  write([]);
  return items;
}