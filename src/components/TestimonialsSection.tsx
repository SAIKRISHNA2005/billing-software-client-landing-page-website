"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Ross",
    role: "Supply Chain Director, Global Freight Corp",
    avatar: "/images/client-1.jpg",
    quote:
      "Their tracking system and on-time delivery rates are unmatched. We've seen a 25% improvement in turnaround time since partnering with them.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Vance",
    role: "Head of Port Logistics, TransAtlantic Marine",
    avatar: "/images/client-2.jpg",
    quote:
      "Sri Ponniamman Trans transformed our port container transport corridors. Their customs clearance speed and GPS telemetry give our clients total peace of mind.",
    rating: 5,
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Operations Manager, Pacific Export Lines",
    avatar: "/images/client-3.jpg",
    quote:
      "Exceptional yard coordination, zero demurrage delays, and a dedicated dispatch desk that operates 24/7. They are truly our most dependable logistics partner.",
    rating: 5,
  },
  {
    id: 4,
    name: "Elena Chen",
    role: "VP International Trade, Orient Maritime",
    avatar: "/images/client-4.jpg",
    quote:
      "Handling thousands of TEU container movements across Chennai, Tuticorin, and JNPT requires extreme precision. Sri Ponniamman Trans delivers without fail.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lukas Weber",
    role: "Managing Director, Nordic Cargo Solutions",
    avatar: "/images/client-5.jpg",
    quote:
      "From customs house brokerage to intermodal rail & highway trailers, their team executes with world-class professionalism. Highly recommended.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [slideState, setSlideState] = useState<"idle" | "exit" | "enter">("idle");

  const total = testimonials.length;

  const triggerSlide = (nextIndex: number, dir: "left" | "right") => {
    if (slideState !== "idle") return;
    setDirection(dir);
    setSlideState("exit");

    setTimeout(() => {
      setCurrentIdx(nextIndex);
      setSlideState("enter");

      requestAnimationFrame(() => {
        setTimeout(() => {
          setSlideState("idle");
        }, 30);
      });
    }, 200);
  };

  const handleNext = () => {
    const next = (currentIdx + 1) % total;
    triggerSlide(next, "right");
  };

  const handlePrev = () => {
    const prev = (currentIdx - 1 + total) % total;
    triggerSlide(prev, "left");
  };

  const handleSelect = (index: number) => {
    if (index === currentIdx) return;
    triggerSlide(index, index > currentIdx ? "right" : "left");
  };

  // Helper indices for the 4 flanking avatars on left and right
  const farLeftIdx = (currentIdx - 2 + total) % total;
  const midLeftIdx = (currentIdx - 1 + total) % total;
  const midRightIdx = (currentIdx + 1) % total;
  const farRightIdx = (currentIdx + 2 + total) % total;

  const current = testimonials[currentIdx];

  return (
    <section id="testimonials" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-[#eaecf0] dark:bg-[#0c0e12] overflow-hidden transition-colors">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#161a22] text-neutral-700 dark:text-neutral-300 text-xs font-semibold mb-3 shadow-xs border border-neutral-200 dark:border-neutral-700/80 transition-colors">
          <span className="text-orange-500">✦</span>
          <span>Client Testimonials</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-14 leading-tight transition-colors">
          What Our Partners
          <br />
          Say About Us
        </h2>

        {/* Carousel Row: Flanking Avatars on Left + Flat Center Card + Flanking Avatars on Right */}
        <div className="relative flex items-center justify-center gap-3 sm:gap-5 md:gap-8 my-6">
          {/* Far-Left Dimmed Avatar (-2) */}
          <div
            onClick={() => handleSelect(farLeftIdx)}
            className="hidden lg:block w-14 h-14 rounded-2xl overflow-hidden opacity-30 hover:opacity-75 transition-all transform hover:scale-105 cursor-pointer border border-neutral-300 dark:border-neutral-700 flex-shrink-0"
            title={testimonials[farLeftIdx].name}
          >
            <img
              src={testimonials[farLeftIdx].avatar}
              alt={testimonials[farLeftIdx].name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mid-Left Semi-Dimmed Avatar (-1) */}
          <div
            onClick={() => handleSelect(midLeftIdx)}
            className="hidden sm:block w-18 h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-2xl overflow-hidden opacity-50 hover:opacity-85 transition-all transform hover:scale-105 cursor-pointer border border-neutral-300 dark:border-neutral-700 flex-shrink-0"
            title={testimonials[midLeftIdx].name}
          >
            <img
              src={testimonials[midLeftIdx].avatar}
              alt={testimonials[midLeftIdx].name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* CENTER ACTIVE TESTIMONIAL CARD (CLEAN FLAT, NO BELOW SHADOW, SILKY SMOOTH ANIMATION) */}
          <div
            style={{
              transition: slideState === "enter" ? "none" : "all 300ms cubic-bezier(0.25, 1, 0.5, 1)",
            }}
            className={`bg-white dark:bg-[#161a22] rounded-[32px] p-6 sm:p-8 md:p-10 border border-neutral-200/90 dark:border-neutral-700/80 shadow-md max-w-2xl w-full text-left flex flex-col sm:flex-row items-center sm:items-start gap-6 transform transition-colors ${
              slideState === "exit"
                ? direction === "right"
                  ? "-translate-x-6 opacity-0 scale-[0.98]"
                  : "translate-x-6 opacity-0 scale-[0.98]"
                : slideState === "enter"
                ? direction === "right"
                  ? "translate-x-6 opacity-0 scale-[0.98]"
                  : "-translate-x-6 opacity-0 scale-[0.98]"
                : "translate-x-0 opacity-100 scale-100"
            }`}
          >
            {/* Client Photo on Left in Rounded Rectangle */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-2xl overflow-hidden flex-shrink-0 border border-neutral-200 dark:border-neutral-700">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Testimonial Quote & Info on Right */}
            <div className="flex-1 flex flex-col justify-between h-full">
              <div>
                {/* Quotation Mark */}
                <span className="text-4xl font-serif text-neutral-300 dark:text-neutral-700 leading-none block select-none">“</span>
                <p className="text-xs sm:text-sm md:text-[15px] text-neutral-700 dark:text-neutral-200 font-normal leading-relaxed -mt-2 mb-6">
                  {current.quote}
                </p>
              </div>

              {/* Author and 5 Golden Stars */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <div>
                  <div className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white">
                    — {current.name}
                  </div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">
                    {current.role}
                  </div>
                </div>

                {/* 5 Golden Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mid-Right Semi-Dimmed Avatar (+1) */}
          <div
            onClick={() => handleSelect(midRightIdx)}
            className="hidden sm:block w-18 h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-2xl overflow-hidden opacity-50 hover:opacity-85 transition-all transform hover:scale-105 cursor-pointer border border-neutral-300 dark:border-neutral-700 flex-shrink-0"
            title={testimonials[midRightIdx].name}
          >
            <img
              src={testimonials[midRightIdx].avatar}
              alt={testimonials[midRightIdx].name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Far-Right Dimmed Avatar (+2) */}
          <div
            onClick={() => handleSelect(farRightIdx)}
            className="hidden lg:block w-14 h-14 rounded-2xl overflow-hidden opacity-30 hover:opacity-75 transition-all transform hover:scale-105 cursor-pointer border border-neutral-300 dark:border-neutral-700 flex-shrink-0"
            title={testimonials[farRightIdx].name}
          >
            <img
              src={testimonials[farRightIdx].avatar}
              alt={testimonials[farRightIdx].name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Circular Pagination Controls: < and > below card */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-white dark:bg-[#161a22] hover:bg-neutral-50 dark:hover:bg-[#202531] border border-neutral-200 dark:border-neutral-700/80 shadow-xs flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white transition-all cursor-pointer hover:scale-105"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-white dark:bg-[#161a22] hover:bg-neutral-50 dark:hover:bg-[#202531] border border-neutral-200 dark:border-neutral-700/80 shadow-xs flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white transition-all cursor-pointer hover:scale-105"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
