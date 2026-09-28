'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Instagram,
  Layers,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { InstagramPost, InstagramSyncState } from '@/lib/instagram/types';

interface GalleryResponse {
  posts: InstagramPost[];
  state: Partial<InstagramSyncState>;
}

export default function InstagramGallery() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [state, setState] = useState<Partial<InstagramSyncState> | null>(null);
  const [loading, setLoading] = useState(true);
  const [activePost, setActivePost] = useState<InstagramPost | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadGallery() {
      try {
        const res = await fetch('/api/instagram/gallery');
        if (res.ok) {
          const data: GalleryResponse = await res.json();
          if (isMounted) {
            setPosts(data.posts || []);
            setState(data.state || null);
          }
        }
      } catch (err) {
        console.warn('Failed to load Instagram gallery:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadGallery();
    return () => {
      isMounted = false;
    };
  }, []);

  // Keyboard accessibility and focus management for modal
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!activePost) return;

      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        if (activePost.children && activePost.children.length > 1) {
          setActiveSlideIndex((prev) => (prev > 0 ? prev - 1 : activePost.children!.length - 1));
        }
      } else if (e.key === 'ArrowRight') {
        if (activePost.children && activePost.children.length > 1) {
          setActiveSlideIndex((prev) => (prev < activePost.children!.length - 1 ? prev + 1 : 0));
        }
      }
    }

    if (activePost) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Auto-focus the close button or modal container
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = '';
      if (triggerRef.current) {
        triggerRef.current.focus();
      }
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activePost]);

  const openModal = (post: InstagramPost, buttonEl: HTMLButtonElement) => {
    triggerRef.current = buttonEl;
    setActivePost(post);
    setActiveSlideIndex(0);
  };

  const closeModal = () => {
    setActivePost(null);
    setActiveSlideIndex(0);
  };

  // If no posts and finished loading, gracefully hide section
  if (!loading && posts.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="status-pill mb-3">
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              <span>@COMMANDDECK // COMMUNITY FEED</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Community &amp; Arena Moments
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Live dispatches, tactical squad poses, and birthday celebrations preserved directly from the{' '}
              <a
                href="https://instagram.com/commanddeck"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sky-700 hover:text-sky-800 underline underline-offset-2"
              >
                @commanddeck
              </a>{' '}
              feed.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/commanddeck"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-4 py-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 transition-all flex items-center gap-2 shadow-xs"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>Follow @commanddeck</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        {/* 12-Post Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {posts.slice(0, 12).map((post, idx) => {
            const isCarousel = post.media_type === 'CAROUSEL_ALBUM';
            const isVideo = post.media_type === 'VIDEO';
            const displayImage = post.local_thumbnail_url || post.local_media_url || post.thumbnail_url || post.media_url;

            const dateStr = new Date(post.timestamp).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            });

            return (
              <button
                key={post.id || idx}
                onClick={(e) => openModal(post, e.currentTarget)}
                aria-haspopup="dialog"
                aria-label={`View Instagram post from ${dateStr}: ${post.caption?.slice(0, 60) || 'Arena photo'}`}
                className="group relative aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 transition-all duration-300 shadow-xs hover:shadow-md"
              >
                {/* Media Image */}
                <Image
                  src={displayImage}
                  alt={post.caption ? post.caption.slice(0, 100) : 'Command Deck Instagram post'}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Media Type Badges */}
                <div className="absolute top-2.5 right-2.5 z-10">
                  {isCarousel && (
                    <span className="flex items-center gap-1 bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded-full shadow-xs">
                      <Layers className="w-3 h-3 text-sky-400" />
                      <span>{post.children?.length || 'Multi'}</span>
                    </span>
                  )}
                  {isVideo && (
                    <span className="flex items-center gap-1 bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded-full shadow-xs">
                      <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                      <span>Reel</span>
                    </span>
                  )}
                </div>

                {/* Subtle Hover Gradient & Caption Preview */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3.5 text-white">
                  <div className="text-[10px] font-mono text-sky-300 font-semibold mb-1">
                    {dateStr}
                  </div>
                  <p className="text-xs line-clamp-2 text-slate-100 leading-snug">
                    {post.caption || 'Command Deck Arena CQB'}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Accessible On-Site Lightbox Modal */}
      {activePost && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Instagram post details"
          ref={modalRef}
          tabIndex={-1}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 focus:outline-none"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Media Stage */}
            <div className="relative md:w-3/5 bg-slate-950 flex items-center justify-center min-h-[300px] sm:min-h-[420px] select-none">
              {activePost.media_type === 'CAROUSEL_ALBUM' && activePost.children ? (
                <>
                  {/* Carousel Slide Media */}
                  <div className="relative w-full h-full min-h-[300px] sm:min-h-[460px]">
                    <Image
                      src={
                        activePost.children[activeSlideIndex]?.local_media_url ||
                        activePost.children[activeSlideIndex]?.media_url ||
                        activePost.local_media_url ||
                        activePost.media_url
                      }
                      alt={activePost.caption || 'Carousel slide'}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Carousel Arrows */}
                  {activePost.children.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setActiveSlideIndex((prev) =>
                            prev > 0 ? prev - 1 : activePost.children!.length - 1
                          )
                        }
                        aria-label="Previous image"
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() =>
                          setActiveSlideIndex((prev) =>
                            prev < activePost.children!.length - 1 ? prev + 1 : 0
                          )
                        }
                        aria-label="Next image"
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Carousel Indicator Dots */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/50 px-2.5 py-1 rounded-full">
                        {activePost.children.map((_, dotIdx) => (
                          <span
                            key={dotIdx}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                              dotIdx === activeSlideIndex ? 'bg-white w-3' : 'bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : activePost.media_type === 'VIDEO' ? (
                <div className="relative w-full h-full min-h-[320px] flex items-center justify-center p-2">
                  <video
                    controls
                    playsInline
                    loop
                    poster={activePost.local_thumbnail_url || activePost.thumbnail_url}
                    src={activePost.local_media_url || activePost.media_url}
                    className="max-h-[460px] w-auto rounded"
                  >
                    Your browser does not support video playback.
                  </video>
                </div>
              ) : (
                <div className="relative w-full h-full min-h-[300px] sm:min-h-[460px]">
                  <Image
                    src={activePost.local_media_url || activePost.media_url}
                    alt={activePost.caption || 'Command Deck photo'}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>

            {/* Right Information & Caption Panel */}
            <div className="md:w-2/5 flex flex-col justify-between p-6 bg-white overflow-y-auto max-h-[50vh] md:max-h-[480px]">
              <div>
                {/* Header with Account Avatar & Close Button */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-200 bg-slate-50 flex items-center justify-center">
                      <Image
                        src="/images/MB_Seal.JPG"
                        alt="Command Deck Crest"
                        width={26}
                        height={26}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">commanddeck</div>
                      <div className="text-[11px] text-slate-500 font-mono">Provo Towne Centre</div>
                    </div>
                  </div>

                  <button
                    onClick={closeModal}
                    aria-label="Close dialog"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Date & Carousel Counter */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3 font-mono">
                  <div className="flex items-center gap-1.5 text-sky-700">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>
                      {new Date(activePost.timestamp).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  {activePost.children && (
                    <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      {activeSlideIndex + 1} of {activePost.children.length}
                    </span>
                  )}
                </div>

                {/* Caption Text */}
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line mb-6 font-normal">
                  {activePost.caption || 'No caption available for this archival post.'}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={activePost.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-600 hover:text-sky-700 inline-flex items-center gap-1.5 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-600" />
                  <span>View on Instagram</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <button
                  onClick={closeModal}
                  className="text-xs font-semibold px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
