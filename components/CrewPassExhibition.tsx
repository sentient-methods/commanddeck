'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Check, Shield } from 'lucide-react';

interface PassTier {
  name: string;
  rank: string;
  price: string;
  badgeSrc: string;
  badgeAlt: string;
  benefits: string[];
}

const PASS_TIERS: PassTier[] = [
  {
    name: 'Enlisted Pass',
    rank: 'Private First Class (PFC)',
    price: '$10 / mo',
    badgeSrc: '/images/ranks_insignia_pfc.gif',
    badgeAlt: 'PFC Rank Insignia',
    benefits: [
      'Free laser tag access Monday through Thursday',
      '50% discount on laser tag and gaming kiosk on weekends',
      'Tactical scorekeeping and telemetry stat tracking',
    ],
  },
  {
    name: 'NCO Pass',
    rank: 'Sergeant (SGT)',
    price: '$15 / mo',
    badgeSrc: '/images/ranks_insignia_sgt.gif',
    badgeAlt: 'Sergeant Rank Insignia',
    benefits: [
      'Unlimited free laser tag Monday through Saturday',
      'Free use of gaming console kiosks for LAN parties',
      'Priority squad reservations for tournament evenings',
      'Special member credential badge',
    ],
  },
  {
    name: 'Officer Pass',
    rank: 'Captain (CPT)',
    price: '$20 / mo',
    badgeSrc: '/images/ranks_insignia_cpt.gif',
    badgeAlt: 'Captain Rank Insignia',
    benefits: [
      'Unlimited free laser tag Monday through Saturday',
      'Guest Cover: Free admission for you and one battle buddy',
      'Free use of game console kiosk for private LAN sessions',
      'Game Concierge: Add any game to library upon request',
    ],
  },
];

export default function CrewPassExhibition() {
  return (
    <section id="passes" className="py-24 bg-void relative bridge-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="telemetry-chip mb-3">
            <span>MEMBERSHIP ROSTER // SECTION 04</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            The Crew Pass Ratings
          </h2>
          <p className="mt-4 text-titanium-300 text-sm sm:text-base leading-relaxed">
            In an era before automated subscription models were commonplace, Command Deck introduced recurring crew
            passes carrying authentic military rank insignias, built for students and laser tag squads alike.
          </p>
        </div>

        {/* Pass Tiers Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
          {PASS_TIERS.map((tier) => (
            <div
              key={tier.name}
              className="rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative bg-hull-950/80 border border-white/10 hover:border-phaser-cyan/40 shadow-xl"
            >
              <div>
                {/* Rank Badge Header */}
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
                  <div>
                    <span className="font-mono text-[10px] text-phaser-cyan uppercase tracking-[0.2em] block">
                      {tier.rank}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 tracking-tight">{tier.name}</h3>
                  </div>
                  <div className="relative w-14 h-10 bg-void rounded p-1 border border-white/10 flex items-center justify-center shrink-0">
                    <Image
                      src={tier.badgeSrc}
                      alt={tier.badgeAlt}
                      width={42}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Price Display */}
                <div className="mb-6">
                  <div className="text-3xl font-black text-white font-mono tracking-tight">{tier.price}</div>
                  <div className="text-[11px] font-mono text-titanium-400 mt-1 uppercase tracking-wider">
                    Archival Rate (2014)
                  </div>
                </div>

                {/* Benefits List */}
                <div className="space-y-3 mb-8">
                  <div className="font-mono text-[10px] text-titanium-400 uppercase tracking-widest">
                    Service Entitlements:
                  </div>
                  {tier.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-titanium-300 leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-phaser-cyan shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 font-mono text-[10px] text-titanium-400 text-center tracking-widest uppercase">
                DECOMMISSIONED RATING SPEC
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
