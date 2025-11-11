export async function transcribeAudio(audioUrl: string): Promise<string> {
  return `Transcribed text from ${audioUrl}`;
}