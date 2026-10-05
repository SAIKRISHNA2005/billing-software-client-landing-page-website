"use client";

import React from "react";
import Image from "next/image";
import { Truck } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 bg-white dark:bg-[#0c0e12] border-y border-neutral-200 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 dark:bg-[#161a22] text-neutral-700 dark:text-neutral-300 text-xs font-semibold mb-3 border border-neutral-200 dark:border-neutral-700/80 transition-colors">
            <span className="text-orange-500">✈</span>
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight transition-colors">
            Delivering Excellence Through
            <br />
            Reliability and Innovation
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-3 transition-colors">
            Trusted by global shipping conglomerates, export-import houses, and freight forwarders across India's maritime hubs.
          </p>
        </div>

        {/* 3 Visual Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Expert Logistics Team */}
          <div className="group relative rounded-[28px] overflow-hidden min-h-[380px] sm:min-h-[420px] shadow-md border border-neutral-200 dark:border-neutral-800 flex flex-col justify-end p-6 sm:p-7 transition-all duration-300 hover:shadow-xl">
            <Image
              src="/images/team-crew.jpg"
              alt="Expert Logistics Team"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">
                Expert Logistics Team
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Decades of experience in port container maneuvering, terminal customs, and high-precision ocean shipping dispatch.
              </p>
            </div>
          </div>

          {/* Card 2: Reliable Delivery */}
          <div className="group relative rounded-[28px] overflow-hidden min-h-[380px] sm:min-h-[420px] shadow-md border border-neutral-200 flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 hover:shadow-xl">
            <Image
              src="/images/warehouse-delivery.jpg"
              alt="Reliable Freight Facility Delivery"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />
            
            {/* Top Badge Icon */}
            <div className="relative z-10 flex justify-start">
              <div className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md">
                <Truck className="w-5 h-5 text-neutral-900" />
              </div>
            </div>

            {/* Bottom Overlay Text */}
            <div className="relative z-10">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">Reliable Delivery</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                From port deliveries to global freight, Sri Ponniamman Trans provides reliable, efficient, and
                technology-driven services that keep your business moving forward.
              </p>
            </div>
          </div>

          {/* Card 3: Smart Tracking */}
          <div className="group relative rounded-[28px] overflow-hidden min-h-[380px] sm:min-h-[420px] shadow-md border border-neutral-200 flex flex-col justify-end p-6 sm:p-7 transition-all duration-300 hover:shadow-xl">
            <Image
              src="/images/smart-tracking.jpg"
              alt="Sri Ponniamman Trans Real-Time Smart Tracking Telemetry"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/90 text-[10px] font-bold text-white uppercase tracking-wider mb-2">
                Live Telemetry
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">Smart Tracking</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Instant vessel position, port berth status, and mile-by-mile container tracking via real-time satellite telemetry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
