import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { v4 as uuid } from 'uuid';
import { logInfo } from '../../shared/logging';
import { saveImage, saveAudio } from '../../shared/storage';
import { Job } from '../../shared/types';

const createJob: AzureFunction = async function (context: Context, req: HttpRequest) {
  const images: string[] = req.body?.images || [];
  const audios: string[] = req.body?.audios || [];
  const id = uuid();

  const imageUrls = await Promise.all(images.map(saveImage));
  const audioUrls = await Promise.all(audios.map(saveAudio));

  const job: Job = {
    id,
    images: imageUrls,
    audios: audioUrls,
    status: 'pending',
    createdAt: Date.now()
  };

  // TODO: persist job (storage/queue)
  logInfo('Job created', job.id);

  context.res = {
    status: 201,
    body: job
  };
};

export default createJob;