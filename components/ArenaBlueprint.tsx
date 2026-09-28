'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Crosshair, Map, Shield, Tv, Sparkles, Terminal, Info } from 'lucide-react';

interface Sector {
  id: string;
  name: string;
  callsign: string;
  badge: string;
  image: string;
  description: string;
  details: string[];
}

const SECTORS: Sector[] = [
  {
    id: 'concourse',
    name: 'Concourse Check-In Kiosk & Gaming Podiums',
    callsign: 'SECTOR-01 // AIRLOCK ENTRY',
    badge: 'MALL LEVEL',
    image: '/images/Picture15-244x173.jpg',
    description:
      'Located directly in the Provo Towne Centre walkway below Cinemark 16. Featured a custom timber kiosk, flat-screen match status displays, and barstool console stations where kids could play Xbox and watch live arena combat.',
    details: [
      'Positioned right by the children play area and Motherhood Maternity',
      'Live external match scoreboard for waiting spectators and parents',
      '4 gaming console barstools for pre-game and post-game hangouts',
      'Cosmic asteroid wrap storefront with glass sightlines',
    ],
  },
  {
    id: 'staging',
    name: 'Briefing Room & Course Pizza Staging',
    callsign: 'SECTOR-02 // BRIEFING & PARTY',
    badge: 'TACTICAL BRIEF',
    image: '/images/party-768x210.jpg',
    description:
      'Unlike conventional arcades that banish parties to a cramped back room, Command Deck flipped on the overhead arena lights so birthday squads could eat pizza and cake right inside the silver barrier course before jumping into gameplay.',
    details: [
      'In-course party seating surrounded by insulated metallic cargo barriers',
      'Live in-person briefings led by certified referees (no canned videos)',
      'Giant television displays for Xbox tournaments and party entertainment',
      'Private reservation format: no outside groups sharing the space',
    ],
  },
  {
    id: 'killzone',
    name: 'Starship CQB Maze & Sway Barrier Corridors',
    callsign: 'SECTOR-03 // CQB BATTLESPACE',
    badge: 'CORE ARENA',
    image: '/images/safe-269x195.jpg',
    description:
      'A non-stop firefight corridor maze engineered with black diamond-plate steel flooring, industrial structural truss beams, and custom impact-absorbing sway barriers with pop-out crush zones to ensure zero collision injuries.',
    details: [
      'Industrial diamond-plate steel floor treads throughout the entire combat zone',
      'Impact-absorbing barriers engineered to flex and pop out during collisions',
      'Industrial foam padding along all perimeter structural boundary walls',
      'Bright ambient task lighting (blue/white LEDs) for clear visual tracking',
    ],
  },
  {
    id: 'resupply',
    name: 'RFID Ammo Dump & Respawn Stations',
    callsign: 'SECTOR-04 // TELEMETRY CACHE',
    badge: 'TECH INTEGRATION',
    image: '/images/Picture9-244x173.jpg',
    description:
      'Wall-mounted illuminated terminal pods stationed throughout the course. Players physically tapped their weapon sensors to resupply ammunition, reset health, or capture tactical objectives during scenario-based games.',
    details: [
      'Active RFID transponders embedded in wall-mounted tactical bulkheads',
      'Real-time blaster HUD feedback displaying live ammo count and health-points',
      'Supports realistic tactical games: Room Clearing, Sudden Death, and Limited Ammo',
      'Infrared beam technology paired with ballistic eye protection and paintball masks',
    ],
  },
  {
    id: 'observation',
    name: 'Observation Deck & Tablet Surveillance',
    callsign: 'SECTOR-05 // RECON OVERWATCH',
    badge: 'PARENT ZEN',
    image: '/images/Picture8-244x173.jpg',
    description:
      'Engineered for maximum parental peace of mind. Wireless arena cameras broadcast live feeds to tablet computers and concourse monitors, allowing parents to shop or relax while keeping visual contact with their kids.',
    details: [
      'Wireless live video surveillance covering every angle of the CQB arena',
      'Remote viewing tablets available for parents relaxing in the mall concourse',
      'Real-time digital telemetry scoreboards with team stats and player ranks',
      'Clean-cut, background-checked, drug-screened referee staff',
    ],
  },
];

export default function ArenaBlueprint() {
  const [activeSector, setActiveSector] = useState<Sector>(SECTORS[0]);

  return (
    <section id="blueprint" className="py-20 bg-deck-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-deck-900 border border-deck-700 text-xs font-mono text-tactical-cyan mb-3">
            <Map className="w-3.5 h-3.5" />
            <span>FACILITY SCHEMATIC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Interactive Arena Blueprint
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Click any sector below to inspect the actual architectural layout and historical photos of the Provo Towne
            Centre arena facility.
          </p>
        </div>

        {/* Blueprint Sector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {SECTORS.map((sector) => {
            const isActive = activeSector.id === sector.id;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSector(sector)}
                className={`px-4 py-2.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 border ${
                  isActive
                    ? 'bg-deck-800 text-tactical-cyan border-tactical-cyan shadow-md'
                    : 'bg-deck-900 text-slate-400 border-deck-800 hover:text-slate-200 hover:border-deck-700'
                }`}
              >
                <Crosshair className={`w-3.5 h-3.5 ${isActive ? 'text-tactical-cyan' : 'text-slate-500'}`} />
                <span>{sector.name.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Tactical Sector Detail Display */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch rounded-2xl bg-deck-900 border border-deck-800 p-6 sm:p-8 relative overflow-hidden">
          {/* Left Schematic / Sector Summary */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-deck-800">
                <span className="font-mono text-xs text-tactical-amber font-semibold tracking-wider">
                  {activeSector.callsign}
                </span>
                <span className="px-2 py-0.5 rounded bg-deck-800 text-tactical-cyan font-mono text-[10px] border border-deck-700">
                  {activeSector.badge}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{activeSector.name}</h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">{activeSector.description}</p>

              <div className="space-y-2.5 mb-6">
                <div className="font-mono text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-3">
                  <Terminal className="w-3.5 h-3.5 text-tactical-cyan" />
                  <span>Sector Specifications:</span>
                </div>
                {activeSector.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-tactical-cyan mt-1.5 shrink-0"></span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-deck-800 font-mono text-[11px] text-slate-500 flex items-center justify-between">
              <span>FACILITY ARCHIVE // PROVO TOWNE CENTRE</span>
              <span>TACTICAL ACTION GAMES LLC</span>
            </div>
          </div>

          {/* Right Photographic Exhibit */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-64 sm:h-80 lg:h-full rounded-xl overflow-hidden bg-deck-950 border border-deck-700/80 shadow-inner group">
              <Image
                src={activeSector.image}
                alt={activeSector.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deck-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-deck-950/80 backdrop-blur-md border border-deck-800 flex items-center justify-between text-xs font-mono text-slate-300">
                <span className="truncate">ORIGINAL ARCHIVAL PHOTOGRAPH</span>
                <span className="text-tactical-cyan shrink-0">VERIFIED PTC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
