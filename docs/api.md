# API Documentation (Initial Draft)

## Endpoints

### POST /createJob
Body:
```json
{
  "images": ["data:image/jpeg;base64,..."],
  "audios": ["data:audio/webm;base64,..."]
}
```
Response:
```json
{ "id": "uuid", "status": "pending", "images": [...], "audios": [...] }
```

### GET /quotes
Response:
```json
[{ "id": "demo-1", "status": "generated" }]
```

### GET /quotes/{id}
Response:
```json
{ "id": "demo-1", "status": "generated", "pdfUrl": "https://..." }
```

## Future

- Webhook events
- Auth & RBAC