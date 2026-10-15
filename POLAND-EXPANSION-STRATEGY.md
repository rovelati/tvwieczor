# Blueprint & Guida di Espansione: Polonia (PL) 🇵🇱📺
> **Progetto:** Guida TV in chiaro ultra-veloce per la Polonia (Naziemna Telewizja Cyfrowa DVB-T2)  
> **Nome di Lavoro / Dominio:** `tvnawieczor.pl` / `cotv.pl` / `programtvdzis.pl`  
> **Stack:** Astro (SSG) + Tailwind CSS v4 + Cloudflare Pages + EPG XMLTV Poland + IndexNow + Google Indexing API  
> **Target Query SEO:** *"program tv"*, *"program tv na dziś"*, *"co dzisiaj w tv"*, *"filmy dzisiaj w tv"*, *"co obejrzeć w tv"*

---

## 1. Analisi di Mercato: Perché la Polonia è il "Gigante Dormiente"

### A. I Numeri del Mercato Polacco
- **Popolazione:** ~38 milioni di abitanti, con oltre 13 milioni di famiglie dotate di televisore.
- **Consumo TV Lineare:** Tra i più alti in Europa, con una media di **4 ore e 15 minuti giornalieri** per individuo (dati Nielsen Media Poland).
- **Ricerche Mensili:**
  - `program tv`: **~3.500.000 - 5.000.000** ricerche/mese.
  - `program tv na dziś` / `program tv na dzis`: **~1.200.000** ricerche/mese.
  - `co dzisiaj w tv` / `co w tv`: **~500.000** ricerche/mese.
  - `filmy dzisiaj w tv`: **~250.000** ricerche/mese.
  - `mecz dzisiaj w tv` / `sport w tv`: **~450.000** ricerche/mese.
  - `program tv na jutro`: **~200.000** ricerche/mese.
  - Query canali specifici (`tvp 1 program`, `polsat program`, `tvn program`): **> 1.500.000** ricerche/mese combinate.

### B. I Punti Deboli dei Concorrenti Locali
I player dominanti sul mercato polacco sono:
1. **Telemagazyn.pl** (Polska Press)
2. **Tv.wp.pl** (Wirtualna Polska)
3. **Programtv.onet.pl** (Ringier Axel Springer)
4. **Teleman.pl**

**Perché sono vulnerabili alla nostra architettura:**
- **Invasione Pubblicitaria Brutale:** I portali polacchi sono famosi per un ad-load estremo. Pagine piene di interstitial, banner sticky che coprono metà schermo, video outstream con autoplay audio.
- **Esperienza Mobile Ferma al 2012:** Tabelle orizzontali ingombranti, non ottimizzate per l'uso a una mano su smartphone.
- **Core Web Vitals Disastrosi:** LCP medio superiore a **3.8 secondi**, peso pagina medio di **5.2 MB**, CLS frequente a causa di banner caricati in ritardo.
- **Mancanza di Dark Mode:** Pagine con sfondi bianchi accecanti, fastidiosissime da consultare la sera a luci spente sul divano.
- **Cookie Wall Invasivi:** Pop-up GDPR IAB TCF con oltre 700 vendor che rendono la prima navigazione frustrante.

---

## 2. Le Killer Features per Sbaragliare la Concorrenza

1. **"Hit Wieczoru" — Prime Time Polacco centrato sulle 20:00:**
   - In Polonia il Prime Time serale non inizia alle 21:00 o 22:00, ma **tassativamente alle 20:00 / 20:15**, subito dopo i notiziari di punta (*Fakty TVN* delle 19:00 e *19:30* su TVP 1).
   - La nostra vista principale mostra immediatamente cosa c'è stasera alle 20:00, senza dover scorrere ore di repliche pomeridiane.
2. **"Teraz w TV" (On Now con Barra di Progresso Live):**
   - Calcolo istantaneo del programma in onda in questo momento con barra percentuale e minuti rimanenti alla fine.
3. **Filtro DVB-T2 "Naziemna TV" (Canali Gratuiti Nazionali):**
   - Focalizzazione sui 25 canali del digitale terrestre polacco gratuito (Mux 1, 2, 3, 6, 8). L'utente non viene distratto da centinaia di canali pay-tv via satellite.
4. **Filtri Tematici Rapidi:**
   - 🍿 **Filmy dzisiaj w TV** (Tutti i film in onda oggi ordinati per orario e voto IMDb).
   - 🏆 **Sport na żywo** (Calcio Ekstraklasa, Champions, Salto con gli sci, Pallavolo, Speedway).
   - 📺 **Seriale w TV** (Serie tv polacche e internazionali).
   - 📅 **Program na Jutro** (Pianificazione del giorno dopo).
5. **Integrazione Stelline IMDb ⭐ & Voti della Critica (Killer Feature per la Scelta del Film):**
   - **Badge Stellina Live sulle Card Canale:** Ogni film o serie in programmazione mostra il rating IMDb/TMDb (es. `⭐ 7.8` / `⭐ 8.4`) in oro ambra ad alto contrasto.
   - **Filtro "Najwyżej oceniane" (Film Top Rated ⭐ 7.0+):** Permette all'utente di selezionare in 1 click solo i film di alta qualità in palinsesto stasera, eliminando i film di seconda fascia.
   - **Modal Dettaglio Programma:** Nel pop-up compaiono il voto IMDb, la durata, la trama in polacco e la locandina ad alta risoluzione.
   - **Rich Snippets Google (Schema.org `AggregateRating`):** Generazione automatica del markup con `ratingValue` e `bestRating: 10`, facendo apparire le stelline dorate ⭐⭐⭐⭐⭐ direttamente nelle SERP di Google.pl, aumentando il Click-Through Rate (CTR) organico di oltre il +35%!
6. **Caricamento Edge a 0ms (Astro SSG + Cloudflare Pages):**
   - Pagina statica pre-renderizzata di soli **~25 KB gzipped**, caricamento istantaneo senza attendere query di database lenti.
7. **Dark Mode Nativa OLED:**
   - Palette profonda `#020617` (Slate 950) e contrasto tipografico elevato.
8. **Pipeline di Indicizzazione Real-Time:**
   - Sottomissione automatica giornaliera a **IndexNow** (Bing, Yandex, Seznam) e **Google Indexing API** (`URL_UPDATED`).

---

## 3. Analisi e Selezione del Nome a Dominio

In Polonia il TLD nazionale **`.pl`** è fondamentale per la fiducia degli utenti e il CTR organico.

| Nome Dominio | Significato / Rationale | Pro |
| :--- | :--- | :--- |
| **`tvwieczor.pl`** / **`tvnawieczor.pl`** | *"TV la sera"* / *"TV per stasera"* | Allineamento perfetto con il concept `uktvtonight` e `fernsehheute`. Brandable e SEO-friendly. |
| **`cotv.pl`** / **`cowtv.pl`** | *"Cosa c'è in TV"* (*Co w TV?*) | Cortissimo, memorabile, espressione di uso comune tra i polacchi. |
| **`programtvdzis.pl`** | *"Program TV oggi"* | Exact match keyword con altissimo volume di ricerca diretto. |
| **`pilotv.pl`** | *"Telecomando TV"* (*Pilot TV*) | Simpatico, domestico, associato al cambio canale. |
| **`ekrantv.pl`** | *"Schermo TV"* | Moderno, pulito. |

> **Raccomandazione Principale:** Registrare prioritariamente **`tvnawieczor.pl`** oppure **`cotv.pl`** (con redirect speculare da `www`).

---

## 4. Canali Target della Televisione Polacca (Cluster 25 Canali DVB-T2)

La versione iniziale coprirà i 25 canali gratuiti della televisione digitale terrestre polacca (Naziemna Telewizja Cyfrowa):

### 1. Canali Generalisti Nazionali ("Wielka Czwórka" + Komercyjne)
1. `tvp-1` — **TVP 1** (Emittente pubblica di riferimento: informazione, film, fiction polacca)
2. `tvp-2` — **TVP 2** (Intrattenimento, cabaret, serie tv, musica)
3. `polsat` — **Polsat** (Primo canale privato per ascolti: film d'azione, show, intrattenimento)
4. `tvn` — **TVN** (Canale commerciale leader del gruppo Warner Bros. Discovery: grandi produzioni, fiction, informazione)
5. `tv-4` — **TV 4** (Canale del gruppo Polsat: serie poliziesche, reality)
6. `tvn-7` — **TVN 7** (Cinema, serie internazionali e format giovani)
7. `tv-puls` — **TV Puls** (Cinema commerciale, commedie, animazione)
8. `puls-2` — **Puls 2** (Blocco bambini diurno + film e serie serali)
9. `tv-6` — **TV 6** (Intrattenimento tematico)
10. `super-polsat` — **Super Polsat** (Intrattenimento accessibile con audiodescrizione)

### 2. Canali Tematici, Cinema & Documentari
11. `stopklatka` — **Stopklatka** (Canale 100% dedicato al cinema e alle serie)
12. `fokus-tv` — **Fokus TV** (Documentari, scienza, natura, storia)
13. `tvp-kultura` — **TVP Kultura** (Cinema d'autore, teatro, arte, concerti)
14. `tvp-historia` — **TVP Historia** (Storia polacca e mondiale, documentari)
15. `tvp-dokument` — **TVP Dokument** (Grandi documentari naturalistici e sociali)
16. `ttv` — **TTV** (Attualità, reality docu-soap, informazione alternativa)
17. `zoom-tv` — **Zoom TV** (Cinema, mistero, intrattenimento)
18. `metro` — **Metro** (Cinema e serie tv WBD)
19. `nowa-tv` — **Nowa TV** (Serie e cinema leggero)
20. `wp` — **Telewizja WP** (Storie vere, lifestyle, cinema)

### 3. Notizie, Sport & Musica
21. `tvp-info` — **TVP Info** (All-news nazionale)
22. `tvp-sport` — **TVP Sport** (Grande sport in chiaro: nazionale di calcio, olimpiadi, sci)
23. `eska-tv` — **Eska TV** (Musica pop, classifiche, show giovanili)
24. `polo-tv` — **Polo TV** (Musica dance/disco polo polacca, ascolti altissimi nelle province)
25. `tvp-abc` — **TVP ABC** (Canale per bambini ed educazione prescolare)

---

## 5. Architettura Pagine & Routing SEO

```text
src/pages/
├── index.astro                -> "Program TV na dziś wieczór" (Prime Time ore 20:00)
├── teraz.astro                -> "Teraz w TV" (En Directo / On Now con barre di avanzamento live)
├── filmy-dzisiaj.astro        -> "Filmy dzisiaj w TV" (Tutti i film di oggi ordinati per ora e rating)
├── seriale.astro              -> "Seriale w TV dzisiaj" (Tutte le serie TV e telenovele)
├── sport.astro                -> "Sport w TV dzisiaj" (Calcio, pallavolo, sci, tennis)
├── jutro.astro                -> "Program TV na jutro" (Programmazione di domani)
├── [kanal].astro              -> Pagine dinamiche dei 25 canali (es. /tvp-1/, /polsat/, /tvn/)
├── polityka-prywatnosci.astro -> Privacy & Cookie Policy GDPR
└── 404.astro                  -> Pagina di errore custom con reindirizzamenti interni rapidi
```

### Metadati HTML & Geolocalizzazione Polonia
```html
<html lang="pl-PL">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="geo.region" content="PL" />
  <meta name="geo.country" content="Polska" />
  <meta name="geo.placename" content="Polska (Warszawa, Kraków, Wrocław, Poznań, Gdańsk, Łódź)" />
  <meta name="geo.position" content="52.2297;21.0122" />
  <meta name="ICBM" content="52.2297, 21.0122" />
  <meta http-equiv="content-language" content="pl-PL" />
  <link rel="alternate" hreflang="pl-PL" href="https://tvnawieczor.pl/" />
  <link rel="alternate" hreflang="x-default" href="https://tvnawieczor.pl/" />
```

---

## 6. Pipeline di Ingestione EPG (`scripts/fetch-epg-poland.py`)

### Caratteristiche del Feed Polacco XMLTV
- **Endpoint Principale:** `https://epgshare01.online/epgshare01/epg_ripper_PL1.xml.gz` (~8.9 MB compresso, CDN Cloudflare, aggiornato ogni 4 ore).
- **Endpoint Fallback:** `https://raw.githubusercontent.com/iptv-org/epg/master/sites/programtv.onet.pl/programtv.onet.pl.channels.xml`
- **Fuso Orario Locale:** `Europe/Warsaw` (CET/CEST, UTC+1 / UTC+2).
- **Script di parsing:**
  1. Scarica in RAM lo stream compresso `.xml.gz`.
  2. Filtra esclusivamente i 25 canali whitelistati.
  3. Estrae la finestra da 3 ore prima di adesso fino alle 06:00 del giorno dopo (+ programmazione di domani).
  4. Genera `src/data/epg-cache.json` compresso e minificato (< 1.2 MB).

---

## 7. Strategia di Indicizzazione (IndexNow + Google Indexing API)

1. **IndexNow Verification:**
   - File chiave nella root: `public/4f25c5dc3491468f8459b92c21bb3ac1.txt`
   - Ping automatico post-build e via cron su:
     - `https://api.indexnow.org/indexnow`
     - `https://www.bing.com/indexnow`
     - `https://yandex.com/indexnow`
     - `https://search.seznam.cz/indexnow` (Seznam è molto forte in Europa centrale)
2. **Google Indexing API (`push-google-indexing.py`):**
   - Utilizzo del Service Account condiviso `programme@programmecesoir.iam.gserviceaccount.com`.
   - Invio automatico del segnale `URL_UPDATED` su tutti i 31 URL canonici (6 hub + 25 canali).

---

## 8. Piano Test-Driven di Verifica Finale (TDD)

Prima del rilascio live e dell'indicizzazione, il progetto deve superare rigorosamente questa matrice di test:

### 🧪 Matrice di Test Automatizzati

```text
[TDD PILASTRO 1: Ingestione Dati EPG]
├── TEST-1.1: Download del feed XMLTV PL da epgshare01 senza timeout (con fallback).
├── TEST-1.2: Parsing e mappatura completa di tutti i 25/25 canali DVB-T2.
├── TEST-1.3: Conversione corretta dei timestamp UTC in fuso orario 'Europe/Warsaw'.
├── TEST-1.4: Integrità JSON generato (nessun campo null, titolo presente, durata > 0).
└── TEST-1.5: Dimensione file cache < 2.0 MB per massimizzare la velocità di build.

[TDD PILASTRO 2: Generazione Pagine Statiche Astro SSG]
├── TEST-2.1: Esecuzione `astro build` con 0 errori e 0 warning.
├── TEST-2.2: Generazione di tutte le 31+ pagine canoniche in `dist/`.
├── TEST-2.3: Verifica trailing slash consistente su tutte le rotte (`/`).
├── TEST-2.4: Presenza del tag canonico univoco e corretto in ogni pagina HTML.
└── TEST-2.5: Presenza del codice GA4 in `<head>` con `is:inline`.

[TDD PILASTRO 3: Dati Strutturati Schema.org & SEO On-Page]
├── TEST-3.1: Validazione JSON-LD Schema `WebSite`, `Organization`, `BreadcrumbList`.
├── TEST-3.2: Validazione schema `TVGuide` e `ItemList` per i rich snippet dei programmi serali.
├── TEST-3.3: Verifica metadati OpenGraph (`og:title`, `og:description`, `og:image`, `og:locale="pl_PL"`).
└── TEST-3.4: Verifica meta tag geografici Polonia (`geo.region="PL"`).

[TDD PILASTRO 4: Performance & Core Web Vitals]
├── TEST-4.1: Largest Contentful Paint (LCP) su mobile < 800ms.
├── TEST-4.2: Cumulative Layout Shift (CLS) = 0 (nessun banner dinamico o layout shift).
├── TEST-4.3: First Input Delay / INP < 50ms.
└── TEST-4.4: Peso complessivo pagina HTML + asset critici < 40 KB gzipped.

[TDD PILASTRO 5: Motori di Ricerca & Sitemaps]
├── TEST-5.1: `sitemap-index.xml` valido con status 200 e content-type `application/xml`.
├── TEST-5.2: 0 URL `www` e 0 URL senza trailing slash all'interno della sitemap.
├── TEST-5.3: `robots.txt` accessibile con dichiarazione della sitemap e blocco canali adult/test.
├── TEST-5.4: Test ping IndexNow su Bing con esito Status 200 OK.
└── TEST-5.5: Test sottomissione Google Indexing API con esito Status 200 OK.

[TDD PILASTRO 6: UX, Responsive & Dark Mode]
├── TEST-6.1: Visualizzazione perfetta su viewport mobile (375px, 390px, 414px) senza overflow orizzontale.
├── TEST-6.2: Barra di avanzamento live ("Teraz w TV") sincronizzata con l'orario reale di Varsavia.
├── TEST-6.3: Filtro rapido 20:00 attivo di default nella vista Tonight.
└── TEST-6.4: Contrasto dark mode accessibile conforme alle linee guida WCAG AAA.
```
