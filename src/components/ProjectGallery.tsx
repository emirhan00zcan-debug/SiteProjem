'use client';

import React, { useState } from 'react';

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const safeImages = images && images.length > 0 ? images : ['/assets/images/placeholder.png'];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-5 h-full relative cursor-auto">
      {/* Thumbnails (Alt / Sol) */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-28 flex-shrink-0 z-10">
        {safeImages.map((img, idx) => (
          <button
            key={idx}
            className={`relative w-24 aspect-[3/4] md:w-full md:h-36 flex-shrink-0 rounded-xl overflow-hidden border-[3px] transition-all duration-300 ${
              activeIndex === idx 
                ? 'border-[var(--primary-teal)] shadow-[0_5px_15px_rgba(0,90,100,0.3)] scale-100 z-10' 
                : 'border-transparent opacity-60 hover:opacity-100 hover:scale-95'
            }`}
            onClick={() => setActiveIndex(idx)}
          >
            <img
              src={img}
              alt={`${title} thumbnail ${idx + 1}`}
              className="object-cover w-full h-full"
            />
            {activeIndex === idx && (
              <div className="absolute inset-0 bg-[var(--primary-teal)] bg-opacity-10 pointer-events-none"></div>
            )}
          </button>
        ))}
      </div>

      {/* Main Image (Büyük Görsel) */}
      <div className="relative w-full rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[650px] bg-[var(--light-bg)] flex-1 shadow-[var(--shadow-bold)] group">
        <img
          src={safeImages[activeIndex]}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-1000 ease-in-out group-hover:scale-105"
        />

        {/* Navigation Overlays */}
        {safeImages.length > 1 && (
          <>
            <button 
              onClick={() => setActiveIndex(prev => prev === 0 ? safeImages.length - 1 : prev - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-[var(--secondary-black)] opacity-0 group-hover:opacity-100 transition-all hover:bg-[var(--primary-teal)] hover:text-white hover:scale-110"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={() => setActiveIndex(prev => prev === safeImages.length - 1 ? 0 : prev + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-[var(--secondary-black)] opacity-0 group-hover:opacity-100 transition-all hover:bg-[var(--primary-teal)] hover:text-white hover:scale-110"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
