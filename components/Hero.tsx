'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight, ExternalLink, ShieldCheck, Users, Eye, Target } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-12 pb-20 bg-white bridge-grid-light border-b border-slate-200 overflow-hidden">
      {/* Subtle Star Trek enterprise light gradient accent at top */}
      <div className="absolute top-0 left-0 right-0 enterprise-accent-bar"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Subtle pill tag */}
        <div className="flex justify-center mb-6">
          <div className="status-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
            <span>PROVO TOWNE CENTRE // GROUND FLOOR BELOW CINEMARK 16</span>
          </div>
        </div>

        {/* Central Authentic Masthead */}
        <div className="flex flex-col items-center text-center">
          <div className="relative max-w-xl w-full h-24 sm:h-32 mb-6 flex items-center justify-center">
            <Image
              src="/images/cdww-630x175.jpg"
              alt="Command Deck Close Quarters Battle Academy"
              width={560}
              height={155}
              priority
              className="object-contain filter drop-shadow-sm"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 max-w-4xl leading-[1.1]">
            Close Quarters Battle Laser Tag
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
            Clean, safe, high-tech tactical laser tag originally located at the Provo Towne Centre. Designed for non-stop
            action, small private groups of 2 to 8 players, live referee coaching, and zero strangers.
          </p>

          {/* Action Navigation Controls */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#blueprint"
              className="px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
            >
              <span>Explore Arena Blueprint</span>
              <ChevronRight className="w-4 h-4 text-sky-400" />
            </a>

            <a
              href="#philosophy"
              className="px-5 py-3 rounded-lg bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs uppercase tracking-wider border border-slate-300 transition-all flex items-center gap-2 shadow-xs"
            >
              <span>Safety &amp; Rules</span>
            </a>

            <a
              href="https://frontlinetag.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 font-semibold text-xs uppercase tracking-wider border border-sky-200 transition-all flex items-center gap-2"
            >
              <span>Book Mobile Tag (Frontline)</span>
              <ExternalLink className="w-3.5 h-3.5 text-sky-600" />
            </a>
          </div>

          {/* 4 Clean Architectural Standard Pillars */}
          <div className="mt-14 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div className="studio-panel p-5 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-sky-700 font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
                  <Users className="w-4 h-4" />
                  <span>Small Private Groups</span>
                </div>
                <div className="text-slate-900 font-bold text-sm">2 to 8 Players Only</div>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                  Never combined with strangers. You always decided who entered the arena with your family or friends.
                </p>
              </div>
            </div>

            <div className="studio-panel p-5 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-sky-700 font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Safety Second &amp; Third</span>
                </div>
                <div className="text-slate-900 font-bold text-sm">Sway &amp; Crush Barriers</div>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                  Industrial foam wall padding, swaying barriers with pop-out crush zones, and ballistic eye protection.
                </p>
              </div>
            </div>

            <div className="studio-panel p-5 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-sky-700 font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
                  <Eye className="w-4 h-4" />
                  <span>Mom&apos;s Moment of Zen</span>
                </div>
                <div className="text-slate-900 font-bold text-sm">Wireless Tablet Video</div>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                  Parents could shop or relax in the clean mall while watching live match video feeds on remote tablets.
                </p>
              </div>
            </div>

            <div className="studio-panel p-5 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-sky-700 font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
                  <Target className="w-4 h-4" />
                  <span>In-Arena Coaching</span>
                </div>
                <div className="text-slate-900 font-bold text-sm">100% Live Referees</div>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                  Every briefing and scenario was refereed live inside the arena by trained, enthusiastic staff mentors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
