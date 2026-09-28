'use client';

import React from 'react';
import { ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';

export default function PhilosophyExhibit() {
  return (
    <section id="philosophy" className="py-24 bg-hull-950/80 border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="telemetry-chip mb-3">
            <span>FACILITY DOCTRINE // SECTION 01</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            The Anti-Arcade Doctrine
          </h2>
          <p className="mt-4 text-titanium-300 text-sm sm:text-base leading-relaxed">
            Conventional laser tag operates on volume: herds of thirty strangers navigating dark, murky rooms with
            plastic phasers. Command Deck abandoned every one of those tropes to engineer a small-group Close Quarters
            Battle discipline.
          </p>
        </div>

        {/* Clean Architectural Comparison: Archetype vs Standard */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left: The Conventional Archetype */}
          <div className="p-8 rounded-2xl bg-hull-900/40 border border-white/5 relative flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-titanium-400 mb-6 pb-3 border-b border-white/5">
                The Conventional Archetype // 90s Arcades
              </div>
              <div className="space-y-6 text-xs sm:text-sm text-titanium-400">
                <div>
                  <h4 className="font-bold text-titanium-200 mb-1">Chaotic 30-Player Free-for-Alls</h4>
                  <p className="leading-relaxed">
                    Unchecked herds of random strangers thrown together in the dark, leading to little kids getting
                    trampled by older teenagers.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-titanium-200 mb-1">Murky Blacklight Disorientation</h4>
                  <p className="leading-relaxed">
                    Heavy smoke machines and Day-Glo spray paint obscuring floor obstacles and creating tripping
                    hazards.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-titanium-200 mb-1">Bulky Plastic Harnesses</h4>
                  <p className="leading-relaxed">
                    Heavy, cumbersome chest plates tethered by coiled telephone cords, emitting generic synthetic
                    arcade chimes.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-titanium-200 mb-1">Canned Television Briefings</h4>
                  <p className="leading-relaxed">
                    Automated, impersonal video loops playing to an empty room without safety oversight or rule
                    enforcement.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 font-mono text-[10px] text-titanium-400 uppercase tracking-widest">
              DISCARDED CONVENTIONAL PARADIGM
            </div>
          </div>

          {/* Right: The Command Deck Standard */}
          <div className="p-8 rounded-2xl bg-hull-900/90 border border-phaser-cyan/30 relative flex flex-col justify-between shadow-2xl">
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-phaser-cyan mb-6 pb-3 border-b border-phaser-cyan/20 flex items-center justify-between">
                <span>The Command Deck Standard // CQB Academy</span>
                <span className="w-1.5 h-1.5 rounded-full bg-phaser-cyan animate-pulse"></span>
              </div>
              <div className="space-y-6 text-xs sm:text-sm text-titanium-200">
                <div>
                  <h4 className="font-bold text-white mb-1">Strict Private Squads (2 to 8 Operators)</h4>
                  <p className="text-titanium-300 leading-relaxed">
                    Never combined with strangers. You decided who entered the arena with your family, birthday squad, or
                    date.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Starship Industrial Hull Engineering</h4>
                  <p className="text-titanium-300 leading-relaxed">
                    Black diamond-plate steel flooring, metallic truss beams, sway barriers with pop-out crush zones, and
                    clean task lighting.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Tactical Weapon HUDs &amp; Active RFID</h4>
                  <p className="text-titanium-300 leading-relaxed">
                    Sleek carbines displaying real-time ammunition and health points, backed by wall-mounted RFID resupply
                    transponders.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Active Referee Mentorship</h4>
                  <p className="text-titanium-300 leading-relaxed">
                    Certified referees stepped inside the arena to teach tactics, encourage young players, and referee
                    every scenario live.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 font-mono text-[10px] text-phaser-cyan uppercase tracking-widest flex items-center justify-between">
              <span>ACTIVE HISTORICAL SPECIFICATION</span>
              <span>VERIFIED PTC ARCHIVE</span>
            </div>
          </div>
        </div>

        {/* 4 Architectural Framework Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-hull-900/60 border border-white/5 hover:border-phaser-cyan/30 transition-all flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] text-phaser-cyan tracking-[0.2em] uppercase mb-3">
                PILLAR 01 // INTEGRITY
              </div>
              <h3 className="text-base font-bold text-white mb-2">Private Group Integrity</h3>
              <p className="text-titanium-400 text-xs leading-relaxed">
                Whether an 8-year-old birthday party or college students on a $1 duel date, matches were strictly
                private.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-white/5 font-mono text-[10px] text-titanium-400 uppercase tracking-widest">
              2 - 8 OPERATORS ONLY
            </div>
          </div>

          <div className="p-6 rounded-xl bg-hull-900/60 border border-white/5 hover:border-phaser-cyan/30 transition-all flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] text-phaser-cyan tracking-[0.2em] uppercase mb-3">
                PILLAR 02 // SAFETY
              </div>
              <h3 className="text-base font-bold text-white mb-2">Engineered Safety Hull</h3>
              <p className="text-titanium-400 text-xs leading-relaxed">
                Industrial foam padding on walls. Swaying barriers designed to absorb momentum with pop-out crush zones.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-white/5 font-mono text-[10px] text-titanium-400 uppercase tracking-widest">
              SWAY &amp; CRUSH ZONES
            </div>
          </div>

          <div className="p-6 rounded-xl bg-hull-900/60 border border-white/5 hover:border-phaser-cyan/30 transition-all flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] text-phaser-cyan tracking-[0.2em] uppercase mb-3">
                PILLAR 03 // LEADERSHIP
              </div>
              <h3 className="text-base font-bold text-white mb-2">Live Staff Mentorship</h3>
              <p className="text-titanium-400 text-xs leading-relaxed">
                Background-checked, charismatic referees gave live game briefings and stepped inside the course to guide
                matches.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-white/5 font-mono text-[10px] text-titanium-400 uppercase tracking-widest">
              IN-ARENA REFEREEING
            </div>
          </div>

          <div className="p-6 rounded-xl bg-hull-900/60 border border-white/5 hover:border-phaser-cyan/30 transition-all flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] text-phaser-cyan tracking-[0.2em] uppercase mb-3">
                PILLAR 04 // HOSPITALITY
              </div>
              <h3 className="text-base font-bold text-white mb-2">Mom&apos;s Moment of Zen</h3>
              <p className="text-titanium-400 text-xs leading-relaxed">
                Positioned in a bright, clean mall concourse with remote video surveillance tablets for waiting parents.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-white/5 font-mono text-[10px] text-titanium-400 uppercase tracking-widest">
              PROVO TOWNE CENTRE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
