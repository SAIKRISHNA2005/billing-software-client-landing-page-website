"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenTracking: () => void;
}

export default function Navbar({ onOpenQuote, onOpenTracking }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  return (
    <>
      <header className="relative z-30 pt-2.5 md:pt-3.5 px-3.5 sm:px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5 sm:gap-3">
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
        <nav className="hidden lg:flex items-center bg-white dark:bg-[#161a22]/95 rounded-full p-1.5 shadow-md border border-neutral-100 dark:border-neutral-700/80 transition-colors">
          <a
            href="#home"
            className="px-5 py-1.5 text-xs font-bold rounded-full bg-black text-white dark:bg-white dark:text-neutral-950 shadow-sm transition-all"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-4 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
          >
            About Us
          </a>
          <a
            href="#services"
            className="px-4 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
          >
            Service
          </a>
          <a
            href="#why-us"
            className="px-4 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
          >
            Insight
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
          >
            Contact Us
          </a>
        </nav>

        {/* Right Action Icons: Theme Toggle + Language Pill + Hamburger Menu */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Dark / Light Mode Toggle Button (Placed directly near/left to EN button) */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-100 shadow-md flex items-center justify-center transition-all cursor-pointer dark:bg-[#161a22] dark:hover:bg-[#202531] dark:border-neutral-700/80 dark:text-amber-400"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 text-neutral-800 transition-transform duration-300 hover:-rotate-12" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
            )}
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdown(!langDropdown)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 md:py-2 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 text-xs font-bold shadow-md border border-neutral-100 transition-all cursor-pointer dark:bg-[#161a22] dark:hover:bg-[#202531] dark:border-neutral-700/80 dark:text-white"
            >
              <span>{selectedLang}</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-800 dark:text-neutral-200" />
            </button>
            {langDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-[#161a22] rounded-2xl shadow-xl py-2 z-50 border border-neutral-100 dark:border-neutral-700 text-xs font-medium">
                {["EN - English", "TA - தமிழ்", "HI - हिन्दी", "AR - العربية"].map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setSelectedLang(l.slice(0, 2));
                      setLangDropdown(false);
                    }}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-orange-50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors cursor-pointer"
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
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-100 shadow-md flex items-center justify-center transition-all cursor-pointer dark:bg-[#161a22] dark:hover:bg-[#202531] dark:border-neutral-700/80 dark:text-white"
            aria-label="Toggle Menu"
          >
            <Menu className="w-4 h-4 md:w-5 md:h-5 text-neutral-900 dark:text-white" />
          </button>
        </div>
      </header>

      {/* Solid Widthy Navigation Modal (Centered in Middle, Horizontal / Wide Layout) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/75 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white dark:bg-[#12151c] text-neutral-900 dark:text-white w-full max-w-4xl md:max-w-5xl rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 md:p-8 shadow-2xl border border-neutral-200 dark:border-neutral-800 relative max-h-[92vh] overflow-y-auto transition-colors duration-300">
            {/* Header: Brand + Controls + Close */}
            <div className="flex items-center justify-between pb-5 border-b border-neutral-100 dark:border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 flex items-center justify-center text-white font-black text-sm shadow-md">
                  SPT
                </div>
                <div>
                  <span className="font-extrabold text-neutral-900 dark:text-white text-base sm:text-lg tracking-tight block leading-none">
                    SRI PONNIAMMAN <span className="text-orange-500">TRANS</span>
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400 font-medium tracking-wider uppercase block mt-1">
                    Port Haulage & Container Dispatch Hub
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-xs font-semibold text-neutral-800 dark:text-neutral-200 transition-colors cursor-pointer"
                >
                  {theme === "light" ? (
                    <>
                      <Moon className="w-3.5 h-3.5 text-neutral-700" />
                      <span className="hidden sm:inline">Dark</span>
                    </>
                  ) : (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      <span className="hidden sm:inline">Light</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-200 transition-colors cursor-pointer"
                  aria-label="Close Navigation"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Widthy Horizontal Navigation Grid */}
            <div className="py-6">
              <span className="text-[11px] uppercase font-bold text-neutral-400 dark:text-neutral-500 tracking-wider block mb-3">
                Quick Navigation
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  {
                    href: "#home",
                    title: "Home",
                    sub: "Port Terminal & Live Overview",
                    badge: "01",
                  },
                  {
                    href: "#about",
                    title: "About Us",
                    sub: "25+ Yrs & Container Enquiry",
                    badge: "02",
                  },
                  {
                    href: "#services",
                    title: "Services",
                    sub: "Ocean, Haulage & Customs",
                    badge: "03",
                  },
                  {
                    href: "#workflow",
                    title: "How We Work",
                    sub: "5-Phase Operations Pipeline",
                    badge: "04",
                  },
                  {
                    href: "#why-us",
                    title: "Insights & Fleet",
                    sub: "Zero-Demurrage Guarantee",
                    badge: "05",
                  },
                  {
                    href: "#testimonials",
                    title: "Client Reviews",
                    sub: "Verified Exporters & Importers",
                    badge: "06",
                  },
                  {
                    href: "#contact",
                    title: "Contact & Hub",
                    sub: "Chennai Live Map & Bento Grid",
                    badge: "07",
                  },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group p-3.5 rounded-2xl bg-neutral-50 dark:bg-[#1a1e27] hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 border border-neutral-200/70 dark:border-neutral-800 transition-all duration-200 flex flex-col justify-between cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-md bg-white dark:bg-[#12151c] text-neutral-600 dark:text-neutral-300 group-hover:bg-white/20 group-hover:text-white">
                        {item.badge}
                      </span>
                      <span className="text-orange-500 group-hover:text-white text-xs">→</span>
                    </div>
                    <div>
                      <div className="font-bold text-sm text-neutral-900 dark:text-white group-hover:text-white transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-neutral-500 dark:text-neutral-400 group-hover:text-white/80 transition-colors mt-0.5">
                        {item.sub}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Actions & Contacts Bar */}
            <div className="pt-5 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-[#ff5c00] hover:bg-[#e04f00] text-white font-bold text-xs shadow-md shadow-orange-500/20 transition-all cursor-pointer text-center"
                >
                  Book Container Enquiry
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTracking();
                  }}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-neutral-900 font-bold text-xs transition-all cursor-pointer text-center"
                >
                  Track Live Telemetry
                </button>
              </div>

              <div className="flex items-center gap-4 text-[11px] text-neutral-500 dark:text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Port Desk: <b className="text-neutral-800 dark:text-neutral-200">+91 94440 12345</b>
                </span>
                <span className="hidden md:inline text-neutral-300 dark:text-neutral-700">|</span>
                <span className="hidden md:inline">ops@sriponniammantrans.com</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
