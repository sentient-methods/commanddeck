'use client';

import React from 'react';
import { ExternalLink, Truck, Zap, Radio, ChevronRight } from 'lucide-react';

export default function FrontlineBridge() {
  return (
    <section id="mission-bridge" className="py-24 bg-void relative overflow-hidden bridge-grid">
      {/* Top Anamorphic Flare Line */}
      <div className="absolute top-0 left-0 right-0 flare-divider"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-hull-950 border border-white/10 p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Top Telemetry Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
            <div className="telemetry-chip">
              <span className="w-1.5 h-1.5 rounded-full bg-phaser-cyan animate-pulse"></span>
              <span>OPERATIONAL EVOLUTION // ACTIVE FLEET</span>
            </div>
            <div className="font-mono text-[11px] text-titanium-400 tracking-wider">
              PROVO TOWNE CENTRE &rarr; STATEWIDE MOBILE OPERATIONS
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                The Mission Continues at{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-phaser-sky to-phaser-cyan">
                  Frontline TAG
                </span>
              </h2>

              <p className="mt-6 text-titanium-200 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                When physical mall operations ceased during the pandemic, the tactical laser tag mission did not end. It
                expanded into mobile fleet operations.
              </p>

              <p className="mt-4 text-titanium-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Our operations transitioned into sister company <strong className="text-white">Frontline TAG</strong>.
                Today, the same tactical carbines with weapon-mounted HUDs, RFID respawn transponders, and professional
                in-game referees travel directly to backyards, parks, offices, and campuses across Utah.
              </p>

              {/* 3 Streamlined Fleet Specs */}
              <div className="mt-10 grid sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-hull-900/60 border border-white/5">
                  <div className="text-[10px] font-mono text-phaser-cyan tracking-[0.2em] uppercase mb-1.5 flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5" />
                    <span>LOGISTICS</span>
                  </div>
                  <div className="font-bold text-white text-xs">Direct Mobile Delivery</div>
                  <div className="text-titanium-400 text-[11px] mt-1 leading-relaxed">
                    Full obstacle fields and gear brought directly to your location.
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-hull-900/60 border border-white/5">
                  <div className="text-[10px] font-mono text-phaser-cyan tracking-[0.2em] uppercase mb-1.5 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>TELEMETRY</span>
                  </div>
                  <div className="font-bold text-white text-xs">Same CQB Technology</div>
                  <div className="text-titanium-400 text-[11px] mt-1 leading-relaxed">
                    RFID ammo dumps, weapon HUDs, and digital scorekeeping.
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-hull-900/60 border border-white/5">
                  <div className="text-[10px] font-mono text-phaser-cyan tracking-[0.2em] uppercase mb-1.5 flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5" />
                    <span>RANGE</span>
                  </div>
                  <div className="font-bold text-white text-xs">Statewide Deployment</div>
                  <div className="text-titanium-400 text-[11px] mt-1 leading-relaxed">
                    Serving Utah County, Salt Lake Valley, and throughout the state.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Booking Terminal Card */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-hull-900/80 border border-phaser-cyan/30 text-center shadow-2xl relative">
              <div className="text-[10px] font-mono text-phaser-cyan uppercase tracking-[0.2em] mb-2 font-semibold">
                ACTIVE SISTER COMPANY
              </div>
              <div className="text-xl font-bold text-white mb-2 tracking-tight">Active Laser Tag Bookings</div>
              <p className="text-xs text-titanium-400 mb-8 leading-relaxed">
                Birthday parties, youth groups, corporate team events, and family reunions.
              </p>
              <a
                href="https://frontlinetag.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-phaser-cyan hover:bg-phaser-sky text-void font-mono text-xs font-black uppercase tracking-wider transition-all shadow-[0_0_25px_-5px_rgba(0,229,255,0.4)] flex items-center justify-center gap-2"
              >
                <span>Visit FrontlineTAG.com</span>
                <ExternalLink className="w-3.5 h-3.5 text-void" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
