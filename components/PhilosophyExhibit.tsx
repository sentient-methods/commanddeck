'use client';

import React from 'react';
import Image from 'next/image';
import { Check, X, ShieldAlert, Cpu, HeartHandshake, Sparkles } from 'lucide-react';

export default function PhilosophyExhibit() {
  return (
    <section id="philosophy" className="py-20 bg-deck-900/60 border-t border-b border-deck-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-deck-850 border border-deck-700 text-xs font-mono text-tactical-amber mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>ORIGINAL ACADEMY PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Far From Traditional Laser Tag
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Most people hear &ldquo;laser tag&rdquo; and imagine a murky blacklight dungeon with 30 strangers bumping into
            each other. Command Deck was deliberately designed from the ground up as the complete opposite.
          </p>
        </div>

        {/* Comparison Matrix: Stereotype vs Reality */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Traditional Stereotype Card */}
          <div className="p-6 sm:p-8 rounded-xl bg-deck-950/80 border border-rose-950/40 relative overflow-hidden">
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <X className="w-4 h-4 text-rose-500" />
              <span>The Stereotype: Generic 90s Laser Tag Arcades</span>
            </div>
            <ul className="space-y-4 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <span className="p-1 rounded bg-rose-950/50 text-rose-400 mt-0.5">
                  <X className="w-3 h-3" />
                </span>
                <span>
                  <strong className="text-slate-300">Chaotic 30+ Player Herds:</strong> Little kids thrown into pitch-black rooms with aggressive older teens and shouting strangers.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="p-1 rounded bg-rose-950/50 text-rose-400 mt-0.5">
                  <X className="w-3 h-3" />
                </span>
                <span>
                  <strong className="text-slate-300">Dark, Murky &amp; Shady:</strong> Disorienting blacklights, Day-Glo neon splatters, and heavy smoke machines hiding tripping hazards.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="p-1 rounded bg-rose-950/50 text-rose-400 mt-0.5">
                  <X className="w-3 h-3" />
                </span>
                <span>
                  <strong className="text-slate-300">Bulky Plastic Vests &amp; Wires:</strong> Heavy, sticky chest-plates with tangled cords and generic synthetic arcade beeps.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="p-1 rounded bg-rose-950/50 text-rose-400 mt-0.5">
                  <X className="w-3 h-3" />
                </span>
                <span>
                  <strong className="text-slate-300">Canned Video Briefings:</strong> Impersonal television recordings where nobody listens to the rules or watches the floor.
                </span>
              </li>
            </ul>
          </div>

          {/* Authentic Command Deck Reality Card */}
          <div className="p-6 sm:p-8 rounded-xl bg-deck-850/90 border border-tactical-cyan/40 relative overflow-hidden shadow-xl">
            <div className="flex items-center gap-2 text-tactical-cyan font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <Check className="w-4 h-4 text-tactical-cyan" />
              <span>The Reality: Command Deck CQB Academy</span>
            </div>
            <ul className="space-y-4 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-2.5">
                <span className="p-1 rounded bg-cyan-950 text-tactical-cyan mt-0.5 border border-cyan-800">
                  <Check className="w-3 h-3" />
                </span>
                <span>
                  <strong className="text-white">Strict Private Squads (2 to 8 Players):</strong> You never combined with strangers. You decided who entered the arena with your family or friends.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="p-1 rounded bg-cyan-950 text-tactical-cyan mt-0.5 border border-cyan-800">
                  <Check className="w-3 h-3" />
                </span>
                <span>
                  <strong className="text-white">Bright Starship CQB Architecture:</strong> Diamond-plate steel flooring, metallic truss beams, sway barriers with pop-out crush zones, and clean task lighting.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="p-1 rounded bg-cyan-950 text-tactical-cyan mt-0.5 border border-cyan-800">
                  <Check className="w-3 h-3" />
                </span>
                <span>
                  <strong className="text-white">Tactical Weapon HUDs &amp; RFID Stations:</strong> Sleek carbines displaying real-time ammo count and health points, with RFID bases for tactical ammo dumps.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="p-1 rounded bg-cyan-950 text-tactical-cyan mt-0.5 border border-cyan-800">
                  <Check className="w-3 h-3" />
                </span>
                <span>
                  <strong className="text-white">Dedicated Live Referees:</strong> Trained, charismatic referees gave live game briefings, stepped inside the course, mentored young players, and kept order.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* The 4 Architectural Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="p-5 rounded-lg bg-deck-950 border border-deck-800 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded bg-deck-900 border border-deck-700 flex items-center justify-center text-tactical-cyan mb-3 font-mono text-xs font-bold">
                01
              </div>
              <h3 className="text-base font-bold text-white mb-2">Private Group Integrity</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Whether an 8-year-old birthday squad or BYU students on a $1 duel date, matches were strictly private.
                No strangers, no collisions with rowdy crowds.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-deck-850 font-mono text-[11px] text-tactical-cyan">
              2 to 8 PLAYERS ONLY
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-5 rounded-lg bg-deck-950 border border-deck-800 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded bg-deck-900 border border-deck-700 flex items-center justify-center text-tactical-amber mb-3 font-mono text-xs font-bold">
                02
              </div>
              <h3 className="text-base font-bold text-white mb-2">Engineered Safety</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Walls covered in industrial foam padding. Custom barriers swayed to absorb player impact, with pop-out
                crush zones to prevent corner collision injuries.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-deck-850 font-mono text-[11px] text-tactical-amber">
              SWAY &amp; CRUSH BARRIERS
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-5 rounded-lg bg-deck-950 border border-deck-800 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded bg-deck-900 border border-deck-700 flex items-center justify-center text-tactical-sky mb-3 font-mono text-xs font-bold">
                03
              </div>
              <h3 className="text-base font-bold text-white mb-2">Live Staff Mentorship</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Background-checked, charismatic referees gave live game briefings and stepped inside the arena to teach
                tactics, encourage nervous players, and referee fairly.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-deck-850 font-mono text-[11px] text-tactical-sky">
              ACTIVE REFEREE SUPERVISION
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-5 rounded-lg bg-deck-950 border border-deck-800 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded bg-deck-900 border border-deck-700 flex items-center justify-center text-emerald-400 mb-3 font-mono text-xs font-bold">
                04
              </div>
              <h3 className="text-base font-bold text-white mb-2">Mom&apos;s Moment of Zen</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Located right by the Provo Towne Centre play area and stores. Parents could relax, shop, or monitor the
                action in real time via wireless surveillance tablets.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-deck-850 font-mono text-[11px] text-emerald-400">
              BRIGHT MALL CONCOURSE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
