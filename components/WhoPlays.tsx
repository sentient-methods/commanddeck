'use client';

import React from 'react';
import Image from 'next/image';
import { Gamepad2, Users2, ShieldAlert } from 'lucide-react';

interface DemographicProfile {
  title: string;
  tagline: string;
  image: string;
  badge: string;
  icon: React.ElementType;
  copy: string;
  highlight: string;
}

const PROFILES: DemographicProfile[] = [
  {
    title: 'Teens & Competitive Squads',
    tagline: 'Think multiplayer FPS... Live!',
    image: '/images/teens-265x204.png',
    badge: 'HIGH-ENERGY COMPETITION',
    icon: Gamepad2,
    copy: 'Are you ready for the next level? Command Deck is a high-tech, high-energy, fast-paced adrenaline rush! The entire arena surges with lighting effects and accelerating rhythms. Digital scoreboards inside and outside the arena display real-time scores and game stats with a live video feed of the action. Our gun HUD displays ammo and health-points and our bases feature RFID technology for scanning ammo dumps and re-spawn points. Tournaments are held regularly, with cash prizes for top ranked teams and players.',
    highlight: 'Real-time weapon HUDs, RFID ammo re-supply bases, and accelerating soundtracks.',
  },
  {
    title: 'Young Adults & Group Dates',
    tagline: 'Utah Nightlife & Couples Duels',
    image: '/images/college-228x270.png',
    badge: 'GROUP DATES & NIGHTLIFE',
    icon: Users2,
    copy: 'Looking for nightlife in Utah? Because we cater to small groups of two to eight players, laser tag at Command Deck is the perfect activity for a small group of friends and even better for group dates. Challenge your significant other to a one-on-one dollar duel, or drop by with your posse for a couples night out. Private sessions available, even with only two players with games priced for starving students and laser tag addicts alike. Open until 11pm!',
    highlight: 'Private two-player dollar duels, couples showdowns, and student-friendly pricing.',
  },
  {
    title: 'Yep... That Guy',
    tagline: 'Extreme Tactical CQB Challenge',
    image: '/images/men-150x218.jpg',
    badge: 'SERIOUS TACTICAL PLAYERS',
    icon: ShieldAlert,
    copy: 'Don’t let the pretty lights fool you! Close Quarters Battle is the most extreme tactical challenge! You will be in a non-stop firefight every second you are in the arena. We have created tactically significant areas throughout the battle space to test your skill in both fire and maneuver. Expect long-range engagements as well as tight corners, high ground, strongholds, ambush points and more. Play realistic games like room clearing with instant death, limited ammo, and no respawns.',
    highlight: 'Room clearing scenarios, instant elimination, limited ammo, and no respawns.',
  },
];

export default function WhoPlays() {
  return (
    <section id="who-plays" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="status-pill mb-3">
            <span>PLAYER PROFILES // WHO PLAYED AT COMMAND DECK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How Do You Fit In?
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            From birthday boys and moms seeking tranquility to college couples and hardcore tactical shooters:
            here is how different players found their home at Command Deck.
          </p>
        </div>

        {/* 3 Profile Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {PROFILES.map((profile) => {
            const Icon = profile.icon;
            return (
              <div
                key={profile.title}
                className="studio-panel rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-200 hover:border-sky-300 transition-all shadow-xs"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-56 w-full bg-slate-100 border-b border-slate-200">
                    <Image
                      src={profile.image}
                      alt={profile.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-sky-700 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{profile.badge}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-1 tracking-tight">
                      {profile.title}
                    </h3>
                    <div className="text-xs font-semibold text-sky-600 mb-4 font-mono">
                      {profile.tagline}
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {profile.copy}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600">
                    <strong className="text-slate-800 block mb-0.5">Arena Format:</strong>
                    {profile.highlight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
