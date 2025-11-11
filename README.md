# QuoteMate Fence Quote App

A progressive web application for tradespeople to capture images and audio on-site, process them with Azure AI services, and generate professional PDF quotes automatically.

## 🏗 Architecture

This application leverages Azure cloud services for a serverless, scalable solution:

- Frontend: React PWA with photo/audio capture & offline queue
- Backend: Azure Functions (TypeScript)
- AI Services: Azure Computer Vision (OCR) & Speech Services (transcription)
- Search: Azure Cognitive Search (future KB match)
- Storage: Azure Blob Storage (images, audio, quotes)
- PDF: Generated via pdf-lib using HTML template
- Infra: Bicep templates (IaC)
- CI/CD: GitHub Actions workflow

## 📁 Project Structure

```
quotemate/
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── infra/
│   ├── main.bicep
│   ├── parameters.json
│   └── README.md
├── src/
│   ├── frontend/
│   │   ├── public/
│   │   │   ├── index.html
│   │   │   ├── manifest.json
│   │   │   └── robots.txt
│   │   └── src/
│   │       ├── components/
│   │       ├── api/
│   │       ├── hooks/
│   │       ├── utils/
│   │       ├── styles/
│   │       ├── tests/
│   │       ├── App.tsx
│   │       └── index.tsx
│   └── backend/
│       ├── functions/
│       │   ├── createJob/
│       │   ├── ocrProcessor/
│       │   ├── transcriptProcessor/
│       │   ├── generateQuote/
│       │   ├── getQuotes/
│       │   └── getQuote/
│       ├── shared/
│       ├── tests/
│       ├── host.json
│       └── local.settings.json.sample
├── templates/
│   └── quote-template.html
├── docs/
│   ├── architecture.md
│   ├── api.md
│   ├── deployment.md
│   ├── data-flow.md
│   └── offline-strategy.md
├── package.json
├── CONTRIBUTING.md
├── SECURITY.md
├── LICENSE
└── README.md
```

## 🚀 Getting Started

### Frontend
```bash
npm run install:frontend
npm run start:frontend
```

### Backend
```bash
npm run install:backend
cd src/backend
cp local.settings.json.sample local.settings.json
npm start
```

### Infra
```bash
az deployment group create \
  --resource-group <rg> \
  --template-file infra/main.bicep \
  --parameters infra/parameters.json
```

### Env Vars
Frontend `.env`:
```
REACT_APP_API_BASE_URL=<function-app-url>
```

Backend `local.settings.json` excerpt:
```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "<storage-connection-string>",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "VISION_ENDPOINT": "<computer-vision-endpoint>",
    "VISION_KEY": "<computer-vision-key>",
    "SPEECH_KEY": "<speech-key>",
    "SPEECH_REGION": "<speech-region>"
  }
}
```

## 📌 Features
- Photo & audio capture
- Offline queue
- OCR & transcription
- PDF quote generation
- Basic quote browsing
- PWA offline support

## 🧪 Testing
```bash
npm run test:frontend
npm run test:backend
```

## 🤝 Contributing
See CONTRIBUTING.md

## 📄 License
MIT