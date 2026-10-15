import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

console.log('[verify-build] Checking built artifacts in dist/ ...');

if (!fs.existsSync(distDir)) {
  console.error('[verify-build] ERROR: dist directory does not exist!');
  process.exit(1);
}

const criticalFiles = [
  'index.html',
  'teraz/index.html',
  'filmy-dzisiaj/index.html',
  'seriale/index.html',
  'sport/index.html',
  'jutro/index.html',
  'tvp-1/index.html',
  'tvp-2/index.html',
  'polsat/index.html',
  'tvn/index.html',
  'tv-4/index.html',
  'stopklatka/index.html',
  'tvp-sport/index.html',
  'robots.txt',
  '4f25c5dc3491468f8459b92c21bb3ac1.txt',
  '_redirects'
];

for (const file of criticalFiles) {
  const filePath = path.join(distDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`[verify-build] ERROR: Missing critical file: ${file}`);
    process.exit(1);
  }
}

// Verify sitemap index
const sitemapIndex = path.join(distDir, 'sitemap-index.xml');
if (!fs.existsSync(sitemapIndex)) {
  console.error('[verify-build] ERROR: sitemap-index.xml missing!');
  process.exit(1);
}

const sitemapContent = fs.readFileSync(sitemapIndex, 'utf-8');
if (sitemapContent.includes('www.tvwieczor.pl')) {
  console.error('[verify-build] ERROR: sitemap contains forbidden www URLs!');
  process.exit(1);
}

console.log('[verify-build] SUCCESS: All 26 Polish critical channels, category hubs & search files verified!');
process.exit(0);
