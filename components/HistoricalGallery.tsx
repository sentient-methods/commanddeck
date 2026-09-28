'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, X, ZoomIn, Calendar, MapPin } from 'lucide-react';

interface ArchivalPhoto {
  id: string;
  src: string;
  title: string;
  category: 'storefront' | 'firefights' | 'parties' | 'gear';
  date: string;
  caption: string;
}

const PHOTOS: ArchivalPhoto[] = [
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
    category: 'gear',
    date: 'circa 2015',
    caption:
      'A Command Deck referee coaching young players through game rules and tactical objectives on the touch-screen briefing console.',
  },
  {
    id: 'academy-seal',
    src: '/images/MB_Seal.JPG',
    title: 'Command Deck Crew Academy Seal',
    category: 'gear',
    date: 'circa 2013',
    caption: 'Official emblem and insignia used for Command Deck Crew passes and academy certification.',
  },
];

export default function HistoricalGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<ArchivalPhoto | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredPhotos =
    activeFilter === 'all' ? PHOTOS : PHOTOS.filter((p) => p.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-deck-900/40 border-t border-b border-deck-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-deck-850 border border-deck-700 text-xs font-mono text-tactical-amber mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>PRIMARY RECONNAISSANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Archival Photo Exhibition
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Rescued directly from the original Turbify web origin. These images document the real facility, its
            starship corridors, and the community that made it special.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 text-xs font-mono">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 rounded-full border transition-all ${
              activeFilter === 'all'
                ? 'bg-deck-800 text-tactical-cyan border-tactical-cyan'
                : 'bg-deck-900 text-slate-400 border-deck-800 hover:text-slate-200'
            }`}
          >
            All Archival Assets ({PHOTOS.length})
          </button>
          <button
            onClick={() => setActiveFilter('storefront')}
            className={`px-3.5 py-1.5 rounded-full border transition-all ${
              activeFilter === 'storefront'
                ? 'bg-deck-800 text-tactical-cyan border-tactical-cyan'
                : 'bg-deck-900 text-slate-400 border-deck-800 hover:text-slate-200'
            }`}
          >
            Storefront &amp; Concourse
          </button>
          <button
            onClick={() => setActiveFilter('firefights')}
            className={`px-3.5 py-1.5 rounded-full border transition-all ${
              activeFilter === 'firefights'
                ? 'bg-deck-800 text-tactical-cyan border-tactical-cyan'
                : 'bg-deck-900 text-slate-400 border-deck-800 hover:text-slate-200'
            }`}
          >
            Arena Firefights
          </button>
          <button
            onClick={() => setActiveFilter('parties')}
            className={`px-3.5 py-1.5 rounded-full border transition-all ${
              activeFilter === 'parties'
                ? 'bg-deck-800 text-tactical-cyan border-tactical-cyan'
                : 'bg-deck-900 text-slate-400 border-deck-800 hover:text-slate-200'
            }`}
          >
            Birthday Squads
          </button>
          <button
            onClick={() => setActiveFilter('gear')}
            className={`px-3.5 py-1.5 rounded-full border transition-all ${
              activeFilter === 'gear'
                ? 'bg-deck-800 text-tactical-cyan border-tactical-cyan'
                : 'bg-deck-900 text-slate-400 border-deck-800 hover:text-slate-200'
            }`}
          >
            Gear &amp; Briefings
          </button>
        </div>

        {/* Photo Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group cursor-pointer rounded-xl bg-deck-950 border border-deck-800 hover:border-tactical-cyan/60 overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 flex flex-col"
            >
              <div className="relative w-full h-56 bg-deck-900 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deck-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute top-3 right-3 p-1.5 rounded bg-deck-950/80 backdrop-blur-sm border border-deck-700 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-tactical-cyan" />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-tactical-amber mb-1">
                    <span>{photo.date}</span>
                    <span className="uppercase text-slate-400">{photo.category}</span>
                  </div>
                  <h3 className="font-bold text-white text-sm group-hover:text-tactical-cyan transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-deck-900 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>CLICK TO EXPAND</span>
                  <span>ORIGINAL PTC ARCHIVE</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl bg-deck-900 border border-deck-700 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-deck-950 border-b border-deck-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tactical-cyan"></span>
                <span className="font-mono text-xs text-slate-300 tracking-wider uppercase font-semibold">
                  {selectedPhoto.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 rounded-lg bg-deck-900 hover:bg-deck-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative w-full h-80 sm:h-[480px] bg-black">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-6 bg-deck-950 border-t border-deck-800">
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-2">
                <div className="flex items-center gap-1 text-tactical-amber">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedPhoto.date}</span>
                </div>
                <div className="flex items-center gap-1 text-tactical-cyan">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Provo Towne Centre (Lower Level)</span>
                </div>
              </div>
              <p className="text-slate-200 text-sm leading-relaxed">{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
