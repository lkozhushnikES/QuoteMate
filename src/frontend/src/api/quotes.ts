import { api } from './client';
import { Quote } from '../types';

export async function fetchQuotes(): Promise<Quote[]> {
  const { data } = await api.get('/quotes');
  return data;
}

export async function fetchQuote(id: string): Promise<Quote> {
  const { data } = await api.get(`/quotes/${id}`);
  return data;
}