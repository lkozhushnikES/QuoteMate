# Offline Strategy

## Goals

- Allow capture without connectivity.
- Retry uploads when network restores.

## Mechanism

- Store Base64 image/audio in localStorage (future: IndexedDB).
- Periodic flush attempts.
- On success, clear queue.

## Improvements

- Replace localStorage with IndexedDB for large blobs.
- Add Service Worker Background Sync.
- Provide visual retry controls.