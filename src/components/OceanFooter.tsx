"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Phone } from "lucide-react";

interface OceanFooterProps {
  onOpenQuote: () => void;
  onOpenTracking: () => void;
}

export default function OceanFooter({ onOpenQuote, onOpenTracking }: OceanFooterProps) {
  return (
    <footer className="pt-6 pb-6 px-3 sm:px-4 md:px-6 w-full max-w-[1800px] mx-auto bg-transparent transition-colors">
      {/* Top Rounded Info Card matching the uploaded footer reference design */}
      <div className="bg-white dark:bg-[#13161c] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 border border-neutral-200/90 dark:border-neutral-800 shadow-md transition-colors">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-8">
          {/* Column 1: Connect With Us & Socials */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white tracking-tight">
                Connect With Us
              </h3>
              <div className="w-6 h-6 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 mb-6">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-[#1a1e27] hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white text-neutral-700 dark:text-neutral-200 flex items-center justify-center transition-all cursor-pointer shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-[#1a1e27] hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white text-neutral-700 dark:text-neutral-200 flex items-center justify-center transition-all cursor-pointer shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="X"
                className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-[#1a1e27] hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white text-neutral-700 dark:text-neutral-200 flex items-center justify-center transition-all cursor-pointer shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-[#1a1e27] hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white text-neutral-700 dark:text-neutral-200 flex items-center justify-center transition-all cursor-pointer shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            {/* Email Address */}
            <div>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 block mb-1">Or email us at</span>
              <a
                href="mailto:connect@sriponniammantrans.com"
                className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                connect@sriponniammantrans.com
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Menu in EXACT 2-Column Parallel Grid */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-neutral-900 dark:text-white text-sm sm:text-base mb-4 tracking-tight">
              Menu
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-medium">
              <div>
                <a href="#about" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors block">
                  About us
                </a>
              </div>
              <div>
                <button
                  onClick={onOpenQuote}
                  className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-left cursor-pointer block"
                >
                  Solutions
                </button>
              </div>
              <div>
                <button
                  onClick={onOpenTracking}
                  className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-left cursor-pointer block"
                >
                  Live Tracking
                </button>
              </div>
              <div>
                <a href="#services" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors block">
                  Services
                </a>
              </div>
              <div>
                <a href="#testimonials" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors block">
                  Client Testimonial
                </a>
              </div>
              <div>
                <a href="#contact" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors block">
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Office Addresses & Direct Phones */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-neutral-900 dark:text-white text-sm sm:text-base mb-4 tracking-tight">
              Office
            </h4>
            
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
              Port Corridor Terminal Road, Rajaji Salai, Chennai Port,
              <br />
              Tamil Nadu 600001, India
            </p>

            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5">
              CFS Inland Buffer Depot, NH-48 Express Highway, Chennai Corridor, India
            </p>

            {/* Direct Phone Numbers matching reference icon layout */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-bold text-neutral-800 dark:text-neutral-200">
              <a
                href="tel:+919444012345"
                className="flex items-center gap-2 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-neutral-100 dark:bg-[#1a1e27] flex items-center justify-center text-neutral-700 dark:text-neutral-300">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+91 94440 12345</span>
              </a>

              <a
                href="tel:+914425220000"
                className="flex items-center gap-2 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-neutral-100 dark:bg-[#1a1e27] flex items-center justify-center text-neutral-700 dark:text-neutral-300">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+91 44 2522 0000</span>
              </a>
            </div>
          </div>
        </div>

        {/* Majestic Ocean Container Ship Panoramic Image matching the reference layout */}
        <div className="relative rounded-[26px] overflow-hidden h-64 sm:h-80 md:h-96 w-full shadow-lg border border-neutral-200 dark:border-neutral-800 mt-2">
          <Image
            src="/images/mini-ship.jpg"
            alt="Sri Ponniamman Trans Ocean Container Ship Sailing on Sea Waters"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
              <span className="text-sm font-extrabold tracking-wider uppercase">
                SRI PONNIAMMAN TRANS MARITIME FLEET
              </span>
            </div>
            <span className="text-xs text-neutral-300 font-medium">
              Connecting Ports Globally • 24/7 Berth Operations
            </span>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 mt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-500 dark:text-neutral-400">
          <div>
            © 2026 Sri Ponniamman Trans. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Terms of Carriage</a>
            <span>•</span>
            <span>Customs House Agent (CHA) Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
