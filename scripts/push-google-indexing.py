#!/usr/bin/env python3
"""
TV Wieczór (tvwieczor.pl) — Google Indexing API Automation
Submits priority Polish DVB-T2 guide URLs to Google Indexing API (URL_UPDATED).
"""
from __future__ import annotations

import argparse
import os
import sys
import time
from pathlib import Path

ROOT = "https://tvwieczor.pl"
CHANNELS = [
    "tvp-1", "tvp-2", "tvp-3", "polsat", "tvn", "tv-4", "tv-puls", "tvn-7",
    "puls-2", "tv-6", "super-polsat", "stopklatka", "fokus-tv", "tvp-kultura",
    "tvp-historia", "tvp-dokument", "ttv", "zoom-tv", "metro", "nowa-tv",
    "wp", "tvp-info", "tvp-sport", "tvp-abc", "eska-tv", "polo-tv"
]
ROOTS = ["/", "/teraz", "/filmy-dzisiaj", "/seriale", "/sport", "/jutro"]

ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish"
SCOPES = ["https://www.googleapis.com/auth/indexing"]

CANDIDATES = [
    os.getenv("GOOGLE_INDEXING_SERVICE_ACCOUNT_FILE"),
    Path("/Users/romolovelati/Desktop/programmecesoir.fr/programmecesoir-c491fade6de8.json"),
    Path("/var/www/programmecesoir.fr/programmecesoir-c491fade6de8.json"),
    Path(__file__).resolve().parent.parent / "google-service-account.json",
    Path(__file__).resolve().parent / "google-service-account.json",
]

def get_service_account_path() -> Path | None:
    for c in CANDIDATES:
        if c:
            p = Path(c)
            if p.exists():
                return p
    return None

def get_priority_urls() -> list[str]:
    urls = [f"{ROOT}{p}/" if p != "/" else f"{ROOT}/" for p in ROOTS]
    for ch in CHANNELS:
        urls.append(f"{ROOT}/{ch}/")
    return urls

def main() -> int:
    parser = argparse.ArgumentParser(description="Submit Polish URLs to Google Indexing API")
    parser.add_argument("--sa", default=None, help="Path to Google Service Account JSON")
    parser.add_argument("--url", default=None, help="Submit only this specific URL (test)")
    args = parser.parse_args()

    sa_path = Path(args.sa) if args.sa else get_service_account_path()
    if not sa_path or not sa_path.exists():
        print(f"[Google Indexing] ERROR: Service Account JSON not found in candidate paths!", file=sys.stderr)
        return 1

    try:
        from google.oauth2 import service_account
        from google.auth.transport.requests import AuthorizedSession
    except ImportError:
        print("[Google Indexing] Installing google-auth library...", file=sys.stderr)
        import subprocess
        subprocess.run([sys.executable, "-m", "pip", "install", "google-auth", "requests"], check=True)
        from google.oauth2 import service_account
        from google.auth.transport.requests import AuthorizedSession

    creds = service_account.Credentials.from_service_account_file(str(sa_path), scopes=SCOPES)
    session = AuthorizedSession(creds)

    import json
    with open(sa_path, "r", encoding="utf-8") as f:
        sa_data = json.load(f)
    client_email = sa_data.get("client_email", "unknown")

    urls_to_submit = [args.url] if args.url else get_priority_urls()

    print(f"=== Google Indexing API — {ROOT} ===")
    print(f"Service Account: {client_email}")
    print(f"URLs to notify : {len(urls_to_submit)}")
    print(f"Endpoint       : {ENDPOINT}")
    print("-" * 50)

    ok_count = 0
    fail_count = 0

    for idx, u in enumerate(urls_to_submit, 1):
        payload = {"url": u, "type": "URL_UPDATED"}
        try:
            resp = session.post(ENDPOINT, json=payload, timeout=15)
            if resp.status_code == 200:
                ok_count += 1
                print(f"[{idx}/{len(urls_to_submit)}] OK 200 -> {u}")
            else:
                fail_count += 1
                print(f"[{idx}/{len(urls_to_submit)}] {resp.status_code} -> {u}")
        except Exception as e:
            fail_count += 1
            print(f"[{idx}/{len(urls_to_submit)}] ERROR -> {u}: {e}")

        time.sleep(0.08)

    print("-" * 50)
    print(f"Completed: {ok_count} OK, {fail_count} failed out of {len(urls_to_submit)} URLs.")
    return 0 if ok_count > 0 else 1

if __name__ == '__main__':
    sys.exit(main())
