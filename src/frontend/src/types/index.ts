export interface Quote {
  id: string;
  status: 'pending' | 'generated' | 'error';
  pdfUrl?: string;
  createdAt: number;
}
export interface MediaQueueItem {
  type: 'image' | 'audio';
  data: string;
  timestamp: number;
}