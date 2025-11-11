import { AzureFunction, Context } from '@azure/functions';

const getQuotes: AzureFunction = async function (context: Context) {
  // Placeholder: would fetch from storage/db
  context.res = {
    status: 200,
    body: [
      { id: 'demo-1', status: 'generated', createdAt: Date.now() - 10000 },
      { id: 'demo-2', status: 'pending', createdAt: Date.now() }
    ]
  };
};

export default getQuotes;