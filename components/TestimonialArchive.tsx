'use client';

import React from 'react';
import { MessageSquareQuote, Radio } from 'lucide-react';

interface Transmission {
  author: string;
  headline: string;
  body: string;
  classification: string;
  context: string;
}

const TRANSMISSIONS: Transmission[] = [
  {
    author: 'Cherri Hanks',
    headline: 'Awesome!',
    body:
      'I needed something inexpensive and fun to do with six boys ages 4-10. Laser tag at Command Deck was the perfect choice. The boys loved it! I was able to relax and look around in a nearby store. The employee was helpful and enthusiastic with the boys. The boys are already begging to go back. 5 Stars!!!!',
    classification: 'PARENT OVERSIGHT // ZEN',
    context: 'Six boys (ages 4 - 10)',
  },
  {
    author: 'Kelly Walker',
    headline: 'Best Birthday Party Ever!',
    body:
      'My son had his 9th birthday party yesterday afternoon at Command Deck. I bought the $150 party package. The 7 boys played laser tag for an hour, then we had cake and pizza inside the laser tag course with the lights on, then the boys split up and some played more laser tag and some played XBox on the giant TV screen for almost another hour. They all had a great time and we really liked the Command Deck employee that took care of us. According to my son it was his best birthday party ever!',
    classification: 'EVENT LOG // 9TH BIRTHDAY',
    context: 'In-Course Pizza & Xbox Party',
  },
  {
    author: 'Lori Beals',
    headline: 'So Helpful!',
    body:
      'Nels welcomed us at check in and explained everything so well and had A LOT of patience. We had my son’s 8th birthday party there and it was so much fun for the kids. Nels was so helpful and kind with us. He even played with my 5 year-old (who was getting tired and ornery) showing him some of his tricks. He accommodated us to have the room I reserved. Great party and will definitely be back!',
    classification: 'CREW LOG // STAFF COMMENDATION',
    context: 'Commending Referee Nels',
  },
];

export default function TestimonialArchive() {
  return (
    <section id="stories" className="py-24 bg-hull-950/80 border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="telemetry-chip mb-3">
            <span>COMMUNICATIONS LOG // SECTION 05</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Transmissions From the Concourse
          </h2>
          <p className="mt-4 text-titanium-300 text-sm sm:text-base leading-relaxed">
            Preserved verbatim from the original website origin. These verified community transmissions capture the
            genuine trust, patient staff, and family celebrations created at Provo Towne Centre.
          </p>
        </div>

        {/* Transmissions Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
          {TRANSMISSIONS.map((t) => (
            <div
              key={t.author}
              className="p-8 rounded-2xl bg-hull-900/60 border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6 pb-3 border-b border-white/5">
                  <span className="font-mono text-[10px] text-phaser-cyan tracking-[0.2em] uppercase font-semibold">
                    {t.classification}
                  </span>
                  <Radio className="w-3.5 h-3.5 text-titanium-400" />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">&ldquo;{t.headline}&rdquo;</h3>

                <p className="text-titanium-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.body}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-xs">{t.author}</div>
                  <div className="text-[10px] font-mono text-titanium-400 tracking-wider uppercase mt-0.5">
                    {t.context}
                  </div>
                </div>
                <div className="font-mono text-[10px] text-phaser-cyan uppercase tracking-widest">
                  VERIFIED
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
