import { AzureFunction, Context } from '@azure/functions';

const getQuote: AzureFunction = async function (context: Context) {
  const id = context.bindingData.id;
  context.res = {
    status: 200,
    body: { id, status: 'generated', pdfUrl: 'https://example.com/pdf/demo.pdf', createdAt: Date.now() }
  };
};

export default getQuote;