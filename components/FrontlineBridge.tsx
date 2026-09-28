'use client';

import React from 'react';
import { Truck, ExternalLink, ArrowRight, ShieldCheck, Zap, Radio } from 'lucide-react';

export default function FrontlineBridge() {
  return (
    <section id="mission-bridge" className="py-20 bg-deck-950 relative overflow-hidden">
      {/* Subtle background ambient styling */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-tactical-amber/5 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-deck-900 via-deck-900/90 to-deck-850 border border-deck-700/80 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Top Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tactical-amber/10 border border-tactical-amber/30 text-xs font-mono text-tactical-amber">
              <span className="w-2 h-2 rounded-full bg-tactical-amber animate-ping"></span>
              <span className="font-semibold tracking-wider">OPERATION TRANSITION // SISTER COMPANY</span>
            </div>
            <div className="font-mono text-xs text-slate-400">
              ORIGIN: PROVO, UT &rarr; STATEWIDE MOBILE OPERATIONS
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                The Mission Continues at{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tactical-amber to-tactical-gold">
                  Frontline TAG
                </span>
              </h2>

              <p className="mt-6 text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                When the physical arena at Provo Towne Centre closed operations during the pandemic, the tactical
                experience did not disappear. It evolved.
              </p>

              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Our mobile division transitioned into sister company <strong className="text-white">Frontline TAG</strong>.
                Today, the same high-tech blasters with real-time weapon HUDs, RFID respawn bases, and professional
                referees travel directly to your backyard, park, office, or campus across Utah.
              </p>

              {/* Feature Highlights */}
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-deck-950/70 border border-deck-800">
                  <Truck className="w-5 h-5 text-tactical-amber mb-2" />
                  <div className="font-bold text-white text-xs">Direct Mobile Delivery</div>
                  <div className="text-slate-400 text-[11px] mt-1">We bring all gear, obstacles, and tech to you.</div>
                </div>

                <div className="p-4 rounded-xl bg-deck-950/70 border border-deck-800">
                  <Zap className="w-5 h-5 text-tactical-cyan mb-2" />
                  <div className="font-bold text-white text-xs">Same Tactical Tech</div>
                  <div className="text-slate-400 text-[11px] mt-1">RFID bases, ammo telemetry, and weapon HUDs.</div>
                </div>

                <div className="p-4 rounded-xl bg-deck-950/70 border border-deck-800">
                  <Radio className="w-5 h-5 text-tactical-sky mb-2" />
                  <div className="font-bold text-white text-xs">Statewide in Utah</div>
                  <div className="text-slate-400 text-[11px] mt-1">Serving Utah County, Salt Lake, and beyond.</div>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-deck-950 border border-tactical-amber/30 text-center">
              <div className="text-xs font-mono text-tactical-amber uppercase tracking-wider mb-2 font-semibold">
                ACTIVE BOOKINGS OPEN
              </div>
              <div className="text-xl font-bold text-white mb-2">Book Your Next Battle</div>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Birthday parties, youth groups, corporate team building, and family reunions.
              </p>
              <a
                href="https://frontlinetag.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-tactical-amber to-tactical-gold hover:from-amber-400 hover:to-yellow-400 text-deck-950 font-mono text-xs sm:text-sm font-black transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>Visit FrontlineTAG.com</span>
                <ExternalLink className="w-4 h-4 text-deck-950" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
