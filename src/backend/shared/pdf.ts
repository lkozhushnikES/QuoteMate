import { PDFDocument, StandardFonts } from 'pdf-lib';

export async function buildQuotePdf(content: { ocr: string; transcript: string }): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const text = `Fence Quote\n\nOCR:\n${content.ocr}\n\nTranscript:\n${content.transcript}`;
  page.drawText(text, { x: 50, y: page.getHeight() - 50, size: 12, font });
  return await pdf.save();
}