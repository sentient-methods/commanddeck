'use client';

import React from 'react';
import Image from 'next/image';
import { Shield, ExternalLink, Terminal } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-deck-950/90 backdrop-blur-md border-b border-deck-800">
      {/* Top Tactical Status Bar */}
      <div className="bg-deck-900/90 border-b border-deck-800/80 px-4 py-1.5 text-xs text-slate-400 font-mono flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-tactical-amber animate-pulse"></span>
          <span className="text-slate-300 font-semibold tracking-wider">STATUS: RETIRED ARENA MEMORIAL</span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="hidden sm:inline text-slate-400">PROVO TOWNE CENTRE (2012 - 2020)</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="hidden md:inline text-slate-500">COORDINATES: 40°13&apos;06&quot;N 111°39&apos;27&quot;W</span>
          <a
            href="https://frontlinetag.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tactical-cyan hover:text-tactical-sky flex items-center gap-1 transition-colors font-medium"
          >
            <span>ACTIVE MOBILE UNIT: FRONTLINETAG.COM</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded bg-deck-850 border border-deck-700 p-1 flex items-center justify-center overflow-hidden group-hover:border-tactical-cyan transition-colors">
            <Image
              src="/images/MB_Seal.JPG"
              alt="Command Deck Seal"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <div>
            <div className="font-bold tracking-widest text-slate-100 text-sm sm:text-base flex items-center gap-1.5">
              <span>COMMAND DECK</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-deck-800 text-tactical-amber border border-deck-700">
                CQB ACADEMY
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-400">Provo Towne Centre Archive</div>
          </div>
        </a>

        {/* Anchor Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-slate-300">
          <a href="#philosophy" className="hover:text-tactical-cyan transition-colors">
            The Philosophy
          </a>
          <a href="#blueprint" className="hover:text-tactical-cyan transition-colors">
            Arena Blueprint
          </a>
          <a href="#gallery" className="hover:text-tactical-cyan transition-colors">
            Photo Archive
          </a>
          <a href="#passes" className="hover:text-tactical-cyan transition-colors">
            Crew Passes
          </a>
          <a href="#stories" className="hover:text-tactical-cyan transition-colors">
            Player Stories
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="#mission-bridge"
            className="text-xs font-mono px-3.5 py-2 rounded bg-deck-850 hover:bg-deck-800 text-slate-200 border border-deck-700 hover:border-slate-500 transition-all flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5 text-tactical-amber" />
            <span className="hidden sm:inline">The Mission Continues</span>
            <span className="sm:hidden">Mission</span>
          </a>
          <a
            href="https://frontlinetag.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono px-4 py-2 rounded bg-tactical-cyan hover:bg-tactical-sky text-deck-950 font-bold transition-all shadow-sm hover:shadow flex items-center gap-1.5"
          >
            <span>Book Frontline</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
