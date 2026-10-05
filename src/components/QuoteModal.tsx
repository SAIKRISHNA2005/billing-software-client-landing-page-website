"use client";

import React, { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-[#161a22] rounded-[32px] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-100 dark:border-neutral-800 relative transition-colors duration-300">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
          <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">Fast Freight Estimate</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-1">Get an Instant Freight Quote</h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-5">
          Enter your container specifications for immediate tariffs and booking assistance from Sri Ponniamman Trans.
        </p>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-neutral-900 dark:text-white">Quote Request Submitted</h4>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-sm mx-auto">
              Our port dispatch team is reviewing your container parameters. A rate quote and customs estimate will be sent to your phone and email within 15 minutes.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 block mb-1">Origin Port / CFS</label>
                <input
                  type="text"
                  required
                  defaultValue="Chennai Port Terminal (CCTP)"
                  className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-800 dark:text-neutral-100 outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 block mb-1">Destination Port / Hub</label>
                <input
                  type="text"
                  required
                  defaultValue="California, Port of Long Beach"
                  className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-800 dark:text-neutral-100 outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 block mb-1">Container Size</label>
                <select className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-800 dark:text-neutral-100 outline-none focus:border-orange-500">
                  <option className="dark:bg-neutral-900">20ft Standard Box (TEU)</option>
                  <option className="dark:bg-neutral-900">40ft High Cube (FEU)</option>
                  <option className="dark:bg-neutral-900">40ft Reefer (Cold Storage)</option>
                  <option className="dark:bg-neutral-900">Flat Rack / Heavy Machinery</option>
                </select>
              </div>
              <div>
                <label className="text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 block mb-1">Gross Weight (Tons)</label>
                <input
                  type="number"
                  defaultValue="24"
                  className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-800 dark:text-neutral-100 outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 block mb-1">Contact Details</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-800 dark:text-neutral-100 outline-none focus:border-orange-500"
                />
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-800 dark:text-neutral-100 outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#ff5c00] hover:bg-[#e04f00] text-white text-xs sm:text-sm font-bold shadow-lg shadow-orange-500/30 transition-all cursor-pointer"
              >
                Generate Official Port Rate Quote
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
