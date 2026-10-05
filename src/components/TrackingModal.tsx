"use client";

import React, { useState } from "react";
import { X, Search } from "lucide-react";

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrackingModal({ isOpen, onClose }: TrackingModalProps) {
  const [trackingId, setTrackingId] = useState("");
  const [trackingResult, setTrackingResult] = useState<null | {
    id: string;
    origin: string;
    destination: string;
    vessel: string;
    status: string;
    eta: string;
  }>(null);

  if (!isOpen) return null;

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    setTrackingResult({
      id: trackingId.toUpperCase(),
      origin: "Port of Chennai (Container Terminal)",
      destination: "California, Port of Long Beach",
      vessel: "MSC EMERALD V.924W",
      status: "Container In Transit • Port Clearance Completed",
      eta: "Oct 06, 2026 - 14:30 GMT",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-[#161a22] rounded-[32px] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-100 dark:border-neutral-800 relative transition-colors duration-300">
        <button
          onClick={() => {
            onClose();
            setTrackingResult(null);
          }}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Live Telemetry</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-1">Track Container & Port Status</h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-5">
          Enter your Container Number, Bill of Lading (B/L), or Booking ID for Sri Ponniamman Trans tracking.
        </p>

        <form onSubmit={handleTrackSubmit} className="flex gap-2 mb-5">
          <input
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="e.g. SPTU-894210-9"
            className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white outline-none focus:border-orange-500"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-orange-500 hover:bg-neutral-800 dark:hover:bg-orange-600 text-white text-xs font-semibold flex items-center gap-1.5 flex-shrink-0 cursor-pointer transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Track</span>
          </button>
        </form>

        {!trackingResult && (
          <div className="p-4 bg-neutral-50 dark:bg-neutral-900/60 rounded-2xl border border-neutral-100 dark:border-neutral-800">
            <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 block mb-2">Sample tracking codes:</span>
            <div className="flex flex-wrap gap-2">
              {["SPTU-442109-1", "MAEU-982144-8", "MSCU-123490-5"].map((code) => (
                <button
                  key={code}
                  onClick={() => setTrackingId(code)}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#1a1f2c] border border-neutral-200 dark:border-neutral-700 text-[11px] font-mono text-neutral-700 dark:text-neutral-200 hover:border-orange-500 dark:hover:border-orange-500 transition-colors cursor-pointer"
                >
                  {code}
                </button>
              ))}
            </div>
          </div>
        )}

        {trackingResult && (
          <div className="p-4 rounded-2xl bg-orange-50/50 dark:bg-[#1a1816] border border-orange-200/70 dark:border-orange-500/30 space-y-3">
            <div className="flex items-center justify-between border-b border-orange-200/50 dark:border-neutral-800 pb-2.5">
              <div>
                <span className="text-[10px] uppercase font-bold text-neutral-400">Container Number</span>
                <div className="text-sm font-black font-mono text-neutral-900 dark:text-white">{trackingResult.id}</div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-[10px] uppercase tracking-wider">
                In Transit
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-[10px] text-neutral-400 font-medium">Origin</span>
                <div className="font-semibold text-neutral-800 dark:text-neutral-200">{trackingResult.origin}</div>
              </div>
              <div>
                <span className="text-[10px] text-neutral-400 font-medium">Destination</span>
                <div className="font-semibold text-neutral-800 dark:text-neutral-200">{trackingResult.destination}</div>
              </div>
              <div>
                <span className="text-[10px] text-neutral-400 font-medium">Assigned Vessel</span>
                <div className="font-semibold text-neutral-800 dark:text-neutral-200">{trackingResult.vessel}</div>
              </div>
              <div>
                <span className="text-[10px] text-neutral-400 font-medium">Estimated Arrival</span>
                <div className="font-semibold text-neutral-800 dark:text-neutral-200">{trackingResult.eta}</div>
              </div>
            </div>

            <div className="pt-2">
              <div className="flex items-center justify-between text-[10px] font-bold text-neutral-600 dark:text-neutral-400 mb-1.5">
                <span className="text-orange-600 dark:text-orange-400">Gate-In Cleared</span>
                <span className="text-orange-600 dark:text-orange-400">Berth Loaded</span>
                <span className="text-orange-600 dark:text-orange-400">Ocean Transit</span>
                <span className="text-neutral-400 dark:text-neutral-500">Destination</span>
              </div>
              <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-2 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-full w-3/4 rounded-full" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
