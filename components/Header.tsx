'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, ShieldCheck, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Historic Status Bar: Subtle, authentic notice */}
      <div className="bg-slate-50 border-b border-slate-200/80 px-4 py-2 text-xs font-sans text-slate-600 flex flex-wrap items-center justify-between gap-3">
        <div className="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
            <span className="font-semibold text-slate-800">Historical Facility Notice:</span>
            <span>
              Provo Towne Centre arena operations have concluded. Active mobile tactical events continue statewide via{' '}
              <a
                href="https://frontlinetag.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sky-700 hover:text-sky-800 underline underline-offset-2 inline-flex items-center gap-0.5"
              >
                Frontline TAG
                <ExternalLink className="w-3 h-3 ml-0.5 inline" />
              </a>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-slate-500 font-mono text-[11px]">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-400" />
              Provo Towne Centre (Below Cinemark 16)
            </span>
            <span className="text-slate-300">|</span>
            <span>2012 - 2020 Archive</span>
          </div>
        </div>
      </div>

      {/* Main Studio Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shadow-xs group-hover:border-sky-500 transition-colors">
            <Image
              src="/images/MB_Seal.JPG"
              alt="Command Deck Academy Crest"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-black tracking-tight text-slate-900 text-sm sm:text-base uppercase flex items-center gap-2">
              <span>COMMAND DECK</span>
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200">
                CQB ACADEMY
              </span>
            </div>
            <div className="text-[11px] text-slate-500 font-medium">Close Quarters Battle Laser Tag</div>
          </div>
        </a>

        {/* Clean Studio Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-600">
          <a href="#philosophy" className="hover:text-sky-700 transition-colors">
            Safety &amp; Rules
          </a>
          <a href="#blueprint" className="hover:text-sky-700 transition-colors">
            Arena Layout
          </a>
          <a href="#who-plays" className="hover:text-sky-700 transition-colors">
            Who Plays
          </a>
          <a href="#gallery" className="hover:text-sky-700 transition-colors">
            Photos
          </a>
          <a href="#passes" className="hover:text-sky-700 transition-colors">
            Crew Passes
          </a>
          <a href="#reviews" className="hover:text-sky-700 transition-colors">
            Reviews
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <a
            href="https://frontlinetag.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition-all flex items-center gap-1.5 shadow-sm shadow-sky-600/20"
          >
            <span>Book Mobile TAG</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
