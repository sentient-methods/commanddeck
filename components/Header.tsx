'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Terminal, Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-hull-950/95 backdrop-blur-xl border-b border-white/5">
      {/* Top Telemetry Flight Bar */}
      <div className="bg-void/80 border-b border-white/[0.04] px-4 py-1.5 text-[11px] font-mono text-titanium-400 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-phaser-cyan animate-pulse"></span>
          <span className="text-titanium-200 tracking-wider">COMMAND DECK CQB ARCHIVE</span>
          <span className="text-white/20">/</span>
          <span className="text-titanium-400">PROVO TOWNE CENTRE (2012 - 2020)</span>
        </div>
        <div className="flex items-center gap-4 text-[10px] tracking-wider text-titanium-500">
          <span className="hidden md:inline">GRID: 40°13&apos;06&quot;N 111°39&apos;27&quot;W</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <a
            href="https://frontlinetag.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-phaser-cyan hover:text-phaser-sky transition-colors flex items-center gap-1 font-medium"
          >
            <span>ACTIVE MOBILE UNIT: FRONTLINETAG.COM</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>

      {/* Main Bridge Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded bg-hull-900 border border-white/10 p-1 flex items-center justify-center group-hover:border-phaser-cyan/50 transition-colors">
            <Image
              src="/images/MB_Seal.JPG"
              alt="Command Deck Insignia"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-bold tracking-[0.2em] text-white text-xs sm:text-sm uppercase flex items-center gap-2">
              <span>COMMAND DECK</span>
              <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-hull-850 text-phaser-cyan border border-phaser-cyan/30">
                CQB
              </span>
            </div>
            <div className="text-[10px] font-mono text-titanium-500 tracking-wider">Historical Arena Memorial</div>
          </div>
        </a>

        {/* Bridge Nav Anchors */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-mono uppercase tracking-[0.18em] text-titanium-300">
          <a href="#philosophy" className="hover:text-phaser-cyan transition-colors">
            Philosophy
          </a>
          <a href="#blueprint" className="hover:text-phaser-cyan transition-colors">
            Blueprint
          </a>
          <a href="#gallery" className="hover:text-phaser-cyan transition-colors">
            Visual Log
          </a>
          <a href="#passes" className="hover:text-phaser-cyan transition-colors">
            Crew Passes
          </a>
          <a href="#stories" className="hover:text-phaser-cyan transition-colors">
            Transmissions
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <a
            href="#mission-bridge"
            className="text-[11px] font-mono px-3 py-1.5 rounded bg-hull-900 hover:bg-hull-850 text-titanium-300 border border-white/10 hover:border-white/20 transition-all flex items-center gap-1.5"
          >
            <Terminal className="w-3 h-3 text-phaser-cyan" />
            <span className="hidden sm:inline">The Mission Continues</span>
            <span className="sm:hidden">Mission</span>
          </a>
          <a
            href="https://frontlinetag.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono px-3.5 py-1.5 rounded bg-phaser-cyan/10 hover:bg-phaser-cyan/20 text-phaser-cyan border border-phaser-cyan/40 hover:border-phaser-cyan font-bold transition-all flex items-center gap-1.5 shadow-[0_0_15px_-3px_rgba(0,229,255,0.2)]"
          >
            <span>Book Frontline</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </header>
  );
}
