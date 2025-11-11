export async function matchKnowledgeBase(text: string): Promise<string[]> {
  return [`Matched term for: ${text}`];
}