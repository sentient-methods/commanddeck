# Command Deck (`commanddeck.com`) Memorial & Nostalgia Site

Dedicated historical memorial and nostalgia tribute site for the **Command Deck Close Quarters Battle (CQB) Academy**, originally located at the Provo Towne Centre in Provo, Utah (below Cinemark 16, active 2012 - 2020).

Physical arena operations ceased following the pandemic, and mobile operations evolved into sister company **Frontline TAG** (`https://frontlinetag.com`).

---

## 1. Project Overview & Philosophy

Command Deck challenged the traditional laser tag stereotype (dark blacklight dungeons, chaotic herds of 30 strangers, bulky plastic vests, and canned video briefings). Instead, it was built as an intimate, family-friendly CQB tactical facility:
- **Strict Private Squads (2 to 8 Players Max)**: Never combined with strangers.
- **Starship CQB Architecture**: Black diamond-plate steel flooring, metallic truss beams, and impact-absorbing sway barriers with pop-out crush zones.
- **Weapon HUDs & RFID Bases**: Infrared blasters with real-time ammunition/health weapon HUDs, wall-mounted RFID ammo dumps, and respawn stations.
- **Dedicated Live Referees**: Human referees giving live game briefings and mentoring younger players inside the course.
- **Mom's Moment of Zen**: Bright, clean mall concourse setting with live video observation tablets.

---

## 2. Preserved Legacy Origin (`archive/legacy_turbify/`)

All historical assets from the original Turbify / Yahoo SiteBuilder origin have been crawled and preserved:
- 7 historical HTML pages (`index.html`, `about.html`, `Prices.html`, `schedule.html`, `contact.html`, `callback.html`, `pass.html`).
- 56 verified photographic and media assets (storefront facade, mall check-in kiosk, starship corridor firefights, party staging room, and authentic military rank pass insignias).
- Verbatim customer testimonials from Cherri Hanks, Kelly Walker, and Lori Beals.

---

## 3. Local Development in Docker Desktop

Per engineering standards, all builds and preview environments run strictly inside **Docker Desktop**. Never build raw node artifacts on the local host.

### Start Development Server
```bash
docker compose up -d --build
```
The development server will be available at:
`http://localhost:3008`

### View Container Logs
```bash
docker compose logs -f web
```

### Stop Development Container
```bash
docker compose down
```

---

## 4. Production Static Build for Cloudflare Pages

To verify the static production export inside Docker Desktop:
```bash
docker build --target builder -t commanddeck:build .
```
The production output is placed in `/app/out`, ready for zero-overhead static deployment on Cloudflare Pages.

---

## 5. Repository & Architecture

- **Organization**: `sentient-methods`
- **Repository**: `sentient-methods/commanddeck`
- **Stack**: Next.js 14 (App Router) + TypeScript + Tailwind CSS (Static Export).
- **Target Hosting**: Cloudflare Pages under the "Tactical Action Games" account.
- **Decoupled**: Completely independent from the `frontline-tag` codebase.
