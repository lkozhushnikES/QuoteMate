export interface Job {
  id: string;
  images: string[];
  audios: string[];
  status: 'pending' | 'processing' | 'completed' | 'error';
  createdAt: number;
  quoteId?: string;
}

export interface Quote {
  id: string;
  jobId: string;
  pdfUrl?: string;
  status: 'pending' | 'generated' | 'error';
  createdAt: number;
}