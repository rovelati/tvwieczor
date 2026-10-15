import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tvwieczor.pl',
  output: 'static',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const url = page.toLowerCase();
        // Exclude utility / legal / error pages from sitemap index
        if (url.includes('/404') || url.includes('/polityka-prywatnosci')) {
          return false;
        }
        return true;
      },
      serialize(item) {
        const now = new Date();
        const url = item.url.replace(/\/$/, '') + '/';

        // Homepage (Prime Time 20:00)
        if (url === 'https://tvwieczor.pl/' || item.url === 'https://tvwieczor.pl') {
          return {
            ...item,
            lastmod: now,
            priority: 1.0,
            changefreq: 'hourly',
          };
        }

        // Top Category Hubs
        if (/\/(teraz|filmy-dzisiaj|seriale|sport|jutro)\/?$/.test(item.url)) {
          return {
            ...item,
            lastmod: now,
            priority: 0.9,
            changefreq: 'hourly',
          };
        }

        // Top Free-To-Air Polish Channels (Wielka Czwórka & DVB-T2)
        if (/\/(tvp-1|tvp-2|polsat|tvn|tv-4|tvn-7|tv-puls|puls-2|stopklatka|tvp-sport|tvp-info)\/?$/.test(item.url)) {
          return {
            ...item,
            lastmod: now,
            priority: 0.85,
            changefreq: 'daily',
          };
        }

        // Other valid digital terrestrial channels
        return {
          ...item,
          lastmod: now,
          priority: 0.7,
          changefreq: 'daily',
        };
      },
    }),
  ],
});
