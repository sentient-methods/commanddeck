'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-void border-t border-white/5 text-titanium-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded bg-hull-900 p-1 flex items-center justify-center border border-white/10">
              <Image
                src="/images/MB_Seal.JPG"
                alt="Command Deck Insignia"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <div>
              <div className="font-bold text-white tracking-[0.18em] text-xs uppercase">COMMAND DECK CQB ACADEMY</div>
              <div className="font-mono text-[10px] text-titanium-400">Provo Towne Centre // Stardate 2012 - 2020</div>
            </div>
          </div>

          {/* Sister Company Flight Link */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-titanium-400 hidden sm:inline">Active Mobile Fleet:</span>
            <a
              href="https://frontlinetag.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-phaser-cyan hover:text-phaser-sky flex items-center gap-1 font-semibold transition-colors tracking-wider uppercase text-[11px]"
            >
              <span>frontlinetag.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Credits & Lore Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-titanium-400 text-center sm:text-left tracking-wider uppercase">
          <div>
            &copy; 2012 - {new Date().getFullYear()} Tactical Action Games LLC. All historical archives preserved.
          </div>
          <div className="text-titanium-400">
            Decommissioned in physical form. Preserved in memory.
          </div>
        </div>
      </div>
    </footer>
  );
}
