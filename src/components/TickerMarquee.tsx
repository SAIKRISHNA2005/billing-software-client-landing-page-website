"use client";

import React from "react";

export default function TickerMarquee() {
  return (
    <section className="py-8 sm:py-10 bg-white dark:bg-[#0c0e12] border-y border-neutral-200 dark:border-neutral-800/80 overflow-hidden transition-colors">
      <div className="animate-marquee flex items-center gap-6 sm:gap-12 whitespace-nowrap select-none">
        {[1, 2].map((loop) => (
          <React.Fragment key={loop}>
            <span className="text-3xl sm:text-5xl md:text-6xl font-black text-neutral-900 dark:text-white tracking-tight transition-colors">
              Get a Quote
            </span>

            {/* Pill Image 1 */}
            <span className="inline-flex items-center p-1 bg-neutral-100 dark:bg-[#161a22] rounded-full border border-neutral-300 dark:border-neutral-700 h-10 sm:h-14 md:h-16 w-20 sm:w-28 md:w-36 overflow-hidden flex-shrink-0 shadow-inner">
              <img
                src="/images/mini-truck.jpg"
                alt="Truck"
                className="w-full h-full object-cover rounded-full"
              />
            </span>

            <span className="text-3xl sm:text-5xl md:text-6xl font-black text-neutral-900 dark:text-white tracking-tight transition-colors">
              Sri Ponniamman Trans
            </span>

            {/* Pill Image 2 */}
            <span className="inline-flex items-center p-1 bg-neutral-100 dark:bg-[#161a22] rounded-full border border-neutral-300 dark:border-neutral-700 h-10 sm:h-14 md:h-16 w-20 sm:w-28 md:w-36 overflow-hidden flex-shrink-0 shadow-inner">
              <img
                src="/images/mini-ship.jpg"
                alt="Ship"
                className="w-full h-full object-cover rounded-full"
              />
            </span>

            <span className="text-3xl sm:text-5xl md:text-6xl font-black text-neutral-900 dark:text-white tracking-tight transition-colors">
              Port-to-Port Logistics
            </span>

            {/* Pill Image 3 */}
            <span className="inline-flex items-center p-1 bg-neutral-100 dark:bg-[#161a22] rounded-full border border-neutral-300 dark:border-neutral-700 h-10 sm:h-14 md:h-16 w-20 sm:w-28 md:w-36 overflow-hidden flex-shrink-0 shadow-inner">
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
