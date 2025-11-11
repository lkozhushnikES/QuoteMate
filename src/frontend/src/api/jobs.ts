import { api } from './client';

export async function createJob(payload: { images: string[]; audios: string[] }) {
  const { data } = await api.post('/createJob', payload);
  return data;
}