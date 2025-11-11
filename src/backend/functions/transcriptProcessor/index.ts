import { AzureFunction, Context } from '@azure/functions';
import { transcribeAudio } from '../../shared/speech';
import { logInfo } from '../../shared/logging';

const transcriptProcessor: AzureFunction = async function (context: Context, queueItem: { audioUrl: string }) {
  const transcript = await transcribeAudio(queueItem.audioUrl);
  logInfo('Transcript processed', transcript.slice(0, 40));
  // TODO: update job
};

export default transcriptProcessor;