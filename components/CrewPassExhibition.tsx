'use client';

import React from 'react';
import Image from 'next/image';
import { Award, CheckCircle2, Sparkles, Shield } from 'lucide-react';

interface PassTier {
  name: string;
  rank: string;
  price: string;
  badgeSrc: string;
  badgeAlt: string;
  highlight?: boolean;
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
      'Free laser tag any time Monday through Thursday',
      '50% off laser tag and gaming kiosk on weekends',
      'Access to tactical scorekeeping and stat tracking',
    ],
  },
  {
    name: 'NCO Pass',
    rank: 'Sergeant (SGT)',
    price: '$15 / mo',
    badgeSrc: '/images/ranks_insignia_sgt.gif',
    badgeAlt: 'Sergeant Rank Insignia',
    highlight: true,
    benefits: [
      'Unlimited free laser tag Monday through Saturday',
      'Free use of gaming kiosk for LAN parties',
      'Priority squad reservations for tournament evenings',
      'Special member badge credentials',
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
      'Guest Cover: Free admission for you and a battle buddy!',
      'Free use of game kiosk for LAN parties',
      'Game Concierge: Add any game to library on request',
    ],
  },
];

export default function CrewPassExhibition() {
  return (
    <section id="passes" className="py-20 bg-deck-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-deck-900 border border-deck-700 text-xs font-mono text-tactical-amber mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>COMMUNITY LORE &amp; MEMBERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            The Command Deck Crew Passes
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            In an era before subscription passes were common, Command Deck introduced monthly recurring crew passes
            with authentic military rank insignias, designed for starving students and dedicated laser tag squads alike.
          </p>
        </div>

        {/* Pass Tiers Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PASS_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative border ${
                tier.highlight
                  ? 'bg-deck-900 border-tactical-amber shadow-[0_0_30px_-5px_rgba(245,158,11,0.2)] md:-translate-y-2'
                  : 'bg-deck-900/60 border-deck-800 hover:border-deck-700'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-tactical-amber text-deck-950 font-mono text-[10px] font-bold uppercase tracking-wider">
                  Most Popular Squad Pass
                </div>
              )}

              <div>
                {/* Rank Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                      {tier.rank}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">{tier.name}</h3>
                  </div>
                  <div className="relative w-16 h-12 bg-deck-950 rounded-lg p-1.5 border border-deck-800 flex items-center justify-center shrink-0">
                    <Image
                      src={tier.badgeSrc}
                      alt={tier.badgeAlt}
                      width={48}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-deck-800">
                  <div className="text-3xl font-black text-white font-mono">{tier.price}</div>
                  <div className="text-xs text-slate-400 mt-1">Archival historical rate (2014)</div>
                </div>

                {/* Benefits List */}
                <div className="space-y-3 mb-6">
                  <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">Included Perks:</div>
                  {tier.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-tactical-cyan shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-deck-800 font-mono text-[11px] text-slate-500 text-center">
                ARCHIVED MEMBERSHIP SPECIFICATION
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
