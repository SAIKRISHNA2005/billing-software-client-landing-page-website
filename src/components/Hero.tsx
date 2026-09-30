"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Navbar from "./Navbar";

interface HeroProps {
  onOpenQuote: () => void;
  onOpenTracking: () => void;
}

export default function Hero({ onOpenQuote, onOpenTracking }: HeroProps) {
  return (
    <section id="home" className="relative pt-2 sm:pt-4 md:pt-5 px-3 sm:px-4 md:px-6 w-full max-w-[1800px] mx-auto">
      {/* SVG ClipPath Definition with smooth rounded corners and the sculpted center-bottom cutout from Image 1 */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <clipPath id="hero-sculpted-cutout" clipPathUnits="objectBoundingBox">
            <path
              d="M 0.02,0 
                 Q 0,0 0,0.035 
                 L 0,0.965 
                 Q 0,1 0.02,1 
                 L 0.33,1 
                 C 0.355,1 0.365,0.945 0.39,0.945 
                 L 0.61,0.945 
                 C 0.635,0.945 0.645,1 0.67,1 
                 L 0.98,1 
                 Q 1,1 1,0.965 
                 L 1,0.035 
                 Q 1,0 0.98,0 
                 Z"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Main Hero Card Container with sculpted cutout clip-path */}
      <div
        className="relative overflow-hidden shadow-2xl bg-neutral-950 min-h-[600px] sm:min-h-[700px] md:min-h-[780px] lg:min-h-[820px] flex flex-col justify-between"
        style={{
          clipPath: "url(#hero-sculpted-cutout)",
          WebkitClipPath: "url(#hero-sculpted-cutout)",
        }}
      >
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-truck.jpg"
            alt="Sri Ponniamman Trans Cargo Truck at Container Port"
            fill
            priority
            className="object-cover object-center transform scale-[1.01]"
          />
          {/* Deep Cinematic Warm Gradient Overlays matching Image 1 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/30" />
        </div>

        {/* Floating Navbar */}
        <Navbar onOpenQuote={onOpenQuote} onOpenTracking={onOpenTracking} />

        {/* Center Hero Content */}
        <div className="relative z-10 my-auto py-10 sm:py-16 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          {/* Top Tag Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white/95 text-xs font-medium mb-6 shadow-sm">
            <span className="text-orange-400">✈</span>
            <span>Your Global Logistics Partner</span>
          </div>

          {/* Bold Headline with INLINE IMAGE BADGES embedded directly into text */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold text-white tracking-tight leading-[1.2] md:leading-[1.15] drop-shadow-md">
            <span>Smart Logistics Solutions</span>
            <br />
            <span className="inline-flex items-center flex-wrap justify-center gap-x-2 md:gap-x-3 gap-y-1">
              {/* Inline Mini Badge 1 (Container Ship) */}
              <span className="inline-flex items-center p-1 bg-white/20 backdrop-blur-md rounded-full border border-white/40 shadow-inner align-middle h-8 sm:h-10 md:h-12 w-14 sm:w-18 md:w-22 overflow-hidden my-auto transform hover:scale-105 transition-transform">
                <img
                  src="/images/mini-ship.jpg"
                  alt="Port Container Ship"
                  className="w-full h-full object-cover rounded-full"
                />
              </span>
              <span>That Move the</span>
              {/* Inline Mini Badge 2 (Cargo Truck) */}
              <span className="inline-flex items-center p-1 bg-white/20 backdrop-blur-md rounded-full border border-white/40 shadow-inner align-middle h-8 sm:h-10 md:h-12 w-14 sm:w-18 md:w-22 overflow-hidden my-auto transform hover:scale-105 transition-transform">
                <img
                  src="/images/mini-truck.jpg"
                  alt="Modern Logistics Truck"
                  className="w-full h-full object-cover rounded-full"
                />
              </span>
              <span>World.</span>
            </span>
          </h1>

          {/* Dual Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8 md:mt-10">
            <button
              onClick={onOpenQuote}
              className="px-6 sm:px-7 py-3 rounded-full bg-[#ff5c00] hover:bg-[#e04f00] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg shadow-orange-500/40 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Get a Quote</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("about");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 sm:px-7 py-3 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-xs sm:text-sm font-medium border border-white/20 flex items-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Learn More</span>
              <ChevronRight className="w-4 h-4 text-white/80" />
            </button>
          </div>
        </div>

        {/* Bottom Overlays positioned in the left and right lobes of the sculpted cutout */}
        <div className="relative z-20 px-4 sm:px-6 md:px-10 pb-6 sm:pb-8 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4">
          {/* Bottom Left: Business Clients Avatar Stack (Exact match to Image 1) */}
          <div className="flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-full bg-white shadow-xl text-neutral-900">
            <div className="flex items-center -space-x-2">
              <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white">
                <img src="/images/client-1.jpg" alt="Client" className="w-full h-full object-cover" />
              </div>
              <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white">
                <img src="/images/client-2.jpg" alt="Client" className="w-full h-full object-cover" />
              </div>
              <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white">
                <img src="/images/client-3.jpg" alt="Client" className="w-full h-full object-cover" />
              </div>
              <div className="w-7 h-7 rounded-full bg-black text-white text-[9px] font-bold flex items-center justify-center border-2 border-white">
                500+
              </div>
            </div>
            <span className="text-xs font-semibold tracking-tight text-neutral-800">Business Clients</span>
          </div>

          {/* Bottom Right: Shipments Card Widget (Exact vertical card match to Image 1) */}
          <div className="w-38 sm:w-44 p-2 sm:p-2.5 rounded-2xl bg-white shadow-xl text-neutral-900 flex flex-col gap-2">
            <div className="w-full h-18 sm:h-22 rounded-xl overflow-hidden relative shadow-inner">
              <img
                src="/images/hero-truck.jpg"
                alt="Successful Shipments"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-1 pb-0.5">
              <div className="text-xs sm:text-sm font-extrabold text-neutral-900 leading-tight">10,000+</div>
              <div className="text-[10px] text-neutral-500 font-medium">Successful Shipments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
