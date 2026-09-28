'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, X, ZoomIn, Calendar, MapPin, Eye } from 'lucide-react';

interface ArchivalRecord {
  id: string;
  src: string;
  title: string;
  category: 'storefront' | 'firefights' | 'parties' | 'hardware';
  date: string;
  caption: string;
}

const RECORDS: ArchivalRecord[] = [
  {
    id: 'storefront-facade',
    src: '/images/Picture63-244x173.jpg',
    title: 'The Mall Concourse Storefront',
    category: 'storefront',
    date: 'circa 2014',
    caption:
      'Storefront entrance on the lower level of Provo Towne Centre, wrapped in cosmic asteroid graphics with CQB LASER TAG lettering and overhead match action monitors.',
  },
  {
    id: 'kiosk-consoles',
    src: '/images/Picture15-244x173.jpg',
    title: 'Laser Tag Check-In Kiosk',
    category: 'storefront',
    date: 'circa 2013',
    caption:
      'The check-in kiosk directly facing the concourse walkway, equipped with 4 barstool gaming stations and flat-screen tournament displays.',
  },
  {
    id: 'ptc-mall-exterior',
    src: '/images/PTC-287x186.jpg',
    title: 'Provo Towne Centre Exterior',
    category: 'storefront',
    date: 'circa 2013',
    caption:
      'The Provo Towne Centre at dusk. Command Deck was situated on the lower level directly beneath the Cinemark 16 cinema complex.',
  },
  {
    id: 'corridor-firefight',
    src: '/images/Picture9-244x173.jpg',
    title: 'Close Combat in the CQB Maze',
    category: 'firefights',
    date: 'circa 2015',
    caption:
      'Two young operators advancing through the arena corridor, utilizing tactical cover against industrial diamond-plate steel flooring and blue LED illumination.',
  },
  {
    id: 'starship-airlock-safe',
    src: '/images/safe-269x195.jpg',
    title: 'Starship Corridor & Resupply Pod',
    category: 'firefights',
    date: 'circa 2014',
    caption:
      'Tactical engagement alongside the wall-mounted RFID ammo resupply terminal and industrial structural truss framework.',
  },
  {
    id: 'party-in-course',
    src: '/images/party-768x210.jpg',
    title: 'Pizza Party Inside the Arena Course',
    category: 'parties',
    date: 'circa 2015',
    caption:
      'Birthday squad enjoying pizza and cupcakes inside the barrier course with the house lights turned on, followed by Xbox gaming on the big screen.',
  },
  {
    id: 'squad-stance',
    src: '/images/Picture32-371x265.png',
    title: 'Squad Tactical Stance',
    category: 'parties',
    date: 'circa 2014',
    caption:
      'Squad photo taken inside the arena with weapon HUDs illuminated and players holding tactical defensive positions.',
  },
  {
    id: 'referee-briefing',
    src: '/images/Picture8-244x173.jpg',
    title: 'Live Referee Touchscreen Briefing',
    category: 'hardware',
    date: 'circa 2015',
    caption:
      'A Command Deck referee coaching young players through game rules and tactical objectives on the touch-screen briefing console.',
  },
  {
    id: 'academy-seal',
    src: '/images/MB_Seal.JPG',
    title: 'Command Deck Crew Academy Seal',
    category: 'hardware',
    date: 'circa 2013',
    caption: 'Official emblem and insignia used for Command Deck Crew passes and academy certification.',
  },
];

export default function HistoricalGallery() {
  const [selectedRecord, setSelectedRecord] = useState<ArchivalRecord | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredRecords =
    activeFilter === 'all' ? RECORDS : RECORDS.filter((r) => r.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-hull-950/60 border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="telemetry-chip mb-3">
            <span>PHOTOGRAPHIC MANIFEST // SECTION 03</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Visual Flight Log &amp; Archive
          </h2>
          <p className="mt-4 text-titanium-300 text-sm sm:text-base leading-relaxed">
            Preserved directly from the original web origin. These high-resolution photographs document the physical
            storefront, diamond-plate corridors, and community gatherings at Provo Towne Centre.
          </p>
        </div>

        {/* Minimalist Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/5 text-xs font-mono">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg border transition-all ${
              activeFilter === 'all'
                ? 'bg-hull-900 text-phaser-cyan border-phaser-cyan'
                : 'bg-hull-950/60 text-titanium-400 border-white/5 hover:text-white hover:border-white/10'
            }`}
          >
            All Archival Records ({RECORDS.length})
          </button>
          <button
            onClick={() => setActiveFilter('storefront')}
            className={`px-3.5 py-1.5 rounded-lg border transition-all ${
              activeFilter === 'storefront'
                ? 'bg-hull-900 text-phaser-cyan border-phaser-cyan'
                : 'bg-hull-950/60 text-titanium-400 border-white/5 hover:text-white hover:border-white/10'
            }`}
          >
            Storefront &amp; Concourse
          </button>
          <button
            onClick={() => setActiveFilter('firefights')}
            className={`px-3.5 py-1.5 rounded-lg border transition-all ${
              activeFilter === 'firefights'
                ? 'bg-hull-900 text-phaser-cyan border-phaser-cyan'
                : 'bg-hull-950/60 text-titanium-400 border-white/5 hover:text-white hover:border-white/10'
            }`}
          >
            Arena Engagements
          </button>
          <button
            onClick={() => setActiveFilter('parties')}
            className={`px-3.5 py-1.5 rounded-lg border transition-all ${
              activeFilter === 'parties'
                ? 'bg-hull-900 text-phaser-cyan border-phaser-cyan'
                : 'bg-hull-950/60 text-titanium-400 border-white/5 hover:text-white hover:border-white/10'
            }`}
          >
            Birthday Squads
          </button>
          <button
            onClick={() => setActiveFilter('hardware')}
            className={`px-3.5 py-1.5 rounded-lg border transition-all ${
              activeFilter === 'hardware'
                ? 'bg-hull-900 text-phaser-cyan border-phaser-cyan'
                : 'bg-hull-950/60 text-titanium-400 border-white/5 hover:text-white hover:border-white/10'
            }`}
          >
            Hardware &amp; Briefings
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecords.map((record) => (
            <div
              key={record.id}
              onClick={() => setSelectedRecord(record)}
              className="group cursor-pointer rounded-xl bg-hull-950 border border-white/10 hover:border-phaser-cyan/50 overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col"
            >
              <div className="relative w-full h-56 bg-void overflow-hidden">
                <Image
                  src={record.src}
                  alt={record.title}
                  fill
                  loading="eager"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hull-950 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                <div className="absolute top-3 right-3 p-1.5 rounded bg-hull-950/80 backdrop-blur-md border border-white/10 text-titanium-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5 text-phaser-cyan" />
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-phaser-cyan mb-2 tracking-widest uppercase">
                    <span>{record.date}</span>
                    <span className="text-titanium-400">{record.category}</span>
                  </div>
                  <h3 className="font-bold text-white text-sm group-hover:text-phaser-cyan transition-colors tracking-tight">
                    {record.title}
                  </h3>
                  <p className="text-titanium-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                    {record.caption}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-titanium-400 tracking-wider uppercase">
                  <span>INSPECT RECORD</span>
                  <span>VERIFIED PTC</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Optical Viewer Modal */}
      {selectedRecord && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedRecord(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl bg-hull-950 border border-white/15 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-void/90 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-phaser-cyan animate-pulse"></span>
                <span className="font-mono text-xs text-white tracking-widest uppercase font-semibold">
                  {selectedRecord.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedRecord(null)}
                className="p-1 rounded-lg bg-hull-900 hover:bg-hull-850 text-titanium-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative w-full h-80 sm:h-[480px] bg-void">
              <Image
                src={selectedRecord.src}
                alt={selectedRecord.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Modal Telemetry Caption */}
            <div className="p-6 bg-hull-950 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-titanium-400 mb-3 tracking-wider">
                <div className="flex items-center gap-1.5 text-phaser-cyan">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedRecord.date}</span>
                </div>
                <div className="flex items-center gap-1.5 text-titanium-300">
                  <MapPin className="w-3.5 h-3.5 text-phaser-cyan" />
                  <span>Provo Towne Centre (Lower Level)</span>
                </div>
              </div>
              <p className="text-titanium-200 text-sm leading-relaxed">{selectedRecord.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
