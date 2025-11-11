import { enqueueMedia, flushQueue } from '../utils/storage';

export function useOfflineQueue() {
  return {
    enqueueMedia,
    flushQueue
  };
}