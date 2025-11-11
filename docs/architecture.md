# Architecture Overview

## Layers

- Frontend (React PWA)
- Backend (Azure Functions)
- AI (Vision + Speech)
- Storage (Blob)
- PDF Generation (pdf-lib)
- Optional Search (Cognitive Search)

## Flow (High-Level)

1. User captures images/audio offline.
2. Queue stored locally.
3. When online, uploads to backend (/createJob).
4. Backend enqueues OCR & transcription tasks.
5. Processors produce text outputs.
6. Quote generation function merges results -> PDF.
7. User views list of quotes & opens PDF.

## Resilience

- Offline-first capture
- Queue-based asynchronous processing
- Stateless functions + durable storage

## Security Considerations

- HTTPS only
- Separate keys in environment variables / future Key Vault