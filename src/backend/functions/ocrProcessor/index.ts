import { AzureFunction, Context } from '@azure/functions';
import { performOcr } from '../../shared/vision';
import { logInfo } from '../../shared/logging';

const ocrProcessor: AzureFunction = async function (context: Context, queueItem: { imageUrl: string }) {
  const text = await performOcr(queueItem.imageUrl);
  logInfo('OCR processed', text.slice(0, 40));
  // TODO: update job progress
};

export default ocrProcessor;