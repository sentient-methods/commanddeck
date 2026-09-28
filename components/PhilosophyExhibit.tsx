'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Heart, MapPin, Smile, CheckCircle2 } from 'lucide-react';

export default function PhilosophyExhibit() {
  return (
    <section id="philosophy" className="py-20 bg-slate-50/70 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="status-pill mb-3">
            <span>ABOUT COMMAND DECK // FACILITY OVERVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Clean, Safe, and Family-Friendly
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Our arena was designed from the ground up to be different from traditional arcades: bright, spotlessly clean,
            and built for genuine safety, comfort, and fun for players of all ages.
          </p>
        </div>

        {/* 4 Authentic Core Feature Blocks */}
        <div className="space-y-12">
          {/* Feature 1: Easy to find */}
          <div className="studio-panel rounded-2xl p-6 sm:p-8 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 relative h-56 sm:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs">
              <Image
                src="/images/PTC-287x186.jpg"
                alt="Provo Towne Centre Exterior"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-8">
              <div className="flex items-center gap-2 text-sky-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Prime Mall Location</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                Easy to find... Just look on the bright side!
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                No need to venture into the &ldquo;shady&rdquo; parts of town to find our arena. We are located right next
                to the children&apos;s play area at the Provo Towne Centre in a bright, clean environment, surrounded by
                attractions for kids and mom.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                No other laser tag arena lets you relax, try on a new outfit, catch a movie, visit the salon, grab a
                bite, or take care of some holiday shopping all without ever leaving the building. It&apos;s a family fun
                center for the entire family!
              </p>
            </div>
          </div>

          {/* Feature 2: Safety First */}
          <div className="studio-panel rounded-2xl p-6 sm:p-8 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 order-2 md:order-1">
              <div className="flex items-center gap-2 text-sky-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Private Groups Only</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                Safety First!
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                You don&apos;t need to worry about big kids trampling your child or shouting obscenities. Command Deck
                never forces you to combine with strangers, so only you can decide who enters the arena with your loved
                ones.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Every game briefing is given live by one of our highly trained referees because a video cannot tell when
                a player is not listening to the rules. Also, to ensure a quality experience, we only host small groups of
                two to eight players, so that our referee can see and control what goes on inside the arena at all times.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-700">
                <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Small groups of 2 to 8 players
                </span>
                <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Never combined with strangers
                </span>
                <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Live in-person briefings
                </span>
              </div>
            </div>
            <div className="md:col-span-4 order-1 md:order-2 relative h-56 sm:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs flex items-center justify-center p-4">
              <Image
                src="/images/Safety-First-162x140.png"
                alt="Command Deck Safety First Emblem"
                width={200}
                height={170}
                className="object-contain"
              />
            </div>
          </div>

          {/* Feature 3: Relax... We've got your back! */}
          <div className="studio-panel rounded-2xl p-6 sm:p-8 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 relative h-56 sm:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs">
              <Image
                src="/images/mom-326x185.jpg"
                alt="Mom enjoying a moment of Zen"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-8">
              <div className="flex items-center gap-2 text-sky-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <Heart className="w-4 h-4" />
                <span>Parental Peace of Mind</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                Relax... We&apos;ve got your back!
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                If mom needs a break, we can keep your kids entertained while you enjoy a much-deserved moment of Zen!
                Leave the little ones with us, and don&apos;t worry about a thing. We are great with kids!
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                All of our referees are clean-cut, background checked, drug screened, and hand-picked for their fun and
                charismatic personalities. For your child&apos;s safety and your peace of mind, the arena is monitored
                and recorded in real time with wireless surveillance, and you can check the live video feed at any time
                with our remote viewing tablet. Think day care... with lasers!
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-300">
                  <Image src="/images/staff-179x179.jpg" alt="Staff Referee" fill className="object-cover" />
                </div>
                <div className="text-xs text-slate-600">
                  <span className="font-semibold text-slate-900">Background-checked, drug-screened staff</span>
                  <div className="text-[11px] text-slate-500">Dedicated to patient, positive player mentorship</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Safety Second, Third, and Fourth! */}
          <div className="studio-panel rounded-2xl p-6 sm:p-8 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 order-2 md:order-1">
              <div className="flex items-center gap-2 text-sky-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Engineered Arena Hardware</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                Safety Second, Third, and Fourth!
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Our arena is designed to be bright enough to see what&apos;s around you, and we&apos;ve created open spaces
                so players can maneuver safely. Our walls are covered with a layer of industrial grade foam padding, and
                our specially designed barriers shift and sway to absorb impact and even have pop-out crush zones to
                prevent injury in case of collision.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Our laser tag guns shoot infrared light that cannot burn the retina like lasers, and we provide your
                choice of ballistic safety glasses or full paintball masks for those who wish to protect their faces
                from close encounters.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-700">
                <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Industrial foam-padded walls
                </span>
                <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Impact-absorbing sway barriers
                </span>
                <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Infrared eye-safe optical beams
                </span>
              </div>
            </div>
            <div className="md:col-span-4 order-1 md:order-2 relative h-56 sm:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs">
              <Image
                src="/images/safe-269x195.jpg"
                alt="Tactical safety gear and obstacle sway barrier"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
