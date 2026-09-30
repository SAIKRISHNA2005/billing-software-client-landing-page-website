"use client";

import React from "react";

export default function TickerMarquee() {
  return (
    <section className="py-8 sm:py-10 bg-white border-y border-neutral-200 overflow-hidden">
      <div className="animate-marquee flex items-center gap-6 sm:gap-12 whitespace-nowrap select-none">
        {[1, 2].map((loop) => (
          <React.Fragment key={loop}>
            <span className="text-3xl sm:text-5xl md:text-6xl font-black text-neutral-900 tracking-tight">
              Get a Quote
            </span>

            {/* Pill Image 1 */}
            <span className="inline-flex items-center p-1 bg-neutral-100 rounded-full border border-neutral-300 h-10 sm:h-14 md:h-16 w-20 sm:w-28 md:w-36 overflow-hidden flex-shrink-0 shadow-inner">
              <img
                src="/images/mini-truck.jpg"
                alt="Truck"
                className="w-full h-full object-cover rounded-full"
              />
            </span>

            <span className="text-3xl sm:text-5xl md:text-6xl font-black text-neutral-900 tracking-tight">
              Sri Ponniamman Trans
            </span>

            {/* Pill Image 2 */}
            <span className="inline-flex items-center p-1 bg-neutral-100 rounded-full border border-neutral-300 h-10 sm:h-14 md:h-16 w-20 sm:w-28 md:w-36 overflow-hidden flex-shrink-0 shadow-inner">
              <img
                src="/images/mini-ship.jpg"
                alt="Ship"
                className="w-full h-full object-cover rounded-full"
              />
            </span>

            <span className="text-3xl sm:text-5xl md:text-6xl font-black text-neutral-900 tracking-tight">
              Port-to-Port Logistics
            </span>

            {/* Pill Image 3 */}
            <span className="inline-flex items-center p-1 bg-neutral-100 rounded-full border border-neutral-300 h-10 sm:h-14 md:h-16 w-20 sm:w-28 md:w-36 overflow-hidden flex-shrink-0 shadow-inner">
              <img
                src="/images/cargo-terminal.jpg"
                alt="Cargo Terminal"
                className="w-full h-full object-cover rounded-full"
              />
            </span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
