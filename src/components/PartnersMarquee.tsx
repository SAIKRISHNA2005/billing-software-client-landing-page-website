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
    <section className="pt-12 pb-6 px-4 text-center max-w-7xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-neutral-600 text-xs font-medium mb-6 shadow-xs border border-neutral-200">
        <span className="text-orange-500">✈</span>
        <span>Our Trusted Partner</span>
      </div>

      <div className="overflow-hidden relative max-w-5xl mx-auto py-2">
        <div className="animate-marquee flex items-center gap-10 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 flex-shrink-0 font-bold tracking-tight text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <div className="w-6 h-6 rounded-lg bg-neutral-200 flex items-center justify-center text-[10px] text-neutral-800 font-black">
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
