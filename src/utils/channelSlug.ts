/**
 * Channel Slug resolver for Polish channels
 */
import channelsData from '../data/channels.json';

export function getChannelBySlug(slug: string) {
  return channelsData.find((c) => c.id === slug);
}

export function getAllChannelSlugs(): string[] {
  return channelsData.map((c) => c.id);
}
