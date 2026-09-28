import fs from 'fs';
import path from 'path';
import { InstagramPost, InstagramSyncState, InstagramTokenData } from './types';

const DATA_DIR = path.join(process.cwd(), 'data');
const POSTS_FILE = path.join(DATA_DIR, 'instagram-posts.json');
const STATE_FILE = path.join(DATA_DIR, 'instagram-state.json');
const TOKENS_FILE = path.join(DATA_DIR, 'instagram-tokens.json');

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// 12 Authentic Command Deck seed posts from Provo Towne Centre archives
export const SEED_POSTS: InstagramPost[] = [
  {
    id: 'ig_seed_01',
    caption: 'Squad ready on the Provo Towne Centre concourse! Birthday boys geared up for Close Quarters Battle under Cinemark 16. #CommandDeck #LaserTag #ProvoTowneCentre #CQB #UtahKids',
    media_type: 'IMAGE',
    media_url: '/images/party-768x210.jpg',
    permalink: 'https://instagram.com/commanddeck',
    timestamp: '2019-11-14T18:30:00Z',
  },
  {
    id: 'ig_seed_02',
    caption: 'Laser Tag Check-In Kiosk is live! Four barstools for pre-game Xbox matches and live scoreboard monitoring. Moms can relax while kids clear rooms. #MomsMomentOfZen #ProvoMall #CommandDeck',
    media_type: 'IMAGE',
    media_url: '/images/Picture15-244x173.jpg',
    permalink: 'https://instagram.com/commanddeck',
    timestamp: '2019-10-22T21:15:00Z',
  },
  {
    id: 'ig_seed_03',
    caption: 'Corridor firefight in Sector 3! Diamond-plate flooring and blue LED illumination keep the pace fast and tactical. #CloseQuartersBattle #LaserTagProvo #TacticalLaserTag',
    media_type: 'IMAGE',
    media_url: '/images/Picture9-244x173.jpg',
    permalink: 'https://instagram.com/commanddeck',
    timestamp: '2019-09-08T19:45:00Z',
  },
  {
    id: 'ig_seed_04',
    caption: 'Safety Second, Third, and Fourth! Industrial foam padded walls and swaying barriers with pop-out crush zones to absorb impact. Safe, fast, non-stop fun! #SafetyFirst #CQBLaserTag',
    media_type: 'IMAGE',
    media_url: '/images/safe-269x195.jpg',
    permalink: 'https://instagram.com/commanddeck',
    timestamp: '2019-08-17T16:00:00Z',
  },
  {
    id: 'ig_seed_05',
    caption: 'Pizza and cupcakes inside the arena! Who says you have to eat in a boring party room? We turn on the lights and party right among the barriers. #BestBirthdayPartyEver #ProvoEvents',
    media_type: 'CAROUSEL_ALBUM',
    media_url: '/images/party-768x210.jpg',
    permalink: 'https://instagram.com/commanddeck',
    timestamp: '2019-07-30T20:00:00Z',
    children: [
      {
        id: 'ig_seed_05_c1',
        media_type: 'IMAGE',
        media_url: '/images/party-768x210.jpg',
      },
      {
        id: 'ig_seed_05_c2',
        media_type: 'IMAGE',
        media_url: '/images/Picture32-371x265.png',
      },
    ],
  },
  {
    id: 'ig_seed_06',
    caption: 'Live in-person briefings with our referee team! Video recordings cannot tell if kids are listening to the safety rules. That is why our mentors lead every briefing in person. #Mentorship',
    media_type: 'IMAGE',
    media_url: '/images/Picture8-244x173.jpg',
    permalink: 'https://instagram.com/commanddeck',
    timestamp: '2019-06-12T17:20:00Z',
  },
  {
    id: 'ig_seed_07',
    caption: 'Mall concourse storefront view! Wrapped in cosmic asteroid graphics right by the play area. Stop by after your movie at Cinemark 16! #ProvoTowneCentre #UtahLaserTag',
    media_type: 'IMAGE',
    media_url: '/images/Picture63-244x173.jpg',
    permalink: 'https://instagram.com/commanddeck',
    timestamp: '2019-05-04T15:10:00Z',
  },
  {
    id: 'ig_seed_08',
    caption: 'Crew Passes unlocked! Join as Enlisted (PFC $10/mo), NCO (SGT $15/mo), or Officer (CPT $20/mo) for unlimited laser tag and LAN game pad access. #CrewPass #UtahGamers',
    media_type: 'IMAGE',
    media_url: '/images/ranks_insignia_sgt.gif',
    permalink: 'https://instagram.com/commanddeck',
    timestamp: '2019-04-19T22:00:00Z',
  },
  {
    id: 'ig_seed_09',
    caption: 'Squad stance in the maze before match kickoff. Blaster HUDs active showing live ammo counts and health points! #MultiplayerFPSLive #GamerLife',
    media_type: 'IMAGE',
    media_url: '/images/Picture32-371x265.png',
    permalink: 'https://instagram.com/commanddeck',
    timestamp: '2019-03-22T19:30:00Z',
  },
  {
    id: 'ig_seed_10',
    caption: 'Mom’s Moment of Zen! Grab a coffee, shop the stores, or watch the wireless surveillance tablet while your kids have an unforgettable battle. #ThinkDayCareWithLasers',
    media_type: 'IMAGE',
    media_url: '/images/mom-326x185.jpg',
    permalink: 'https://instagram.com/commanddeck',
    timestamp: '2019-02-14T16:45:00Z',
  },
  {
    id: 'ig_seed_11',
    caption: 'Couples Dollar Duels and group dates open until 11 PM on weekends! Challenge your significant other to a one-on-one showdown in the corridors. #UtahNightlife #GroupDateProvo',
    media_type: 'IMAGE',
    media_url: '/images/college-228x270.png',
    permalink: 'https://instagram.com/commanddeck',
    timestamp: '2019-01-25T23:10:00Z',
  },
  {
    id: 'ig_seed_12',
    caption: 'Official Command Deck Academy Seal! Proudly serving the Utah County family and gaming community. #CommandDeckAcademy #ProvoUtah',
    media_type: 'IMAGE',
    media_url: '/images/MB_Seal.JPG',
    permalink: 'https://instagram.com/commanddeck',
    timestamp: '2018-12-10T14:00:00Z',
  },
];

// Get cached posts or default to seed data
export function getInstagramPosts(): InstagramPost[] {
  ensureDataDir();
  try {
    if (fs.existsSync(POSTS_FILE)) {
      const raw = fs.readFileSync(POSTS_FILE, 'utf-8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Error reading instagram-posts.json:', err);
  }
  return SEED_POSTS;
}

// Save posts to storage
export function saveInstagramPosts(posts: InstagramPost[]): void {
  ensureDataDir();
  try {
    fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing instagram-posts.json:', err);
  }
}

// Get current sync state
export function getInstagramState(): InstagramSyncState {
  ensureDataDir();
  const defaultState: InstagramSyncState = {
    status: fs.existsSync(TOKENS_FILE) ? 'CONNECTED' : 'DISCONNECTED',
    last_sync_timestamp: null,
    last_successful_sync_timestamp: null,
    last_error: null,
    posts_count: getInstagramPosts().length,
    account_username: '@commanddeck',
    token_expires_at: null,
    token_days_remaining: null,
    is_seeded_data: !fs.existsSync(TOKENS_FILE),
  };

  try {
    if (fs.existsSync(STATE_FILE)) {
      const raw = fs.readFileSync(STATE_FILE, 'utf-8');
      return { ...defaultState, ...JSON.parse(raw) };
    }
  } catch (err) {
    console.error('Error reading instagram-state.json:', err);
  }
  return defaultState;
}

// Save sync state
export function saveInstagramState(state: Partial<InstagramSyncState>): void {
  ensureDataDir();
  try {
    const current = getInstagramState();
    const updated = { ...current, ...state };
    fs.writeFileSync(STATE_FILE, JSON.stringify(updated, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing instagram-state.json:', err);
  }
}

// Token storage (kept securely on server, excluded from git)
export function getInstagramTokens(): InstagramTokenData | null {
  ensureDataDir();
  try {
    if (fs.existsSync(TOKENS_FILE)) {
      const raw = fs.readFileSync(TOKENS_FILE, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error reading instagram-tokens.json:', err);
  }
  return null;
}

export function saveInstagramTokens(tokens: InstagramTokenData): void {
  ensureDataDir();
  try {
    fs.writeFileSync(TOKENS_FILE, JSON.stringify(tokens, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing instagram-tokens.json:', err);
  }
}

export function clearInstagramTokens(): void {
  ensureDataDir();
  try {
    if (fs.existsSync(TOKENS_FILE)) {
      fs.unlinkSync(TOKENS_FILE);
    }
  } catch (err) {
    console.error('Error removing instagram-tokens.json:', err);
  }
}
