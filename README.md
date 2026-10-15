# 🇵🇱 TV Wieczór (`tvwieczor.pl`) — Program TV na dziś wieczór

> **Oficjalny serwis:** [https://tvwieczor.pl/](https://tvwieczor.pl/)  
> **Kraj:** Polska (Naziemna Telewizja Cyfrowa DVB-T2)  
> **Stack:** Astro SSG (Static Site Generation) • Tailwind CSS v4 • Cloudflare Pages Edge CDN • EPG XMLTV Poland • TMDb IMDb ⭐ Ratings • IndexNow • Google Indexing API

---

## 🚀 O Projekcie

**TV Wieczór** to najszybszy, minimalistyczny i zoptymalizowany pod kątem urządzeń mobilnych program telewizyjny dla Polski, skupiony na paśmie **Prime Time (od godz. 20:00)** oraz audycjach na żywo (**Teraz w TV**).

W odróżnieniu od ociężałych, przeładowanych reklamami portali konkurencji (Telemagazyn, WP TV, Onet Program TV), TV Wieczór ładuje się w **< 0.3 sekundy**, nie zawiera natrętnych bannerów ani pop-upów i natywnie wspiera tryb ciemny (Dark Mode OLED).

---

## 📺 Pokrycie Kanałów (26 stacji Naziemnej TV DVB-T2)

1. **Wielka Czwórka & Główne Stacje Komercyjne:**
   - TVP 1 (Kanał 1)
   - TVP 2 (Kanał 2)
   - TVP 3 (Kanał 3)
   - Polsat (Kanał 4)
   - TVN (Kanał 5)
   - TV 4 (Kanał 6)
   - TV Puls (Kanał 7)
   - TVN 7 (Kanał 8)
   - Puls 2 (Kanał 9)
   - TV 6 (Kanał 10)
   - Super Polsat (Kanał 11)

2. **Kino, Seriale & Dokumenty:**
   - Stopklatka (Kanał 17)
   - Fokus TV (Kanał 18)
   - TVP Kultura (Kanał 19)
   - TVP Historia (Kanał 20)
   - TVP Dokument (Kanał 24)
   - TTV (Kanał 27)
   - Zoom TV (Kanał 28)
   - Metro (Kanał 29)
   - Nowa TV (Kanał 30)
   - Telewizja WP (Kanał 31)

3. **Informacje, Sport, Dzieci & Muzyka:**
   - TVP Info (Kanał 32)
   - TVP Sport (Kanał 33)
   - TVP ABC (Kanał 34)
   - Eska TV (Kanał 38)
   - Polo TV (Kanał 39)

---

## 🌟 Kluczowe Funkcjonalności (Killer Features)

- **🌙 Hit Wieczoru (Prime Time 20:00):** Natychmiastowy podgląd tego, co warto obejrzeć dziś wieczorem.
- **🔴 Teraz w TV:** Czas rzeczywisty z paskiem postępu i minutami do końca audycji.
- **🍿 Filmy dzisiaj w TV z Ocenami IMDb ⭐:** Integracja z bazą TMDb/IMDb (filtr na seanse z oceną 7.0+).
- **📺 Seriale:** Polskie i zagraniczne hity obyczajowe i kryminalne.
- **🏆 Sport na żywo:** Transmisje meczów, skoków i zawodów.
- **📅 Program na jutro:** Wygodne planowanie wieczorów.
- **⚡ 0ms Edge Hosting:** Globalna sieć Cloudflare Pages CDN z automatycznym certyfikatem SSL.
- **🔍 Automatyzacja SEO:** IndexNow (Bing, Yandex, Seznam) + Google Indexing API (`URL_UPDATED`).

---

## 🛠️ Architektura i Polecenia

```bash
# Instalacja zależności
npm install

# Pobranie ramówki XMLTV i ocen IMDb/TMDb
npm run prebuild

# Budowanie wersji produkcyjnej SSG
npm run build

# Weryfikacja artefaktów (TDD)
npm run postbuild

# Wysłanie powiadomień do wyszukiwarek (IndexNow + Google)
npm run ping
```

---

## 📄 Licencja

Wszelkie prawa do kodu zastrzeżone © 2026 TV Wieczór.  
Logotypy stacji telewizyjnych oraz znaki towarowe programów należą do ich prawnych właścicieli.
