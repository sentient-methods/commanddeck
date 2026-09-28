'use client';

import React from 'react';
import { MessageSquareQuote, Star, Heart, Cake, ThumbsUp } from 'lucide-react';

interface Testimonial {
  author: string;
  headline: string;
  quote: string;
  tag: string;
  context: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    author: 'Cherri Hanks',
    headline: 'Awesome!',
    quote:
      'I needed something inexpensive and fun to do with six boys ages 4-10. Laser tag at Command Deck was the perfect choice. The boys loved it! I was able to relax and look around in a nearby store. The employee was helpful and enthusiastic with the boys. The boys are already begging to go back. 5 Stars!!!!',
    tag: 'Mom’s Moment of Zen',
    context: 'Six boys ages 4 to 10',
  },
  {
    author: 'Kelly Walker',
    headline: 'Best Birthday Party Ever!',
    quote:
      'My son had his 9th birthday party yesterday afternoon at Command Deck. I bought the $150 party package. The 7 boys played laser tag for an hour, then we had cake and pizza inside the laser tag course with the lights on, then the boys split up and some played more laser tag and some played XBox on the giant TV screen for almost another hour. They all had a great time and we really liked the Command Deck employee that took care of us. According to my son it was his best birthday party ever!',
    tag: '9th Birthday Squad',
    context: 'In-Course Pizza & Xbox Party',
  },
  {
    author: 'Lori Beals',
    headline: 'So Helpful!',
    quote:
      'Nels welcomed us at check in and explained everything so well and had A LOT of patience. We had my son’s 8th birthday party there and it was so much fun for the kids. Nels was so helpful and kind with us. He even played with my 5 year-old (who was getting tired and ornery) showing him some of his tricks. He accommodated us to have the room I reserved. Great party and will definitely be back!',
    tag: 'Referee Mentorship',
    context: 'Mentioning Referee Nels',
  },
];

export default function TestimonialArchive() {
  return (
    <section id="stories" className="py-20 bg-deck-900/60 border-t border-b border-deck-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-deck-850 border border-deck-700 text-xs font-mono text-tactical-sky mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>COMMUNITY TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Memories From the Concourse
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Preserved verbatim from the original website. These verified reviews reflect the genuine family trust,
            patient staff, and unforgettable birthday memories created in Provo.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="p-6 sm:p-8 rounded-2xl bg-deck-950 border border-deck-800 flex flex-col justify-between hover:border-deck-700 transition-colors shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center text-tactical-amber">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-tactical-amber" />
                    ))}
                  </div>
                  <span className="font-mono text-[11px] text-tactical-cyan px-2 py-0.5 rounded bg-deck-900 border border-deck-800">
                    {t.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">&ldquo;{t.headline}&rdquo;</h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-deck-850 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-200 text-xs">{t.author}</div>
                  <div className="text-[11px] font-mono text-slate-400">{t.context}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-deck-900 border border-deck-800 flex items-center justify-center text-tactical-amber">
                  <Heart className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
