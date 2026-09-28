#!/usr/bin/env python3
import os
import re
import urllib.request
from urllib.parse import urljoin

BASE_URL = 'https://commanddeck.com'
PAGES = [
    'index.html',
    'about.html',
    'Prices.html',
    'schedule.html',
    'contact.html',
    'callback.html',
    'pass.html'
]

DEST_DIR = 'archive/legacy_turbify'
os.makedirs(f'{DEST_DIR}/html', exist_ok=True)
os.makedirs(f'{DEST_DIR}/sitebuilder/images', exist_ok=True)
os.makedirs(f'{DEST_DIR}/images', exist_ok=True)

all_images = set()
all_html_content = {}

print('--- Fetching HTML pages ---')
for page in PAGES:
    url = f'{BASE_URL}/{page}'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
            all_html_content[page] = content
            with open(f'{DEST_DIR}/html/{page}', 'w', encoding='utf-8') as f:
                f.write(content)
            print(f'Saved {page} ({len(content)} bytes)')
            
            # Find all image sources: src="..." or src='...' or ImageAssetImpl:/...
            src_matches = re.findall(r'src=["\']([^"\']+\.(?:jpg|png|gif|jpeg|svg|JPG|PNG|GIF))["\']', content, re.IGNORECASE)
            for m in src_matches:
                if not m.startswith('http'):
                    all_images.add(m.lstrip('/'))
            
            asset_matches = re.findall(r'ImageAssetImpl:([^$\s]+\.(?:jpg|png|gif|jpeg|svg|JPG|PNG|GIF))', content, re.IGNORECASE)
            for m in asset_matches:
                all_images.add(m.lstrip('/'))
                # Also check if sitebuilder resized version exists or vice versa
                filename = os.path.basename(m)
                all_images.add(f'images/{filename}')
    except Exception as e:
        print(f'Error fetching {page}: {e}')

print(f'\nFound {len(all_images)} potential image targets:')
for img in sorted(all_images):
    print(f'  {img}')

print('\n--- Downloading images ---')
downloaded_count = 0
for img_path in sorted(all_images):
    img_url = f'{BASE_URL}/{img_path}'
    local_path = f'{DEST_DIR}/{img_path}'
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as resp:
            ct = resp.headers.get('Content-Type', '')
            if 'image' in ct or 'gif' in ct or 'jpeg' in ct or 'png' in ct:
                data = resp.read()
                with open(local_path, 'wb') as f:
                    f.write(data)
                downloaded_count += 1
                print(f'OK: {img_path} ({len(data)} bytes, {ct})')
            else:
                # Not an image (e.g. 404 page rendered as HTML)
                if os.path.exists(local_path):
                    os.remove(local_path)
    except Exception as e:
        print(f'FAIL: {img_path}: {e}')

print(f'\nSuccessfully downloaded {downloaded_count} image assets.')
