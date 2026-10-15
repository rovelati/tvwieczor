/**
 * Polish TV Guide — Image & Fallback Resolver
 * Zero-latency local fallbacks served directly from Cloudflare Pages Edge.
 */

export const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
  'Informacje': '/images/fallbacks/news.jpg',
  'Wiadomości': '/images/fallbacks/news.jpg',
  'Sport': '/images/fallbacks/sports.jpg',
  'Serial': '/images/fallbacks/shows.jpg',
  'Film': '/images/fallbacks/movies.jpg',
  'Dokument': '/images/fallbacks/default.jpg',
  'Dzieci': '/images/fallbacks/kids.jpg',
  'Rozrywka': '/images/fallbacks/comedy.jpg',
  'Muzyka': '/images/fallbacks/shows.jpg',
  'Default': '/images/fallbacks/default.jpg',
};

export const POPULAR_POLISH_PROGRAM_POSTERS: Record<string, string> = {
  '19:30': '/images/fallbacks/news.jpg',
  'fakty': '/images/fallbacks/news.jpg',
  'wydarzenia': '/images/fallbacks/news.jpg',
  'teleexpress': '/images/fallbacks/news.jpg',
  'panorama': '/images/fallbacks/news.jpg',
  'm jak miłość': '/images/fallbacks/shows.jpg',
  'barwy szczęścia': '/images/fallbacks/shows.jpg',
  'na dobre i na złe': '/images/fallbacks/shows.jpg',
  'ojciec mateusz': '/images/fallbacks/shows.jpg',
  'komisarz alex': '/images/fallbacks/shows.jpg',
  'ranczo': '/images/fallbacks/comedy.jpg',
  'rolnicy. podlasie': '/images/fallbacks/default.jpg',
  'gogglebox': '/images/fallbacks/comedy.jpg',
  'lombard. życie pod zastaw': '/images/fallbacks/shows.jpg',
};

export function getFallbackImageForProgram(title: string = '', category: string = ''): string {
  const t = title.toLowerCase().trim();
  for (const [key, url] of Object.entries(POPULAR_POLISH_PROGRAM_POSTERS)) {
    if (t.includes(key)) return url;
  }

  if (category && CATEGORY_FALLBACK_IMAGES[category]) {
    return CATEGORY_FALLBACK_IMAGES[category];
  }

  if (category) {
    const catLower = category.toLowerCase().trim();
    for (const [catKey, url] of Object.entries(CATEGORY_FALLBACK_IMAGES)) {
      if (catLower.includes(catKey.toLowerCase())) return url;
    }
  }

  return CATEGORY_FALLBACK_IMAGES['Default'];
}

export function getCleanProgramImage(rawImageUrl: string | undefined | null, title: string = '', category: string = ''): string {
  if (rawImageUrl && rawImageUrl.startsWith('http')) {
    return rawImageUrl;
  }
  return getFallbackImageForProgram(title, category);
}
