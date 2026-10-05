"use client";

import React from "react";

export default function PartnersMarquee() {
  const partners = [
    { name: "MAERSK", code: "MA" },
    { name: "MSC", code: "MS" },
    { name: "CMA CGM", code: "CM" },
    { name: "HAPAG-LLOYD", code: "HL" },
    { name: "COSCO", code: "CO" },
    { name: "DP WORLD", code: "DP" },
    { name: "ONE LINE", code: "ON" },
    { name: "EVERGREEN", code: "EV" },
  ];

  return (
    <section className="pt-12 pb-6 px-4 text-center max-w-7xl mx-auto transition-colors">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#161a22] text-neutral-600 dark:text-neutral-300 text-xs font-semibold mb-6 shadow-xs border border-neutral-200 dark:border-neutral-700/80 transition-colors">
        <span className="text-orange-500">✈</span>
        <span>Our Trusted Partner</span>
      </div>

      <div className="overflow-hidden relative max-w-5xl mx-auto py-2">
        <div className="animate-marquee flex items-center gap-10 sm:gap-14 opacity-75 dark:opacity-85 grayscale hover:grayscale-0 transition-all duration-300">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 flex-shrink-0 font-bold tracking-tight text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <div className="w-6 h-6 rounded-lg bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-800 dark:text-neutral-200 font-black">
                {partner.code}
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-wider">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
