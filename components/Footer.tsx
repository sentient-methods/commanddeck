'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deck-950 border-t border-deck-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-deck-900">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded bg-deck-900 p-1 flex items-center justify-center border border-deck-800">
              <Image
                src="/images/MB_Seal.JPG"
                alt="Command Deck Seal"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <div className="font-bold text-slate-200 tracking-wider text-sm">COMMAND DECK CQB ACADEMY</div>
              <div className="font-mono text-[11px] text-slate-500">Provo Towne Centre (2012 - 2020)</div>
            </div>
          </div>

          {/* Sister Company Bridge */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-slate-500 hidden sm:inline">Active Mobile Operations:</span>
            <a
              href="https://frontlinetag.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tactical-cyan hover:text-tactical-sky flex items-center gap-1 font-semibold transition-colors"
            >
              <span>frontlinetag.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Credits & Lore Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500 text-center sm:text-left">
          <div>
            &copy; 2012 - {new Date().getFullYear()} Tactical Action Games LLC. All historical archives preserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Decommissioned in physical form. Preserved in memory.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
