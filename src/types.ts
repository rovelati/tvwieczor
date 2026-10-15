export interface Program {
  id: string | number;
  title: string;
  sub_title?: string | null;
  start_time: string;  // ISO UTC format
  end_time: string;    // ISO UTC format
  category: string;
  description: string;
  slug?: string;
  image_url?: string | null;
  rating?: string | null;
  imdb_rating?: number | null;
  channel_id?: string;
}

export interface Channel {
  id: string;
  name: string;
  number: number; // LCN (Numer kanału)
  logo: string;
  group?: 'general' | 'movies' | 'series' | 'sport' | 'news' | 'kids' | 'music' | 'factual';
  programs: Program[];
  vodPlatform?: string; // 'TVP VOD', 'Polsat Box Go', 'Player', 'Pilot WP'
  streamUrl?: string;
  description?: string;
}

export interface HubChannel {
  id: string;
  name: string;
  number?: number;
}
