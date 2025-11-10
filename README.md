# Fence Quote App

A progressive web application for tradespeople to capture images and audio on-site, process them with Azure AI services, and generate professional PDF quotes automatically.

## 🏗️ Architecture

This application leverages Azure cloud services for a serverless, scalable solution:

- **Frontend**: React PWA with photo and audio capture capabilities
- **Backend**: Azure Functions for serverless compute
- **AI Services**: Azure Computer Vision (OCR) and Speech Services (transcription)
- **Search**: Azure Cognitive Search for knowledge base matching
- **Storage**: Azure Blob Storage for images, audio, and PDFs
- **Infrastructure**: Bicep templates for Infrastructure as Code
- **CI/CD**: GitHub Actions for automated deployment

## 📁 Project Structure

```
fence-quote-app/
├── .github/
│   └── workflows/
│       └── ci-cd.yml              # CI/CD pipeline
├── infra/
│   ├── main.bicep                 # Main infrastructure template
│   └── parameters.json            # Environment parameters
├── src/
│   ├── frontend/                  # React PWA
│   │   ├── public/
│   │   └── src/
│   │       ├── components/        # React components
│   │       ├── api/               # API client
│   │       ├── App.tsx
│   │       └── index.tsx
│   └── backend/                   # Azure Functions
│       ├── src/
│       │   ├── functions/
│       │   │   ├── createJob/         # Job creation endpoint
│       │   │   ├── ocrProcessor/      # OCR processing
│       │   │   ├── transcriptProcessor/ # Audio transcription
│       │   │   └── generateQuote/     # PDF generation
│       │   └── shared/            # Shared utilities
│       ├── host.json
│       └── package.json
├── templates/
│   └── quote-template.html        # PDF quote template
├── docs/
│   ├── architecture.md            # Architecture documentation
│   ├── api.md                     # API documentation
│   └── deployment.md              # Deployment guide
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Azure subscription
- Azure CLI
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/lkozhushnikES/QuoteMate.git
   cd QuoteMate
   ```

2. **Install frontend dependencies**
   ```bash
   cd src/frontend
   npm install
   npm start
   ```

3. **Install backend dependencies**
   ```bash
   cd src/backend
   npm install
   cp local.settings.json.sample local.settings.json
   # Edit local.settings.json with your Azure credentials
   npm start
   ```

### Azure Deployment

1. **Configure GitHub Secrets**
   
   Add the following secrets to your GitHub repository:
   - `AZURE_CLIENT_ID`
   - `AZURE_TENANT_ID`
   - `AZURE_CLIENT_SECRET`
   - `AZURE_SUBSCRIPTION_ID`
   - `AZURE_RESOURCE_GROUP`
   - `FUNCTION_APP_PUBLISH_PROFILE`

2. **Deploy Infrastructure**
   ```bash
   az deployment group create \
     --resource-group <your-rg> \
     --template-file infra/main.bicep \
     --parameters infra/parameters.json
   ```

3. **Trigger CI/CD**
   
   Push to `main` branch to automatically deploy via GitHub Actions.

## 🔧 Configuration

### Environment Variables

**Frontend** (`.env`):
```
REACT_APP_API_BASE_URL=<your-function-app-url>
```

**Backend** (`local.settings.json`):
```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "<storage-connection-string>",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "VISION_ENDPOINT": "<computer-vision-endpoint>",
    "VISION_KEY": "<computer-vision-key>",
    "SPEECH_KEY": "<speech-service-key>",
    "SPEECH_REGION": "<speech-service-region>",
    "SEARCH_ENDPOINT": "<search-endpoint>",
    "SEARCH_KEY": "<search-key>"
  }
}
```

## 📱 Features

- **Photo Capture**: Take photos of fence sites directly in the browser
- **Audio Recording**: Record voice notes about job requirements
- **OCR Processing**: Extract text from images using Azure Computer Vision
- **Speech Transcription**: Convert audio to text with Azure Speech Services
- **Smart Matching**: Match requirements against knowledge base using Azure Cognitive Search
- **Quote Generation**: Automatically generate professional PDF quotes
- **Offline Support**: PWA capabilities for offline data capture

## 🧪 Testing

```bash
# Frontend tests
cd src/frontend
npm test

# Backend tests
cd src/backend
npm test
```

## 📚 Documentation

- [Architecture Overview](docs/architecture.md)
- [API Documentation](docs/api.md)
- [Deployment Guide](docs/deployment.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Azure Cognitive Services for AI capabilities
- React team for the excellent framework
- GitHub Actions for seamless CI/CD