/**
 * Polish TV Guide — Image & Fallback Resolver
 * Zero-latency differentiated local fallbacks served directly from Cloudflare Pages Edge.
 */

export const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
  'news': '/images/fallbacks/news.jpg',
  'pogoda': '/images/fallbacks/pogoda.jpg',
  'publicystyka': '/images/fallbacks/publicystyka.jpg',
  'dokument': '/images/fallbacks/dokument.jpg',
  'kryminal': '/images/fallbacks/kryminal.jpg',
  'rozrywka': '/images/fallbacks/rozrywka.jpg',
  'gotowanie': '/images/fallbacks/gotowanie.jpg',
  'lifestyle': '/images/fallbacks/lifestyle.jpg',
  'muzyka': '/images/fallbacks/muzyka.jpg',
  'religia': '/images/fallbacks/religia.jpg',
  'dzieci': '/images/fallbacks/dzieci.jpg',
  'sports': '/images/fallbacks/sports.jpg',
  'movies': '/images/fallbacks/movies.jpg',
  'shows': '/images/fallbacks/shows.jpg',
  'default': '/images/fallbacks/default.jpg',
};

export const POPULAR_POLISH_PROGRAM_POSTERS: Record<string, string> = {
  '19.30': '/images/fallbacks/news.jpg',
  '19:30': '/images/fallbacks/news.jpg',
  'fakty': '/images/fallbacks/news.jpg',
  'wydarzenia': '/images/fallbacks/news.jpg',
  'teleexpress': '/images/fallbacks/news.jpg',
  'panorama': '/images/fallbacks/news.jpg',
  'serwis info': '/images/fallbacks/news.jpg',
  'express': '/images/fallbacks/news.jpg',

  'pogoda': '/images/fallbacks/pogoda.jpg',
  'prognoza': '/images/fallbacks/pogoda.jpg',
  'meteo': '/images/fallbacks/pogoda.jpg',

  'pytanie dnia': '/images/fallbacks/publicystyka.jpg',
  'kropka nad i': '/images/fallbacks/publicystyka.jpg',
  'gość wydarzeń': '/images/fallbacks/publicystyka.jpg',
  'kawa na ławę': '/images/fallbacks/publicystyka.jpg',
  'publicystyk': '/images/fallbacks/publicystyka.jpg',
  'woronicza': '/images/fallbacks/publicystyka.jpg',
  'minęła': '/images/fallbacks/publicystyka.jpg',

  'sprawa dla reportera': '/images/fallbacks/dokument.jpg',
  'alarm': '/images/fallbacks/dokument.jpg',
  'interwencja': '/images/fallbacks/dokument.jpg',
  'państwo w państwie': '/images/fallbacks/dokument.jpg',
  'rolnicy. podlasie': '/images/fallbacks/dokument.jpg',
  'sensacje xx wieku': '/images/fallbacks/dokument.jpg',

  'kuchenne rewolucje': '/images/fallbacks/gotowanie.jpg',
  'makłowicz': '/images/fallbacks/gotowanie.jpg',
  'masterchef': '/images/fallbacks/gotowanie.jpg',
  'ugotowani': '/images/fallbacks/gotowanie.jpg',

  'damy i wieśniaczki': '/images/fallbacks/lifestyle.jpg',
  'zakup w ciemno': '/images/fallbacks/lifestyle.jpg',
  'życie na kredycie': '/images/fallbacks/lifestyle.jpg',
  'nasz nowy dom': '/images/fallbacks/lifestyle.jpg',
  'gogglebox': '/images/fallbacks/lifestyle.jpg',
  'chłopaki do wzięcia': '/images/fallbacks/lifestyle.jpg',
  'rolnik szuka żony': '/images/fallbacks/lifestyle.jpg',
  'sanatorium miłości': '/images/fallbacks/lifestyle.jpg',

  'jeden z dziesięciu': '/images/fallbacks/rozrywka.jpg',
  'jaka to melodia': '/images/fallbacks/rozrywka.jpg',
  'koło fortuny': '/images/fallbacks/rozrywka.jpg',
  'milionerzy': '/images/fallbacks/rozrywka.jpg',
  'kabaret': '/images/fallbacks/rozrywka.jpg',
  'twoja twarz': '/images/fallbacks/rozrywka.jpg',
  'taniec z gwiazdami': '/images/fallbacks/rozrywka.jpg',

  'disco polo': '/images/fallbacks/muzyka.jpg',
  'hit za hitem': '/images/fallbacks/muzyka.jpg',
  'gorąca 20': '/images/fallbacks/muzyka.jpg',
  'polo tv': '/images/fallbacks/muzyka.jpg',
  'eska': '/images/fallbacks/muzyka.jpg',
  'wakacje z bałtykiem': '/images/fallbacks/muzyka.jpg',
  'imprez': '/images/fallbacks/muzyka.jpg',

  'msza': '/images/fallbacks/religia.jpg',
  'jasna góra': '/images/fallbacks/religia.jpg',
  'koronka': '/images/fallbacks/religia.jpg',
  'katolick': '/images/fallbacks/religia.jpg',

  'gliniarze': '/images/fallbacks/kryminal.jpg',
  'policjantki': '/images/fallbacks/kryminal.jpg',
  'sprawiedliwi': '/images/fallbacks/kryminal.jpg',
  'kryminal': '/images/fallbacks/kryminal.jpg',
  'śledztw': '/images/fallbacks/kryminal.jpg',
  'csi': '/images/fallbacks/kryminal.jpg',
  'kości': '/images/fallbacks/kryminal.jpg',
  'mentalista': '/images/fallbacks/kryminal.jpg',
  'ojciec mateusz': '/images/fallbacks/kryminal.jpg',
  'komisarz alex': '/images/fallbacks/kryminal.jpg',
  '997': '/images/fallbacks/kryminal.jpg',

  'puls kids': '/images/fallbacks/dzieci.jpg',
  'psi patrol': '/images/fallbacks/dzieci.jpg',
  'peppa': '/images/fallbacks/dzieci.jpg',
  'smerfy': '/images/fallbacks/dzieci.jpg',
  'bajka': '/images/fallbacks/dzieci.jpg',
  'kreskówk': '/images/fallbacks/dzieci.jpg',
  'tvp abc': '/images/fallbacks/dzieci.jpg',
};

export function getFallbackImageForProgram(title: string = '', category: string = ''): string {
  const t = title.toLowerCase().trim();
  const c = category.toLowerCase().trim();

  // 1. Direct program title keyword match
  for (const [key, url] of Object.entries(POPULAR_POLISH_PROGRAM_POSTERS)) {
    if (t.includes(key)) return url;
  }

  // 2. Specific topic categorization
  if (t.includes('pogoda') || t.includes('meteo')) return CATEGORY_FALLBACK_IMAGES['pogoda'];
  if (t.includes('kuchn') || t.includes('gotow') || t.includes('smak') || t.includes('przepis')) return CATEGORY_FALLBACK_IMAGES['gotowanie'];
  if (t.includes('policj') || t.includes('detektyw') || t.includes('krym') || t.includes('zagadk')) return CATEGORY_FALLBACK_IMAGES['kryminal'];
  if (t.includes('remont') || t.includes('dom') || t.includes('wnętrz') || t.includes('zakup')) return CATEGORY_FALLBACK_IMAGES['lifestyle'];
  if (t.includes('muzyk') || t.includes('koncert') || t.includes('disco') || t.includes('hit')) return CATEGORY_FALLBACK_IMAGES['muzyka'];
  if (t.includes('msz') || t.includes('modlitw') || t.includes('relig')) return CATEGORY_FALLBACK_IMAGES['religia'];
  if (t.includes('show') || t.includes('teleturniej') || t.includes('gra') || t.includes('kabaret')) return CATEGORY_FALLBACK_IMAGES['rozrywka'];

  // 3. Category matching
  if (c.includes('informac') || c.includes('wiadomość') || c.includes('serwis')) return CATEGORY_FALLBACK_IMAGES['news'];
  if (c.includes('publicyst')) return CATEGORY_FALLBACK_IMAGES['publicystyka'];
  if (c.includes('sport') || c.includes('piłk') || c.includes('skok') || c.includes('mecz') || c.includes('boks')) return CATEGORY_FALLBACK_IMAGES['sports'];
  if (c.includes('film') || c.includes('kino') || c.includes('dramat') || c.includes('komedia') || c.includes('sensac')) return CATEGORY_FALLBACK_IMAGES['movies'];
  if (c.includes('serial') || c.includes('telenowel')) return CATEGORY_FALLBACK_IMAGES['shows'];
  if (c.includes('dokument') || c.includes('przyrod') || c.includes('histor')) return CATEGORY_FALLBACK_IMAGES['dokument'];
  if (c.includes('dziec') || c.includes('animac') || c.includes('bajk')) return CATEGORY_FALLBACK_IMAGES['dzieci'];
  if (c.includes('rozrywk') || c.includes('teleturniej')) return CATEGORY_FALLBACK_IMAGES['rozrywka'];
  if (c.includes('muzyk')) return CATEGORY_FALLBACK_IMAGES['muzyka'];

  return CATEGORY_FALLBACK_IMAGES['default'];
}

export function getCleanProgramImage(rawImageUrl: string | undefined | null, title: string = '', category: string = ''): string {
  if (rawImageUrl && rawImageUrl.startsWith('http')) {
    return rawImageUrl;
  }
  return getFallbackImageForProgram(title, category);
}
