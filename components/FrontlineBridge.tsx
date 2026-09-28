'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Truck, Zap, MapPin, ArrowRight } from 'lucide-react';

export default function FrontlineBridge() {
  return (
    <section id="mobile-tag" className="py-20 bg-slate-50/80 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="studio-panel rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200 shadow-sm relative overflow-hidden bg-white">
          {/* Top Pill */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div className="status-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              <span>ACTIVE MOBILE SISTER COMPANY // STATEWIDE OPERATIONS</span>
            </div>
            <div className="text-xs font-mono text-slate-500">
              Provo Towne Centre &rarr; Statewide Mobile Laser Tag
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Want to Play in a Larger Arena or with a Bigger Group?
              </h2>

              <p className="mt-6 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                Command Deck was designed as an intimate Close Quarters Battle (CQB) arena for non-stop action and maximum
                game intensity. It was a perfect fit for small children and an intense challenge for adults.
              </p>

              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Following the pandemic, our physical mall arena operations concluded, but the mission expanded into
                mobile laser tag through sister company <strong className="text-slate-900">Frontline TAG</strong>.
                Today, we bring all of our tactical equipment directly to you: maneuver through the woods, storm the
                office, or dominate your own backyard.
              </p>

              {/* 3 Mobile Features */}
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-1.5 text-sky-700 font-mono text-[10px] font-bold uppercase tracking-wider mb-1">
                    <Truck className="w-3.5 h-3.5" />
                    <span>Mobile Delivery</span>
                  </div>
                  <div className="font-bold text-slate-900 text-xs">Direct to Your Location</div>
                  <p className="text-slate-500 text-[11px] mt-1 leading-relaxed">
                    We bring laser tag guns, obstacle bunkers, and referees straight to you.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-1.5 text-sky-700 font-mono text-[10px] font-bold uppercase tracking-wider mb-1">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Same CQB Tech</span>
                  </div>
                  <div className="font-bold text-slate-900 text-xs">HUDs &amp; RFID Bases</div>
                  <p className="text-slate-500 text-[11px] mt-1 leading-relaxed">
                    Weapon health points, ammo counters, and digital scoring stats.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-1.5 text-sky-700 font-mono text-[10px] font-bold uppercase tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Statewide Events</span>
                  </div>
                  <div className="font-bold text-slate-900 text-xs">Utah County &amp; Beyond</div>
                  <p className="text-slate-500 text-[11px] mt-1 leading-relaxed">
                    Serving Utah County, Salt Lake Valley, and events across Utah.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Booking Card */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-xs">
              <div className="text-[11px] font-mono text-sky-700 uppercase font-bold tracking-wider mb-2">
                ACTIVE BOOKINGS
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Frontline Laser TAG</h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Book active mobile tactical laser tag for birthday parties, corporate picnics, and group events.
              </p>
              <a
                href="https://frontlinetag.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Visit FrontlineTAG.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
