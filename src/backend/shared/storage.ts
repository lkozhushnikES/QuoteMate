// Placeholder for blob operations
export async function saveImage(dataUrl: string): Promise<string> {
  // TODO: convert dataURL to blob & upload.
  return `https://example.com/image/${Date.now()}`;
}

export async function saveAudio(dataUrl: string): Promise<string> {
  return `https://example.com/audio/${Date.now()}`;
}

export async function savePdf(buffer: Uint8Array): Promise<string> {
  return `https://example.com/pdf/${Date.now()}`;
}