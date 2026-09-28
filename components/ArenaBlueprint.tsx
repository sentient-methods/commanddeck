'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { LayoutGrid, CheckCircle2, ChevronRight } from 'lucide-react';

interface ArenaSector {
  id: string;
  name: string;
  badge: string;
  location: string;
  image: string;
  summary: string;
  features: string[];
}

const SECTORS: ArenaSector[] = [
  {
    id: 'kiosk',
    name: 'Concourse Check-In Kiosk & Gaming Barstools',
    badge: 'ENTRANCE & SPECTATOR CONSOLE',
    location: 'Provo Towne Centre Lower Level',
    image: '/images/Picture15-244x173.jpg',
    summary:
      'Located in the mall concourse directly below Cinemark 16 and next to the children’s play area. Outfitted with high-top barstools, Xbox gaming stations, live match scoreboards, and direct sightlines into the facility.',
    features: [
      'Four console barstool stations for waiting players and video gaming',
      'Exterior scoreboard monitors broadcasting real-time match telemetry',
      'Clean mall concourse storefront surrounded by shopping and dining',
      'Walk-up check-in desk for private squads and birthday groups',
    ],
  },
  {
    id: 'party-staging',
    name: 'In-Course Birthday Staging & Pizza Area',
    badge: 'CELEBRATION DECK',
    location: 'Interior Arena Staging Area',
    image: '/images/party-768x210.jpg',
    summary:
      'Rather than banishing party guests to a cramped, generic side room, Command Deck turned on the overhead course lights so families could eat pizza and cake right inside the silver barrier course before playing laser tag.',
    features: [
      'Tables and seating positioned directly among the arena barriers',
      'Giant flat-screen displays for post-game Xbox matches and party videos',
      'Live in-person briefings coached by dedicated referees (no video recordings)',
      '100% private celebration time: no sharing the space with other groups',
    ],
  },
  {
    id: 'cqb-course',
    name: 'CQB Maze & Sway Barrier Obstacles',
    badge: 'TACTICAL BATTLESPACE',
    location: 'Main Combat Arena',
    image: '/images/safe-269x195.jpg',
    summary:
      'An intimate close quarters battle maze built with industrial black diamond-plate steel flooring, structural overhead truss lighting, and impact-absorbing swaying barriers engineered with pop-out crush zones for player collision safety.',
    features: [
      'Black diamond-plate floor treads throughout the entire combat course',
      'Specially designed barriers that sway and pop out to absorb impact safely',
      'Industrial grade foam padding lining all perimeter structural walls',
      'Crisp task lighting with reactive match audio and tempo changes',
    ],
  },
  {
    id: 'rfid-bases',
    name: 'RFID Ammo Bases & Tactical Weapon HUDs',
    badge: 'WEAPON SYSTEMS & RESUPPLY',
    location: 'Course Bulkhead Transponders',
    image: '/images/Picture9-244x173.jpg',
    summary:
      'Tactical carbines equipped with heads-up displays showing real-time health points and ammo reserves. Wall-mounted illuminated RFID bases served as ammo supply points, medical respawns, and objective capture points.',
    features: [
      'Active RFID bases for scanning ammo dumps and respawn resets',
      'Blaster HUD feedback displaying live health points and ammunition counts',
      'Eye-safe infrared beams paired with ballistic safety glasses or masks',
      'Game modes supporting room clearing, limited ammunition, and team duels',
    ],
  },
  {
    id: 'surveillance',
    name: 'Wireless Video Overwatch & Tablet Feeds',
    badge: 'PARENTAL COMMAND & MONITORING',
    location: 'Arena Surveillance Network',
    image: '/images/Picture8-244x173.jpg',
    summary:
      'Engineered for parental peace of mind. Wireless arena cameras streamed live video to remote tablets and concourse monitors, allowing parents to relax, shop, or visit nearby stores while keeping eyes on their kids.',
    features: [
      'Wireless video cameras covering every corridor of the CQB course',
      'Portable remote viewing tablets available for parents in the mall concourse',
      'Digital match scoreboards displaying player ranks and accuracy stats',
      'Live in-arena referee monitoring every second of the engagement',
    ],
  },
];

export default function ArenaBlueprint() {
  const [activeSector, setActiveSector] = useState<ArenaSector>(SECTORS[0]);

  return (
    <section id="blueprint" className="py-20 bg-slate-50/70 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="status-pill mb-3">
            <span>FACILITY ARCHITECTURE // ARENA SCHEMATIC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            The Arena Facility Layout
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Take an architectural tour through each sector of the original Command Deck facility at Provo Towne Centre,
            documented through preserved photography and facility schematics.
          </p>
        </div>

        {/* Sector Navigation Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-slate-200">
          {SECTORS.map((sector) => {
            const isSelected = activeSector.id === sector.id;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSector(sector)}
                className={`px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className={`w-3.5 h-3.5 ${isSelected ? 'text-sky-400' : 'text-slate-400'}`} />
                <span>{sector.name.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Architectural Panel */}
        <div className="studio-panel rounded-2xl p-6 sm:p-10 grid lg:grid-cols-12 gap-8 items-stretch border border-slate-200">
          {/* Left Text / Specs */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-100">
                <span className="font-mono text-xs font-bold text-sky-700 tracking-wider">
                  {activeSector.badge}
                </span>
                <span className="text-xs font-medium text-slate-500 font-mono">
                  {activeSector.location}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                {activeSector.name}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {activeSector.summary}
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono">
                  Facility Specifications:
                </div>
                {activeSector.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-500 flex items-center justify-between">
              <span>Provo Towne Centre Facility</span>
              <span className="font-semibold text-sky-700">Verified Archival Record</span>
            </div>
          </div>

          {/* Right Photographic Frame */}
          <div className="lg:col-span-6 flex flex-col min-h-[320px] sm:min-h-[380px]">
            <div className="relative w-full h-full min-h-[320px] sm:min-h-[380px] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner group">
              <Image
                src={activeSector.image}
                alt={activeSector.name}
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-xs flex items-center justify-between shadow-sm">
                <span className="font-semibold text-slate-800 truncate">
                  {activeSector.name}
                </span>
                <span className="text-[10px] font-mono font-bold text-sky-700 shrink-0 ml-2 uppercase">
                  Archival Photo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
