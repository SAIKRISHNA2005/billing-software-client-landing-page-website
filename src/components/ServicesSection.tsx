"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Ship,
  Truck,
  ArrowUpRight,
  ChevronDown,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Compass,
  Boxes,
  Zap,
} from "lucide-react";

interface ServicesSectionProps {
  onOpenQuote: () => void;
  onOpenTracking: () => void;
}

export default function ServicesSection({ onOpenQuote, onOpenTracking }: ServicesSectionProps) {
  const [activeAccordion, setActiveAccordion] = useState("02");

  const servicesData = [
    {
      id: "01",
      category: "ocean",
      title: "Continental Ocean Freight & FCL/LCL Lines",
      subtitle: "Direct container shipping connections across global maritime lanes",
      description:
        "Full Container Load (FCL) & Less than Container Load (LCL) consolidation connecting Chennai Port, Tuticorin, Nhava Sheva to international trade gateways with guaranteed vessel space allocation.",
      features: [
        "20ft, 40ft & High-Cube container allocation",
        "Direct shipping line berth coordination",
        "Reefer temperature monitoring & hazardous cargo handling",
      ],
      tag: "Ocean Freight",
    },
    {
      id: "02",
      category: "haulage",
      title: "Express Port Delivery & Container Haulage",
      subtitle: "Fast, reliable, and secure port-to-door container evacuation",
      description:
        "Time-critical port clearance and rapid inland transport. Our heavy-duty tractor-trailers operate 24/7 between marine container terminals, bonded container freight stations (CFS), and inland production corridors.",
      features: [
        "Priority green-channel customs clearance",
        "Guaranteed same-day port evacuation",
        "Dedicated GPS-monitored high-speed trailers",
      ],
      tag: "Priority Haulage",
    },
    {
      id: "03",
      category: "customs",
      title: "Freight Forwarding & Customs House Brokerage",
      subtitle: "Certified port EDI filing, tariff assessment & bill of lading dispatch",
      description:
        "Expert customs house agent (CHA) documentation ensuring prompt cargo release. Complete clearance paperwork, duty drawback claims, cargo insurance, and seamless compliance with port regulations.",
      features: [
        "ICEGATE & port terminal EDI integration",
        "Bonded cargo transit & customs escorting",
        "Duty tariff classification & advisory",
      ],
      tag: "Compliance",
    },
    {
      id: "04",
      category: "cfs",
      title: "Supply Chain & Container Freight Station (CFS) Buffering",
      subtitle: "High-security yard storage, container stuffing, de-stuffing & fleet telematics",
      description:
        "Secure buffer yard facilities equipped with modern gantry reach stackers, covered transit sheds, automated electronic gate passes (e-EIR), and real-time container inventory visibility.",
      features: [
        "CCTV-monitored 24/7 container yards",
        "Stuffing, de-stuffing & cargo lashing services",
        "Electronic gate-in & gate-out tracking",
      ],
      tag: "Yard Management",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 bg-white border-y border-neutral-200">
      <div className="max-w-7xl mx-auto">
        {/* ================= SECTION HEADER (MOVEXA INSPIRED) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-medium mb-3">
              <span className="text-orange-500">✈</span>
              <span>Services & Support</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.15]">
              FAST PRECISION CARGO
              <br />
              DELIVERY FOR EVERYONE
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm mt-3 max-w-xl">
              Sri Ponniamman Trans provides complete container freight solutions from berth unloading to bonded CFS yard management and final inland factory haulage.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:justify-end gap-3">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-orange-500/25 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Explore Services</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenTracking}
              className="px-6 py-3.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
            >
              Track Cargo
            </button>
          </div>
        </div>

        {/* ================= 2 HERO FEATURE TILES (MOVEXA SPLIT CARDS) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: Charter Air & Priority Freight */}
          <div className="relative rounded-[32px] overflow-hidden min-h-[380px] sm:min-h-[420px] p-8 flex flex-col justify-between text-white shadow-xl group border border-neutral-800/40">
            <Image
              src="/images/cargo-terminal.jpg"
              alt="Sri Ponniamman Trans Air Charter & Port Cargo"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/30" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider border border-white/20">
                Priority Air Cargo
              </span>
              <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Zap className="w-4 h-4 text-orange-400" />
              </div>
            </div>

            <div className="relative z-10">
              <div className="text-xs uppercase font-extrabold text-orange-400 tracking-wider mb-1">Time Critical</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                CHARTER AIR FREIGHT
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 max-w-md mb-5 leading-relaxed">
                Expedited air charter connections for high-value and perishable cargo coordinated directly with international tarmac logistics.
              </p>
              <button
                onClick={onOpenQuote}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
              >
                <span>Book a Shipment</span>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-900" />
              </button>
            </div>
          </div>

          {/* Card 2: Continental Ocean Freight */}
          <div className="relative rounded-[32px] overflow-hidden min-h-[380px] sm:min-h-[420px] p-8 flex flex-col justify-between text-white shadow-xl group border border-neutral-800/40">
            <Image
              src="/images/crane-container.jpg"
              alt="Sri Ponniamman Trans Continental Ocean Freight"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/30" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider border border-white/20">
                Ocean Lines
              </span>
              <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Ship className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="relative z-10">
              <div className="text-xs uppercase font-extrabold text-cyan-400 tracking-wider mb-1">Global Corridors</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                CONTINENTAL OCEAN FREIGHT
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 max-w-md mb-5 leading-relaxed">
                One customer can fill a full container load or book consolidated LCL cargo with scheduled vessel berthing and dedicated harbor tracking.
              </p>
              <button
                onClick={onOpenQuote}
                className="w-10 h-10 rounded-full bg-white hover:bg-orange-500 hover:text-white text-neutral-900 flex items-center justify-center shadow-md transition-all cursor-pointer"
                title="Explore Ocean Freight"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ================= INTERACTIVE ACCORDION CARDS ================= */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {servicesData.map((item) => {
            const isDarkActive = activeAccordion === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setActiveAccordion(item.id)}
                className={`rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden border ${
                  isDarkActive
                    ? "bg-[#111215] text-white border-neutral-800 shadow-xl"
                    : "bg-[#f8f9fa] text-neutral-900 border-neutral-200 hover:border-neutral-300 shadow-sm"
                }`}
              >
                <div className="p-4 sm:p-5 md:p-6 flex items-start sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-sm sm:text-base font-bold ${
                          isDarkActive ? "text-orange-400" : "text-orange-500"
                        }`}
                      >
                        {item.id}.
                      </span>
                      <h3 className="text-base sm:text-lg font-bold tracking-tight">{item.title}</h3>
                    </div>

                    {isDarkActive ? (
                      <div className="mt-2.5 pl-7 sm:pl-8">
                        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl">
                          {item.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.features.map((feat, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[11px] font-medium text-neutral-200 border border-white/10"
                            >
                              <CheckCircle2 className="w-3 h-3 text-orange-400" />
                              {feat}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="mt-1 pl-7 sm:pl-8 text-xs text-neutral-500 hidden sm:block">
                        {item.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="flex-shrink-0 self-center">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-transform ${
                        isDarkActive
                          ? "bg-white/10 text-white border border-white/20"
                          : "bg-white text-orange-500 border border-neutral-200"
                      }`}
                    >
                      {isDarkActive ? (
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-orange-500" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
