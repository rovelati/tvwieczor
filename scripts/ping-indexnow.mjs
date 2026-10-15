#!/usr/bin/env node
/**
 * ping-indexnow.mjs — tvwieczor.pl
 * Submits high-priority Polish DVB-T2 TV guide URLs to IndexNow (Bing, Microsoft, Yandex, Seznam).
 */

const HOST = 'tvwieczor.pl';
const KEYS = [
  '4f25c5dc3491468f8459b92c21bb3ac1',
  '211149cc9ea6e1474b4a1881220eef9b'
];

const ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
  'https://search.seznam.cz/indexnow'
];

// Priority URLs for TV Wieczór Poland
const PRIORITY_URLS = [
  `https://${HOST}/`,
  `https://${HOST}/teraz/`,
  `https://${HOST}/filmy-dzisiaj/`,
  `https://${HOST}/seriale/`,
  `https://${HOST}/sport/`,
  `https://${HOST}/jutro/`,
  `https://${HOST}/tvp-1/`,
  `https://${HOST}/tvp-2/`,
  `https://${HOST}/tvp-3/`,
  `https://${HOST}/polsat/`,
  `https://${HOST}/tvn/`,
  `https://${HOST}/tv-4/`,
  `https://${HOST}/tv-puls/`,
  `https://${HOST}/tvn-7/`,
  `https://${HOST}/puls-2/`,
  `https://${HOST}/tv-6/`,
  `https://${HOST}/super-polsat/`,
  `https://${HOST}/stopklatka/`,
  `https://${HOST}/fokus-tv/`,
  `https://${HOST}/tvp-kultura/`,
  `https://${HOST}/tvp-historia/`,
  `https://${HOST}/tvp-dokument/`,
  `https://${HOST}/ttv/`,
  `https://${HOST}/zoom-tv/`,
  `https://${HOST}/metro/`,
  `https://${HOST}/nowa-tv/`,
  `https://${HOST}/wp/`,
  `https://${HOST}/tvp-info/`,
  `https://${HOST}/tvp-sport/`,
  `https://${HOST}/tvp-abc/`,
  `https://${HOST}/eska-tv/`,
  `https://${HOST}/polo-tv/`,
];

async function pingIndexNow() {
  console.log(`[IndexNow] Preparing IndexNow notification for ${HOST}...`);
  console.log(`[IndexNow] Submitting ${PRIORITY_URLS.length} Polish priority URLs:`);
  PRIORITY_URLS.forEach((u, i) => console.log(`  ${i + 1}. ${u}`));

  for (const KEY of KEYS) {
    const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
    console.log(`\n--- Pinging with KEY: ${KEY} ---`);

    const payload = {
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: PRIORITY_URLS,
    };

    for (const endpoint of ENDPOINTS) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify(payload),
        });

        console.log(`[IndexNow] ${endpoint} -> Status ${response.status} (${response.statusText || 'OK'})`);
        if (!response.ok) {
          const text = await response.text();
          console.warn(`[IndexNow] Response body:`, text);
        }
      } catch (err) {
        console.error(`[IndexNow] Failed to ping ${endpoint}:`, err instanceof Error ? err.message : err);
      }
    }
  }

  console.log(`\n[IndexNow] Notification process complete!`);
}

pingIndexNow();
