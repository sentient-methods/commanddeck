'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn, Calendar, MapPin } from 'lucide-react';

interface ArchivalPhoto {
  id: string;
  src: string;
  title: string;
  category: 'storefront' | 'matches' | 'parties' | 'gear';
  date: string;
  description: string;
}

const PHOTOS: ArchivalPhoto[] = [
  {
    id: 'storefront',
    src: '/images/Picture63-244x173.jpg',
    title: 'Mall Concourse Storefront Entrance',
    category: 'storefront',
    date: 'circa 2014',
    description:
      'The storefront entrance on the lower level of Provo Towne Centre, wrapped in cosmic asteroid artwork with CQB LASER TAG signage and overhead action screens.',
  },
  {
    id: 'kiosk',
    src: '/images/Picture15-244x173.jpg',
    title: 'Check-In Kiosk & Barstools',
    category: 'storefront',
    date: 'circa 2013',
    description:
      'The custom check-in kiosk directly facing the concourse walkway, equipped with four console barstools and flat-screen match status monitors.',
  },
  {
    id: 'ptc-exterior',
    src: '/images/PTC-287x186.jpg',
    title: 'Provo Towne Centre Mall',
    category: 'storefront',
    date: 'circa 2013',
    description:
      'Exterior view of the Provo Towne Centre at dusk. Command Deck was situated on the ground floor directly below the Cinemark 16 complex.',
  },
  {
    id: 'corridor-match',
    src: '/images/Picture9-244x173.jpg',
    title: 'Close Combat in the CQB Maze',
    category: 'matches',
    date: 'circa 2015',
    description:
      'Two players advancing through the arena maze, using tactical cover along the industrial diamond-plate steel flooring and blue LED course illumination.',
  },
  {
    id: 'resupply-zone',
    src: '/images/safe-269x195.jpg',
    title: 'Corridor Sway Barrier & Resupply',
    category: 'matches',
    date: 'circa 2014',
    description:
      'In-game action showing the impact-absorbing sway barriers, wall padding, and wall-mounted RFID ammo resupply base.',
  },
  {
    id: 'birthday-group',
    src: '/images/party-768x210.jpg',
    title: 'In-Course Pizza Birthday Party',
    category: 'parties',
    date: 'circa 2015',
    description:
      'A birthday squad enjoying pizza and cupcakes right inside the barrier course with house lights turned on, followed by Xbox gaming on the big screen.',
  },
  {
    id: 'squad-stance',
    src: '/images/Picture32-371x265.png',
    title: 'Tactical Squad Stance',
    category: 'parties',
    date: 'circa 2014',
    description:
      'Squad photo taken inside the arena with weapon HUDs illuminated and players holding defensive positions in the maze.',
  },
  {
    id: 'briefing-touchscreen',
    src: '/images/Picture8-244x173.jpg',
    title: 'Live Referee Coaching & Briefing',
    category: 'gear',
    date: 'circa 2015',
    description:
      'A Command Deck referee guiding players through game rules and tactical objectives on the touch-screen briefing podium.',
  },
  {
    id: 'academy-seal',
    src: '/images/MB_Seal.JPG',
    title: 'Official Command Deck Academy Seal',
    category: 'gear',
    date: 'circa 2013',
    description:
      'The original crest and seal used for Command Deck Crew passes, tournament certificates, and facility branding.',
  },
];

export default function HistoricalGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<ArchivalPhoto | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredPhotos = filter === 'all' ? PHOTOS : PHOTOS.filter((p) => p.category === filter);

  return (
    <section id="gallery" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="status-pill mb-3">
            <span>PHOTOGRAPHIC RECORD // ORIGINAL IMAGERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Arena Photo Gallery
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Preserved directly from the original Command Deck archives. These authentic photographs document the
            mall entrance, diamond-plate corridors, party celebrations, and staff at Provo Towne Centre.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200 text-xs font-semibold">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-2 rounded-lg border transition-all ${
              filter === 'all'
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            All Photos ({PHOTOS.length})
          </button>
          <button
            onClick={() => setFilter('storefront')}
            className={`px-3.5 py-2 rounded-lg border transition-all ${
              filter === 'storefront'
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            Storefront &amp; Concourse
          </button>
          <button
            onClick={() => setFilter('matches')}
            className={`px-3.5 py-2 rounded-lg border transition-all ${
              filter === 'matches'
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            Arena Matches
          </button>
          <button
            onClick={() => setFilter('parties')}
            className={`px-3.5 py-2 rounded-lg border transition-all ${
              filter === 'parties'
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            Birthday Parties
          </button>
          <button
            onClick={() => setFilter('gear')}
            className={`px-3.5 py-2 rounded-lg border transition-all ${
              filter === 'gear'
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            Gear &amp; Briefings
          </button>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="studio-panel group cursor-pointer rounded-xl overflow-hidden border border-slate-200 hover:border-sky-300 transition-all flex flex-col"
            >
              <div className="relative w-full h-52 bg-slate-100 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 right-2.5 p-1.5 rounded-md bg-white/90 backdrop-blur-xs border border-slate-200 text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                  <ZoomIn className="w-4 h-4 text-sky-700" />
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-1.5">
                    <span>{photo.date}</span>
                    <span className="font-semibold text-sky-700 uppercase">{photo.category}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-sky-700 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-2 line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>View Archival Photo</span>
                  <span className="font-semibold text-sky-700">Provo Towne Centre</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">
                {selectedPhoto.title}
              </span>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative w-full h-80 sm:h-96 bg-slate-100 flex items-center justify-center p-4">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-6 bg-white border-t border-slate-200">
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 mb-2">
                <div className="flex items-center gap-1.5 text-sky-700 font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedPhoto.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Provo Towne Centre (Lower Level)</span>
                </div>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
