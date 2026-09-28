'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Crosshair, Terminal, Shield, Eye, Layers } from 'lucide-react';

interface Sector {
  id: string;
  name: string;
  callsign: string;
  coordinates: string;
  image: string;
  description: string;
  specifications: string[];
}

const SECTORS: Sector[] = [
  {
    id: 'concourse',
    name: 'Concourse Check-In Kiosk & Gaming Podiums',
    callsign: 'CONSOLE 01 // ENTRY AIRLOCK',
    coordinates: 'PTC-CONCOURSE-101',
    image: '/images/Picture15-244x173.jpg',
    description:
      'Positioned in the Provo Towne Centre walkway directly below Cinemark 16. Featured a custom timber kiosk, flat-screen match status displays, and barstool console stations where kids could play Xbox and watch live arena combat.',
    specifications: [
      'Four gaming console barstools for pre-game and post-game matches',
      'Live external match scoreboards for waiting spectators and parents',
      'Direct line of sight to the central mall concourse and play area',
      'Cosmic asteroid wrap storefront with glass observation sightlines',
    ],
  },
  {
    id: 'staging',
    name: 'Briefing Room & Course Pizza Staging',
    callsign: 'CONSOLE 02 // BRIEFING DECK',
    coordinates: 'PTC-INTERIOR-201',
    image: '/images/party-768x210.jpg',
    description:
      'Unlike conventional arcades that banish parties to a cramped back room, Command Deck turned on the overhead arena lights so birthday squads could eat pizza and cake right inside the silver barrier course before jumping into gameplay.',
    specifications: [
      'In-course party seating surrounded by insulated metallic cargo barriers',
      'Live in-person briefings led by certified referees (no canned videos)',
      'Giant television displays for Xbox tournaments and party entertainment',
      'Private reservation format: no outside groups sharing the space',
    ],
  },
  {
    id: 'killzone',
    name: 'Starship CQB Maze & Sway Barrier Corridors',
    callsign: 'CONSOLE 03 // CQB BATTLESPACE',
    coordinates: 'PTC-INTERIOR-301',
    image: '/images/safe-269x195.jpg',
    description:
      'A non-stop firefight corridor maze engineered with black diamond-plate steel flooring, industrial structural truss beams, and custom impact-absorbing sway barriers with pop-out crush zones to ensure zero collision injuries.',
    specifications: [
      'Black diamond-plate steel floor treads throughout the entire combat zone',
      'Impact-absorbing barriers engineered to flex and pop out during collisions',
      'Industrial foam padding along all perimeter structural boundary walls',
      'Bright ambient task lighting (blue/white LEDs) for clear visual tracking',
    ],
  },
  {
    id: 'resupply',
    name: 'RFID Ammo Dump & Respawn Transponders',
    callsign: 'CONSOLE 04 // RESUPPLY PODS',
    coordinates: 'PTC-TELEMETRY-401',
    image: '/images/Picture9-244x173.jpg',
    description:
      'Wall-mounted illuminated terminal pods stationed throughout the course. Players physically tapped their weapon sensors to resupply ammunition, reset health, or capture tactical objectives during scenario-based games.',
    specifications: [
      'Active RFID transponders embedded in wall-mounted tactical bulkheads',
      'Real-time blaster HUD feedback displaying live ammo count and health points',
      'Supports realistic tactical games: Room Clearing, Sudden Death, and Limited Ammo',
      'Infrared beam technology paired with ballistic eye protection and paintball masks',
    ],
  },
  {
    id: 'observation',
    name: 'Recon Overwatch & Tablet Surveillance',
    callsign: 'CONSOLE 05 // OVERWATCH',
    coordinates: 'PTC-COMMAND-501',
    image: '/images/Picture8-244x173.jpg',
    description:
      'Engineered for maximum parental peace of mind. Wireless arena cameras broadcast live feeds to tablet computers and concourse monitors, allowing parents to shop or relax while keeping visual contact with their kids.',
    specifications: [
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
    <section id="blueprint" className="py-24 bg-void relative bridge-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="telemetry-chip mb-3">
            <span>FACILITY SCHEMATIC // SECTION 02</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Interactive Arena Blueprint
          </h2>
          <p className="mt-4 text-titanium-300 text-sm sm:text-base leading-relaxed">
            Select a station console below to review the engineering blueprints and verified archival imagery of each
            sector within the Provo Towne Centre facility.
          </p>
        </div>

        {/* High-Precision Console Selector */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/5">
          {SECTORS.map((sector) => {
            const isActive = activeSector.id === sector.id;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSector(sector)}
                className={`px-4 py-2.5 rounded-lg text-xs font-mono tracking-wider transition-all flex items-center gap-2.5 border ${
                  isActive
                    ? 'bg-hull-900 text-phaser-cyan border-phaser-cyan shadow-[0_0_20px_-3px_rgba(0,229,255,0.25)]'
                    : 'bg-hull-950/60 text-titanium-400 border-white/5 hover:text-titanium-200 hover:border-white/10'
                }`}
              >
                <Crosshair className={`w-3.5 h-3.5 ${isActive ? 'text-phaser-cyan' : 'text-titanium-400'}`} />
                <span className="uppercase">{sector.name.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Master Console Display Panel */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch rounded-2xl bg-hull-950/90 border border-white/10 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          {/* Subtle Top Anamorphic Flare in Console */}
          <div className="absolute top-0 left-10 right-10 flare-subtle"></div>

          {/* Left Console Readout */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                <span className="font-mono text-xs text-phaser-cyan font-semibold tracking-[0.2em]">
                  {activeSector.callsign}
                </span>
                <span className="font-mono text-[10px] text-titanium-400 tracking-wider">
                  COORD: {activeSector.coordinates}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{activeSector.name}</h3>

              <p className="text-titanium-300 text-sm leading-relaxed mb-8">{activeSector.description}</p>

              <div className="space-y-3 mb-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-titanium-400 flex items-center gap-2 mb-3">
                  <Terminal className="w-3.5 h-3.5 text-phaser-cyan" />
                  <span>Subsystem Specifications:</span>
                </div>
                {activeSector.specifications.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-titanium-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-phaser-cyan mt-1.5 shrink-0"></span>
                    <span className="leading-relaxed">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 font-mono text-[10px] text-titanium-400 flex items-center justify-between tracking-widest uppercase">
              <span>DECOMMISSIONED ARENA SPECIFICATION</span>
              <span>TACTICAL ACTION GAMES LLC</span>
            </div>
          </div>

          {/* Right Precision Optical Frame */}
          <div className="lg:col-span-6 flex flex-col min-h-[360px] sm:min-h-[420px]">
            <div className="relative w-full h-full min-h-[360px] sm:min-h-[420px] rounded-xl overflow-hidden bg-hull-900 border border-white/10 shadow-inner group">
              <Image
                src={activeSector.image}
                alt={activeSector.name}
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hull-950/80 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Corner Telemetry Brackets */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-phaser-cyan tracking-widest bg-void/60 px-2 py-0.5 rounded border border-white/5">
                [ CAMERA FEED // ARCHIVAL ]
              </div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-titanium-300 tracking-widest bg-void/60 px-2 py-0.5 rounded border border-white/5">
                [ VERIFIED PTC ]
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-hull-950/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono text-titanium-300">
                <span className="truncate uppercase tracking-wider text-[11px] text-white font-semibold">
                  {activeSector.name}
                </span>
                <span className="text-phaser-cyan text-[10px] tracking-widest uppercase shrink-0">AUTHENTIC PHOTO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
