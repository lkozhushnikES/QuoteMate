# Deployment Guide

## Prerequisites

- Azure CLI logged in
- Resource group created

## Steps

1. Infra:
   ```bash
   az deployment group create \
     --resource-group <rg> \
     --template-file infra/main.bicep \
     --parameters infra/parameters.json
   ```

2. Configure secrets in repository:
   - AZURE_CLIENT_ID
   - AZURE_TENANT_ID
   - AZURE_CLIENT_SECRET
   - AZURE_SUBSCRIPTION_ID
   - FUNCTION_APP_PUBLISH_PROFILE
   - FUNCTION_APP_NAME

3. Push to `main` to trigger CI/CD.

## Rollback

- Re-deploy previous commit.
- Use `az resource delete` (caution) for removal.