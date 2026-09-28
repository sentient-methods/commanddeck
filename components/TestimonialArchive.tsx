'use client';

import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

interface CustomerReview {
  author: string;
  headline: string;
  body: string;
  groupType: string;
  stars: number;
}

const REVIEWS: CustomerReview[] = [
  {
    author: 'Cherri Hanks',
    headline: 'Awesome!',
    body:
      'I needed something inexpensive and fun to do with six boys ages 4-10. Laser tag at Command Deck was the perfect choice. The boys loved it! I was able to relax and look around in a nearby store. The employee was helpful and enthusiastic with the boys. The boys are already begging to go back. 5 Stars!!!!',
    groupType: 'Six boys (ages 4 - 10)',
    stars: 5,
  },
  {
    author: 'Kelly Walker',
    headline: 'Best Birthday Party Ever!',
    body:
      'My son had his 9th birthday party yesterday afternoon at Command Deck. I bought the $150 party package. The 7 boys (all ages 8 and 9) played laser tag for an hour, then we had cake and pizza inside the laser tag course with the lights on, then the boys split up and some played more laser tag and some played XBox on the giant TV screen for almost another hour. They all had a great time and we really liked the Command Deck employee that took care of us. According to my son it was his best birthday party ever!',
    groupType: 'Son’s 9th Birthday Party',
    stars: 5,
  },
  {
    author: 'Lori Beals',
    headline: 'So Helpful!',
    body:
      'Nels welcomed us at check in and explained everything so well and had A LOT of patience. We had my son’s 8th birthday party there and it was so much fun for the kids. Nels was so helpful and kind with us. He even played with my 5 year-old (who was getting tired and ornery) showing him some of his tricks. He accommodated us to have the room I reserved. Great party and will definitely be back!',
    groupType: 'Son’s 8th Birthday (Referee Nels)',
    stars: 5,
  },
];

export default function TestimonialArchive() {
  return (
    <section id="reviews" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="status-pill mb-3">
            <span>COMMUNITY FEEDBACK // VERIFIED REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Customer Testimonials
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Preserved word-for-word from the original Command Deck website. These reviews from real Utah families
            demonstrate the patient referees, clean facility, and memorable parties created at Provo Towne Centre.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.author}
              className="studio-panel rounded-2xl p-7 flex flex-col justify-between border border-slate-200 shadow-xs"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                  &ldquo;{review.headline}&rdquo;
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  &ldquo;{review.body}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">{review.author}</div>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5">{review.groupType}</div>
                </div>
                <span className="text-[10px] font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 uppercase">
                  Verified Review
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
