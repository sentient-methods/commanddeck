'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight, ExternalLink, Shield, Crosshair, Users, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-16 pb-24 overflow-hidden bridge-grid">
      {/* Cinematic Horizontal Anamorphic Lens Flare */}
      <div className="absolute top-0 left-0 right-0 flare-divider"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-phaser-cyan/5 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Telemetry Status Bar */}
        <div className="flex justify-center mb-8">
          <div className="telemetry-chip">
            <span className="w-1.5 h-1.5 rounded-full bg-phaser-cyan animate-pulse"></span>
            <span>DECOMMISSIONED FACILITY ARCHIVE // STARDATE 2012 - 2020</span>
          </div>
        </div>

        {/* Central Logo & Cinematic Masthead */}
        <div className="flex flex-col items-center text-center">
          <div className="relative max-w-lg w-full h-28 sm:h-36 mb-6 flex items-center justify-center">
            <Image
              src="/images/glowcd-812x335.png"
              alt="Command Deck Insignia"
              width={580}
              height={240}
              priority
              className="object-contain filter drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl leading-[1.1]">
            The Close Quarters Battle Academy at&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-phaser-sky to-phaser-cyan">
              Provo Towne Centre
            </span>
          </h1>

          <p className="mt-6 text-sm sm:text-base lg:text-lg text-titanium-300 max-w-2xl font-normal leading-relaxed">
            Constructed below Cinemark 16, Command Deck challenged the noisy, dark laser tag arcade stereotype. We
            engineered an intimate tactical environment focused on private squads, starship corridor CQB, and
            active referee mentorship.
          </p>

          {/* Console Action Controls */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#blueprint"
              className="px-6 py-3 rounded-lg bg-hull-900/90 hover:bg-hull-850 text-white font-mono text-xs uppercase tracking-wider border border-white/10 hover:border-phaser-cyan/50 transition-all flex items-center gap-2.5 shadow-lg group"
            >
              <span>Explore Arena Blueprint</span>
              <ChevronRight className="w-3.5 h-3.5 text-phaser-cyan group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#gallery"
              className="px-6 py-3 rounded-lg bg-void/60 hover:bg-hull-900 text-titanium-300 hover:text-white font-mono text-xs uppercase tracking-wider border border-white/5 hover:border-white/20 transition-all flex items-center gap-2"
            >
              <span>Flight Log &amp; Photos</span>
            </a>

            <a
              href="https://frontlinetag.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-phaser-cyan text-void font-mono text-xs font-bold uppercase tracking-wider hover:bg-phaser-sky transition-all flex items-center gap-2 shadow-[0_0_25px_-5px_rgba(0,229,255,0.4)]"
            >
              <span>Book Frontline TAG</span>
              <ExternalLink className="w-3.5 h-3.5 text-void" />
            </a>
          </div>

          {/* Subtly Framed Telemetry Instrument Strip */}
          <div className="mt-16 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="p-5 bg-hull-950/90 backdrop-blur-md text-left flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono tracking-[0.2em] text-phaser-cyan uppercase mb-2 flex items-center gap-1.5">
                  <Users className="w-3 h-3" />
                  <span>SPEC 01 // SQUADS</span>
                </div>
                <div className="text-white font-bold text-sm tracking-tight">2 to 8 Operators</div>
                <div className="text-titanium-400 text-xs mt-1 leading-relaxed">
                  Strict private engagements. Never combined with strangers.
                </div>
              </div>
            </div>

            <div className="p-5 bg-hull-950/90 backdrop-blur-md text-left flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono tracking-[0.2em] text-phaser-cyan uppercase mb-2 flex items-center gap-1.5">
                  <Shield className="w-3 h-3" />
                  <span>SPEC 02 // HULL</span>
                </div>
                <div className="text-white font-bold text-sm tracking-tight">Impact Sway Barriers</div>
                <div className="text-titanium-400 text-xs mt-1 leading-relaxed">
                  Diamond-plate steel treads and pop-out collision zones.
                </div>
              </div>
            </div>

            <div className="p-5 bg-hull-950/90 backdrop-blur-md text-left flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono tracking-[0.2em] text-phaser-cyan uppercase mb-2 flex items-center gap-1.5">
                  <Crosshair className="w-3 h-3" />
                  <span>SPEC 03 // TELEMETRY</span>
                </div>
                <div className="text-white font-bold text-sm tracking-tight">Weapon HUDs &amp; RFID</div>
                <div className="text-titanium-400 text-xs mt-1 leading-relaxed">
                  Real-time weapon displays and active ammo cache dumps.
                </div>
              </div>
            </div>

            <div className="p-5 bg-hull-950/90 backdrop-blur-md text-left flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono tracking-[0.2em] text-phaser-cyan uppercase mb-2 flex items-center gap-1.5">
                  <Activity className="w-3 h-3" />
                  <span>SPEC 04 // COMMAND</span>
                </div>
                <div className="text-white font-bold text-sm tracking-tight">100% Live Referees</div>
                <div className="text-titanium-400 text-xs mt-1 leading-relaxed">
                  Trained mentors in the course coaching and refereeing.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
