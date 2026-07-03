export interface WikiSummary {
  title: string;
  extract: string;
  thumbnailUrl?: string;
  pageUrl: string;
}

// null in de cache = eerder mislukt; niet opnieuw proberen binnen de sessie.
const cache = new Map<string, WikiSummary | null>();

export async function fetchWikiSummary(title: string): Promise<WikiSummary | null> {
  if (cache.has(title)) return cache.get(title) ?? null;
  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replace(/ /g, '_'))}`
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!data.extract) throw new Error('No extract');
    const summary: WikiSummary = {
      title: data.title,
      extract: data.extract,
      thumbnailUrl: data.thumbnail?.source,
      pageUrl: data.content_urls?.desktop?.page ?? `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`,
    };
    cache.set(title, summary);
    return summary;
  } catch {
    cache.set(title, null);
    return null;
  }
}
