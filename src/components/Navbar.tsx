"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenTracking: () => void;
}

export default function Navbar({ onOpenQuote, onOpenTracking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  return (
    <>
      <header className="relative z-30 pt-4 md:pt-6 px-4 sm:px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 md:w-11 md:h-11 rounded-2xl bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/30 border border-white/25">
            <span className="font-black text-white text-sm md:text-base tracking-wider">SPT</span>
          </div>
          <div>
            <span className="font-extrabold text-white text-lg md:text-xl tracking-tight block leading-none drop-shadow-sm">
              SRI PONNIAMMAN <span className="text-orange-400">TRANS</span>
            </span>
            <span className="text-[10px] md:text-[11px] text-neutral-300 font-medium tracking-wider uppercase block mt-1">
              Port & Container Logistics
            </span>
          </div>
        </div>

        {/* Center Floating Pill Navigation - EXACT MATCH TO UPLOADED IMAGE 2 */}
        <nav className="hidden lg:flex items-center bg-white rounded-full p-1.5 shadow-md border border-neutral-100">
          <a
            href="#home"
            className="px-5 py-1.5 text-xs font-bold rounded-full bg-black text-white shadow-sm transition-all"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-4 py-1.5 text-xs font-medium text-neutral-600 hover:text-black transition-colors"
          >
            About Us
          </a>
          <a
            href="#services"
            className="px-4 py-1.5 text-xs font-medium text-neutral-600 hover:text-black transition-colors"
          >
            Service
          </a>
          <a
            href="#why-us"
            className="px-4 py-1.5 text-xs font-medium text-neutral-600 hover:text-black transition-colors"
          >
            Insight
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 text-xs font-medium text-neutral-600 hover:text-black transition-colors"
          >
            Contact Us
          </a>
        </nav>

        {/* Right Action Icons: Language Pill + Hamburger Menu (Solid White matching Image 1) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdown(!langDropdown)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 text-xs font-bold shadow-md border border-neutral-100 transition-all cursor-pointer"
            >
              <span>{selectedLang}</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-800" />
            </button>
            {langDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-2xl shadow-xl py-2 z-50 border border-neutral-100 text-xs font-medium">
                {["EN - English", "TA - தமிழ்", "HI - हिन्दी", "AR - العربية"].map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setSelectedLang(l.slice(0, 2));
                      setLangDropdown(false);
                    }}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-orange-50 text-neutral-800 hover:text-orange-600 transition-colors cursor-pointer"
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger Menu Button (Solid White matching Image 1) */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-100 shadow-md flex items-center justify-center transition-all cursor-pointer"
            aria-label="Toggle Menu"
          >
            <Menu className="w-4 h-4 md:w-5 md:h-5 text-neutral-900" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-xs h-full p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold text-xs">
                    SPT
                  </div>
                  <span className="font-bold text-neutral-900 text-xs">SRI PONNIAMMAN TRANS</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="py-6 flex flex-col gap-4 text-sm font-semibold text-neutral-800">
                <a
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-orange-600 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-orange-600 transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-orange-600 transition-colors"
                >
                  Service
                </a>
                <a
                  href="#workflow"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-orange-600 transition-colors"
                >
                  Process Workflow
                </a>
                <a
                  href="#why-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-orange-600 transition-colors"
                >
                  Insight
                </a>
                <a
                  href="#testimonials"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-orange-600 transition-colors"
                >
                  Client Reviews
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-orange-600 transition-colors"
                >
                  Contact Us
                </a>
              </nav>

              <div className="space-y-2.5 pt-4 border-t border-neutral-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-2.5 rounded-full bg-orange-500 text-white font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer"
                >
                  Get a Quote
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTracking();
                  }}
                  className="w-full py-2.5 rounded-full bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Track Container
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 text-[11px] text-neutral-500 space-y-1">
              <div>Sri Ponniamman Trans Logistics</div>
              <div>Direct: +91 94440 12345</div>
              <div>Email: ops@sriponniamman.com</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
