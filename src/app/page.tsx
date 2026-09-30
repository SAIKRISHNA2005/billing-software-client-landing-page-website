"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import PartnersMarquee from "@/components/PartnersMarquee";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowWeWorkSticky from "@/components/HowWeWorkSticky";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import TickerMarquee from "@/components/TickerMarquee";
import OceanFooter from "@/components/OceanFooter";
import QuoteModal from "@/components/QuoteModal";
import TrackingModal from "@/components/TrackingModal";

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [trackingModalOpen, setTrackingModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#eaecf0] text-neutral-900 selection:bg-orange-500 selection:text-white">
      {/* 1. Hero Section (Standalone rounded card with proper window spacing & no underwhite) */}
      <Hero
        onOpenQuote={() => setQuoteModalOpen(true)}
        onOpenTracking={() => setTrackingModalOpen(true)}
      />

      {/* 2. Trusted Partners Marquee */}
      <PartnersMarquee />

      {/* 3. About Sri Ponniamman Trans & Port Transfer Route Calculator */}
      <AboutSection />

      {/* 4. Revamped Services Section ("Fast Precision Cargo Delivery For Everyone") */}
      <ServicesSection
        onOpenQuote={() => setQuoteModalOpen(true)}
        onOpenTracking={() => setTrackingModalOpen(true)}
      />

      {/* 5. "How We Work" Sticky Scroll Experience (Image changes per step upon scrolling) */}
      <HowWeWorkSticky />

      {/* 6. Why Choose Us (3-Card Visual Showcase) */}
      <WhyChooseUs />

      {/* 7. Client Testimonials (Flanking side avatars & flat clean card with swiping animation) */}
      <TestimonialsSection />

      {/* 8. Contact Us Section (Live Chennai Port Map & Container Inquiry Form) */}
      <ContactSection />

      {/* 9. Giant Moving Ticker Marquee */}
      <TickerMarquee />

      {/* 10. Ocean Ship Footer (Panoramic container ship on open sea & clean contact header) */}
      <OceanFooter
        onOpenQuote={() => setQuoteModalOpen(true)}
        onOpenTracking={() => setTrackingModalOpen(true)}
      />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
      <TrackingModal
        isOpen={trackingModalOpen}
        onClose={() => setTrackingModalOpen(false)}
      />
    </main>
  );
}
