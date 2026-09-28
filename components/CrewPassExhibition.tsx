'use client';

import React from 'react';
import Image from 'next/image';
import { Check, Shield } from 'lucide-react';

interface CrewTier {
  name: string;
  rank: string;
  price: string;
  badgeSrc: string;
  badgeAlt: string;
  entitlements: string[];
  isPopular?: boolean;
}

const TIERS: CrewTier[] = [
  {
    name: 'Enlisted Pass',
    rank: 'Private First Class (PFC)',
    price: '$10',
    badgeSrc: '/images/ranks_insignia_pfc.gif',
    badgeAlt: 'PFC Rank Insignia',
    entitlements: [
      'Free laser tag any time Monday through Thursday',
      '50% off laser tag and game kiosk on weekends',
      'Personal player profile and stat tracking',
    ],
  },
  {
    name: 'NCO Pass',
    rank: 'Sergeant (SGT)',
    price: '$15',
    badgeSrc: '/images/ranks_insignia_sgt.gif',
    badgeAlt: 'Sergeant Rank Insignia',
    isPopular: true,
    entitlements: [
      'Unlimited free laser tag any time Monday through Saturday',
      'Free use of game kiosk for private LAN parties',
      'Tournament priority registration',
      'Member rank identification card',
    ],
  },
  {
    name: 'Officer Pass',
    rank: 'Captain (CPT)',
    price: '$20',
    badgeSrc: '/images/ranks_insignia_cpt.gif',
    badgeAlt: 'Captain Rank Insignia',
    entitlements: [
      'Unlimited free laser tag Monday through Saturday',
      'Guest Cover: Free admission for you and one battle buddy',
      'Free use of game kiosk for LAN parties',
      'Game Concierge: Add any game to library upon request',
    ],
  },
];

export default function CrewPassExhibition() {
  return (
    <section id="passes" className="py-20 bg-slate-50/70 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="status-pill mb-3">
            <span>MEMBERSHIP TIERS // CREW PASSES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Command Deck Crew Membership
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            In an era before automated subscription apps, Command Deck offered monthly auto-pay passes with authentic
            rank insignias, granting unlimited laser tag and LAN game pad access for students, families, and enthusiasts.
          </p>
        </div>

        {/* 3 Pass Tiers */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`studio-panel rounded-2xl p-7 flex flex-col justify-between relative border ${
                tier.isPopular ? 'border-sky-500 ring-1 ring-sky-500/20' : 'border-slate-200'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-600 text-white font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs">
                  Most Popular Pass
                </div>
              )}

              <div>
                {/* Header with Rank Badge */}
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                  <div>
                    <span className="font-mono text-[11px] font-bold text-sky-700 uppercase tracking-wider block">
                      {tier.rank}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0.5 tracking-tight">{tier.name}</h3>
                  </div>
                  <div className="relative w-14 h-10 bg-slate-50 rounded border border-slate-200 flex items-center justify-center p-1 shrink-0">
                    <Image
                      src={tier.badgeSrc}
                      alt={tier.badgeAlt}
                      width={44}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Pricing Display */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-slate-900 font-mono">{tier.price}</span>
                    <span className="text-xs text-slate-500 font-medium">/ month</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 font-mono">
                    Monthly Auto-pay (Cancel anytime)
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono">
                    Pass Entitlements:
                  </div>
                  {tier.entitlements.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-500 text-center uppercase tracking-wider">
                Historical Pass Specification
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
