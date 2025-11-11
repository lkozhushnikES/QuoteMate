import { AzureFunction, Context } from '@azure/functions';
import { buildQuotePdf } from '../../shared/pdf';
import { savePdf } from '../../shared/storage';
import { logInfo } from '../../shared/logging';

const generateQuote: AzureFunction = async function (context: Context, queueItem: { ocr: string; transcript: string; jobId: string }) {
  const pdfBytes = await buildQuotePdf({ ocr: queueItem.ocr, transcript: queueItem.transcript });
  const pdfUrl = await savePdf(pdfBytes);
  logInfo('Quote generated', pdfUrl);
  // TODO: mark quote generated
};

export default generateQuote;