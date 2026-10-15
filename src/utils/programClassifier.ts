/**
 * Program Classifier for Polish TV (DVB-T2 Naziemna Telewizja Cyfrowa)
 * Categorization for Filmy, Seriale, Sport, Informacje, Dokument, Dzieci.
 */

export function isMovie(category: string = '', title: string = '', description: string = ''): boolean {
  const cat = (category || '').toLowerCase();
  const text = `${title} ${description}`.toLowerCase();

  if (cat.includes('film') || cat.includes('kino') || cat.includes('komedia') || cat.includes('dramat') || 
      cat.includes('thriller') || cat.includes('kryminał') || cat.includes('horror') || cat.includes('western') || 
      cat.includes('akcja') || cat.includes('romans') || cat.includes('fabularny')) {
    return true;
  }

  if (text.includes('w rolach głównych') || text.includes('reżyseria:') || text.includes('film fabularny') || text.includes('dramat obyczajowy')) {
    return true;
  }

  return false;
}

export function isSport(category: string = '', title: string = '', description: string = ''): boolean {
  const cat = (category || '').toLowerCase();
  const text = `${title} ${description}`.toLowerCase();

  const sportKeywords = [
    'sport', 'piłka nożna', 'mecz', 'ekstraklasa', 'liga mistrzów', 'champions league',
    'siatkówka', 'skoki narciarskie', 'żużel', 'speedway', 'boks', 'ksw', 'mma', 'tenis',
    'koszykówka', 'puchar świata', 'lekkoatletyka', 'kolarstwo', 'tour de pologne',
    'reprezentacja polski', 'formuła 1', 'f1', 'skróty meczów', 'magazyn sportowy'
  ];

  if (cat.includes('sport')) return true;
  return sportKeywords.some(k => text.includes(k));
}

export function isSeries(category: string = '', title: string = '', description: string = ''): boolean {
  const cat = (category || '').toLowerCase();
  const text = `${title} ${description}`.toLowerCase();

  if (cat.includes('serial') || cat.includes('telenowela') || cat.includes('sitcom') || cat.includes('soap')) {
    return true;
  }

  const seriesKeywords = [
    'odc.', 'odcinek', 'sezon', 'm jak miłość', 'barwy szczęścia', 'na dobre i na złe',
    'na sygnale', 'ojciec mateusz', 'komisarz alex', 'pierwsza miłość', 'na wspólnej',
    'gliniarze', 'policjantki i policjanci', 'sprawiedliwi', 'lombard. życie pod zastaw',
    'ranczo', 'świat według kiepskich', 'korona królów', 'krew z krwi'
  ];

  return seriesKeywords.some(k => text.includes(k));
}

export function isNews(category: string = '', title: string = '', description: string = ''): boolean {
  const cat = (category || '').toLowerCase();
  const text = `${title} ${description}`.toLowerCase();

  return cat.includes('informac') || cat.includes('wiadomości') || cat.includes('publicystyk') || 
         text.includes('19:30') || text.includes('fakty') || text.includes('wydarzenia') || 
         text.includes('teleexpress') || text.includes('panorama') || text.includes('serwis info') || 
         text.includes('pogoda') || text.includes('biznes');
}
