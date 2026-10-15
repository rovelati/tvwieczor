/**
 * EPG Data Fetching — SERVER-ONLY (Astro build time).
 * Reads directly from src/data/epg-cache.json and src/data/channels.json snapshot.
 */
import { isCurrentBroadcastDay, getPolandHour } from '../utils/timeSlots';
import type { Channel, Program } from '../types';

import epgData from '../data/epg-cache.json';
import channelsData from '../data/channels.json';

export async function fetchChannels(): Promise<Channel[]> {
  const channels: Channel[] = channelsData.map((c: any) => ({
    id: c.id,
    name: c.name,
    number: c.number || 0,
    logo: c.logo,
    group: c.group || 'general',
    programs: [],
    vodPlatform: c.vodPlatform || 'DVB-T2',
    streamUrl: c.streamUrl || undefined,
    description: c.description || undefined
  }));

  // Sort by LCN (Logical Channel Number)
  channels.sort((a, b) => a.number - b.number);
  return channels;
}

export async function fetchProgramsForDate(dateStr: string): Promise<Program[]> {
  const allProgs = ((epgData as any).programs || []) as Program[];
  return allProgs.filter((p) => isCurrentBroadcastDay(p.start_time, dateStr));
}

export async function fetchChannelPrograms(channelSlug: string, dateStr: string): Promise<Program[]> {
  const allProgs = ((epgData as any).programs || []) as Program[];
  return allProgs
    .filter((p) => p.channel_id === channelSlug && isCurrentBroadcastDay(p.start_time, dateStr))
    .sort((a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime());
}

export async function fetchTonightPrograms(channelSlug: string, dateStr: string): Promise<Program[]> {
  const dayPrograms = await fetchChannelPrograms(channelSlug, dateStr);
  return dayPrograms.filter((p) => {
    const hour = getPolandHour(p.start_time);
    // Evening window: 19:30 to 02:00 (prime time centered at 20:00)
    return hour >= 19 || hour <= 2;
  });
}
