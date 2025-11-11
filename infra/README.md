# Infrastructure

Provision Azure resources with Bicep.

## Resources

- Storage Account
- Function App
- Cognitive Services (Vision & Speech)
- (Optional) Azure Cognitive Search (stub)
- App Service Plan (if needed)
- Key Vault (placeholder)

## Deploy

```bash
az deployment group create \
  --resource-group <rg> \
  --template-file main.bicep \
  --parameters parameters.json
```

## Parameters

Edit `parameters.json` for naming/regions.