'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Users, Eye, Sparkles, MapPin, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-12 pb-20 overflow-hidden bg-tactical-grid">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-tactical-cyan/10 blur-[120px] pointer-events-none rounded-full"></div>
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[200px] bg-tactical-amber/10 blur-[90px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Memorial Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-deck-900 border border-deck-700 text-xs font-mono text-slate-300 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-tactical-cyan animate-pulse"></span>
            <span className="text-tactical-cyan font-semibold">HISTORICAL MEMORIAL ARCHIVE</span>
            <span className="text-slate-600">/</span>
            <span>PROVO, UTAH</span>
          </div>
        </div>

        {/* Central Logo Display */}
        <div className="flex flex-col items-center text-center">
          <div className="relative max-w-xl w-full h-32 sm:h-44 mb-4 flex items-center justify-center">
            <Image
              src="/images/glowcd-812x335.png"
              alt="Command Deck Logo"
              width={650}
              height={268}
              priority
              className="object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]"
            />
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white max-w-4xl">
            The Close Quarters Battle Academy at&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tactical-sky to-tactical-cyan">
              Provo Towne Centre
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Located on the lower level beneath Cinemark 16, Command Deck challenged the dark, chaotic laser tag
            arcade stereotype. We built an intimate, family-friendly tactical training facility featuring clean starship
            corridors, private squad play, and live referee mentorship.
          </p>

          {/* Quick CTA Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#blueprint"
              className="px-6 py-3 rounded bg-deck-850 hover:bg-deck-800 text-slate-100 font-mono text-xs sm:text-sm font-semibold border border-deck-600 hover:border-tactical-cyan transition-all shadow-md flex items-center gap-2 group"
            >
              <span>Explore Arena Blueprint</span>
              <ChevronRight className="w-4 h-4 text-tactical-cyan group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#gallery"
              className="px-6 py-3 rounded bg-deck-900 hover:bg-deck-850 text-slate-300 hover:text-white font-mono text-xs sm:text-sm border border-deck-700 transition-all flex items-center gap-2"
            >
              <span>View Archival Photos</span>
            </a>

            <a
              href="https://frontlinetag.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded bg-gradient-to-r from-tactical-amber to-tactical-gold hover:from-amber-400 hover:to-yellow-400 text-deck-950 font-mono text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2"
            >
              <span>Book Frontline TAG Mobile</span>
              <ChevronRight className="w-4 h-4 text-deck-950" />
            </a>
          </div>

          {/* Authentic Core Pillars / Quick Badges */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
            <div className="p-4 rounded-lg bg-deck-900/80 border border-deck-800 backdrop-blur-sm text-left">
              <div className="flex items-center gap-2 text-tactical-cyan mb-1.5 font-mono text-xs font-semibold">
                <Users className="w-4 h-4" />
                <span>PRIVATE SQUADS</span>
              </div>
              <div className="text-slate-100 font-bold text-sm">2 to 8 Players Max</div>
              <div className="text-slate-400 text-xs mt-1">Never combined with strangers or older crowds.</div>
            </div>

            <div className="p-4 rounded-lg bg-deck-900/80 border border-deck-800 backdrop-blur-sm text-left">
              <div className="flex items-center gap-2 text-tactical-amber mb-1.5 font-mono text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>SAFETY FIRST</span>
              </div>
              <div className="text-slate-100 font-bold text-sm">Sway &amp; Crush Barriers</div>
              <div className="text-slate-400 text-xs mt-1">Industrial foam walls and pop-out collision zones.</div>
            </div>

            <div className="p-4 rounded-lg bg-deck-900/80 border border-deck-800 backdrop-blur-sm text-left">
              <div className="flex items-center gap-2 text-tactical-sky mb-1.5 font-mono text-xs font-semibold">
                <Eye className="w-4 h-4" />
                <span>LIVE REFEREES</span>
              </div>
              <div className="text-slate-100 font-bold text-sm">No Canned Videos</div>
              <div className="text-slate-400 text-xs mt-1">Trained staff in the arena coaching every round.</div>
            </div>

            <div className="p-4 rounded-lg bg-deck-900/80 border border-deck-800 backdrop-blur-sm text-left">
              <div className="flex items-center gap-2 text-slate-300 mb-1.5 font-mono text-xs font-semibold">
                <MapPin className="w-4 h-4 text-tactical-cyan" />
                <span>LOCATION</span>
              </div>
              <div className="text-slate-100 font-bold text-sm">Provo Towne Centre</div>
              <div className="text-slate-400 text-xs mt-1">Ground floor concourse, below Cinemark 16.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
