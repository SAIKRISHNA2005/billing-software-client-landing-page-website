"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Layers } from "lucide-react";

interface StepItem {
  id: string;
  stepNumber: string;
  title: string;
  tag: string;
  desc: string;
  image: string;
  badge: string;
  details: string[];
}

const steps: StepItem[] = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "Order Placement & Terminal Booking",
    tag: "Phase 1: Booking",
    desc: "Instant shipping line space allocation, EDI booking registration, and container yard delivery orders generated seamlessly.",
    image: "/images/cargo-terminal.jpg",
    badge: "Digital Port Dispatch",
    details: [
      "Automated e-EIR gate pass generation",
      "Immediate container equipment allocation",
      "Direct customs house agent (CHA) notification",
    ],
  },
  {
    id: "step-2",
    stepNumber: "02",
    title: "Route Planning & Port Coordination",
    tag: "Phase 2: Operations",
    desc: "Expert port dispatch team evaluates berth arrival schedules, gate-in cutoffs, and optimal inland highway transport corridors.",
    image: "/images/team-crew.jpg",
    badge: "Operations Center",
    details: [
      "Congestion-free corridor routing",
      "Heavy axle weight compliance checking",
      "Dedicated 24/7 port marshaling desk",
    ],
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "Transportation & Container Haulage",
    tag: "Phase 3: Transit",
    desc: "High-capacity container trailers equipped with tamper-proof electronic seals transport 20ft & 40ft boxes safely from CFS to port.",
    image: "/images/mini-truck.jpg",
    badge: "Fleet Dispatch",
    details: [
      "Multi-axle pneumatic suspension trailers",
      "Licensed hazardous & reefer handling drivers",
      "Zero-delay port gate-in marshaling",
    ],
  },
  {
    id: "step-4",
    stepNumber: "04",
    title: "Tracking & Satellite Telemetry",
    tag: "Phase 4: Telemetry",
    desc: "Live GPS tracking and IoT telemetry sensors feed minute-by-minute status, container temperature, and geofence alerts directly to clients.",
    image: "/images/smart-tracking.jpg",
    badge: "Live Telemetry",
    details: [
      "Real-time GPS vessel and truck tracking",
      "Automated WhatsApp & email milestone alerts",
      "Electronic proof of delivery (e-POD)",
    ],
  },
  {
    id: "step-5",
    stepNumber: "05",
    title: "Berth Delivery & Gantry Crane Hoist",
    tag: "Phase 5: Berth Loading",
    desc: "Direct delivery to container terminal berths, crane hoist onto international container vessels, and verified Bill of Lading release.",
    image: "/images/crane-container.jpg",
    badge: "Vessel Berthing",
    details: [
      "Direct vessel crane loading confirmation",
      "Final customs export shipping bill seal",
      "End-to-end documentation reconciliation",
    ],
  },
];

export default function HowWeWorkSticky() {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll listener to update active step as user scrolls through the sticky section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // If section is in view
      if (rect.top <= viewportHeight * 0.4 && rect.bottom >= viewportHeight * 0.2) {
        stepRefs.current.forEach((ref, index) => {
          if (!ref) return;
          const stepRect = ref.getBoundingClientRect();
          // Check if this step is currently near the center of the viewport
          if (stepRect.top <= viewportHeight * 0.55 && stepRect.bottom >= viewportHeight * 0.25) {
            setActiveStepIdx(index);
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleStepClick = (index: number) => {
    setActiveStepIdx(index);
    stepRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const currentStep = steps[activeStepIdx];

  return (
    <section
      id="workflow"
      ref={containerRef}
      className="relative py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto transition-colors"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#161a22] text-neutral-700 dark:text-neutral-300 text-xs font-semibold mb-3 shadow-xs border border-neutral-200 dark:border-neutral-700/80 transition-colors">
          <span className="text-orange-500">🚢</span>
          <span>How We Work</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-[#ff5c00] tracking-tight leading-tight transition-colors">
          Synchronized Port Logistics
          <br />
          From Order to Berth
        </h2>
        <p className="text-neutral-500 dark:text-black text-xs sm:text-sm mt-3 transition-colors">
          Scroll through our 5-phase operations pipeline. Experience how Sri Ponniamman Trans manages high-volume container movements with zero-demurrage precision.
        </p>
      </div>

      {/* Grid: Left Sticky Visual + Right Step Triggers */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
        {/* ================= LEFT STICKY CONTAINER (CHANGES IMAGE PER STEP) ================= */}
        <div className="lg:col-span-6 lg:sticky lg:top-24 z-20">
          <div className="bg-neutral-900 rounded-[32px] overflow-hidden p-3 shadow-2xl border border-neutral-800">
            {/* Main Dynamic Image Display */}
            <div className="relative rounded-[26px] overflow-hidden h-[340px] sm:h-[420px] md:h-[460px] w-full">
              {steps.map((s, idx) => (
                <div
                  key={s.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeStepIdx === idx ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-95 pointer-events-none"
                  }`}
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover object-center"
                    priority={idx === 0}
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35" />
                </div>
              ))}

              {/* Dynamic Badge Overlays */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-orange-500 text-white text-[11px] font-extrabold tracking-wider uppercase shadow-md">
                  Step {currentStep.stepNumber} of 05
                </span>
                <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] font-medium border border-white/20">
                  {currentStep.badge}
                </span>
              </div>

              {/* Dynamic Bottom Info Overlay */}
              <div className="absolute bottom-5 left-5 right-5 z-20 text-white">
                <div className="text-[11px] uppercase tracking-widest text-orange-400 font-bold mb-1">
                  {currentStep.tag}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1.5 leading-snug">
                  {currentStep.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-neutral-300 font-medium">Sri Ponniamman Trans Verified Workflow</span>
                </div>
              </div>
            </div>

            {/* Bottom Progress Bar */}
            <div className="p-3 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono text-neutral-300">Phase {activeStepIdx + 1} / 5</span>
              <div className="flex items-center gap-1.5">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleStepClick(i)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      activeStepIdx === i ? "w-8 bg-orange-500" : "w-3 bg-neutral-700 hover:bg-neutral-600"
                    }`}
                    aria-label={`Jump to step ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SCROLLABLE STEP CARDS ================= */}
        <div className="lg:col-span-6 space-y-12 sm:space-y-16 py-4">
          {steps.map((s, idx) => {
            const isActive = activeStepIdx === idx;

            return (
              <div
                key={s.id}
                ref={(el) => {
                  stepRefs.current[idx] = el;
                }}
                onClick={() => handleStepClick(idx)}
                className={`p-6 sm:p-8 rounded-[28px] transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? "bg-white dark:bg-[#161a22] text-neutral-900 dark:text-white border-orange-500 shadow-xl ring-2 ring-orange-500/20 transform scale-[1.02]"
                    : "bg-white/80 dark:bg-[#13161c]/80 text-neutral-700 dark:text-neutral-300 border-neutral-200/90 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 opacity-70 hover:opacity-100"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm transition-all ${
                        isActive ? "bg-orange-500 text-white shadow-md shadow-orange-500/30" : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                      }`}
                    >
                      {s.stepNumber}
                    </span>
                    <div>
                      <span className="text-[11px] uppercase font-bold text-orange-600 dark:text-orange-400 tracking-wider block">
                        {s.tag}
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        {s.title}
                      </h4>
                    </div>
                  </div>

                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                      isActive ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60" : "text-neutral-400 dark:text-neutral-500"
                    }`}
                  >
                    {isActive ? "Active Phase" : `Step ${idx + 1}`}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
                  {s.desc}
                </p>

                {/* Sub-features list */}
                <div className="space-y-2 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                  {s.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 font-medium">
                      <CheckCircle2
                        className={`w-4 h-4 flex-shrink-0 ${
                          isActive ? "text-orange-500" : "text-neutral-400 dark:text-neutral-500"
                        }`}
                      />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
