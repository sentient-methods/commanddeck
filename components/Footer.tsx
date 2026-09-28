'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-500 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200">
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-lg bg-slate-50 p-1 flex items-center justify-center border border-slate-200 shadow-xs">
              <Image
                src="/images/MB_Seal.JPG"
                alt="Command Deck Insignia"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <div>
              <div className="font-bold text-slate-900 tracking-tight text-xs uppercase">
                COMMAND DECK CQB ACADEMY
              </div>
              <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-slate-400 inline" />
                <span>Provo Towne Centre (Ground Floor Below Cinemark 16)</span>
              </div>
            </div>
          </div>

          {/* Sister Company Link */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-slate-500 hidden sm:inline">Active Mobile Laser Tag:</span>
            <a
              href="https://frontlinetag.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 hover:text-sky-800 flex items-center gap-1 font-semibold transition-colors uppercase tracking-wider text-[11px]"
            >
              <span>frontlinetag.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Credits & Lore Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center sm:text-left">
          <div>
            &copy; 2012 - {new Date().getFullYear()} Tactical Action Games LLC. Historical site archive preserved.
          </div>
          <div>
            Provo Towne Centre arena operations 2012 - 2020.
          </div>
        </div>
      </div>
    </footer>
  );
}
