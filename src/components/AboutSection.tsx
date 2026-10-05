"use client";

import React, { useState } from "react";
import { Globe, Package, Send, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Container Port Haulage",
    containerType: "40ft High Cube (HC)",
    routeCorridor: "Chennai Port (CCTP) ➔ Inland Depot",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "Container Port Haulage",
        containerType: "40ft High Cube (HC)",
        routeCorridor: "Chennai Port (CCTP) ➔ Inland Depot",
        notes: "",
      });
    }, 5000);
  };

  return (
    <section id="about" className="py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column: Heading + Descriptive Text + 2 Sub-cards */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#161a22] text-neutral-700 dark:text-neutral-300 text-xs font-semibold mb-4 shadow-xs border border-neutral-200 dark:border-neutral-700/80 transition-colors">
              <span className="text-orange-500">✈</span>
              <span>About Sri Ponniamman Trans</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-[#ff5c00] tracking-tight leading-[1.18] mb-4 transition-colors">
              Your Trusted Partner
              <br />
              in Global Logistics
            </h2>

            <p className="text-neutral-600 dark:text-black text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mb-8 transition-colors">
              Sri Ponniamman Trans delivers more than shipments — we deliver confidence, precision, and smart
              technology that moves businesses forward across ports, borders, and continents.
            </p>
          </div>

          {/* Two Bottom Cards: Dark Black Card + Clean Light Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Dark Black Card */}
            <div className="p-6 rounded-[24px] bg-[#111215] dark:bg-[#161a22] text-white flex flex-col justify-between shadow-lg border border-neutral-800 dark:border-neutral-700/80 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-neutral-800 dark:bg-neutral-700/80 border border-neutral-700 flex items-center justify-center mb-6">
                <Package className="w-5 h-5 text-neutral-300" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  Delivering Excellence Every Mile
                </h3>
                <p className="text-xs text-neutral-400 dark:text-neutral-300 leading-relaxed">
                  We're committed to providing efficient, transparent, and technology-driven logistics services that
                  connect businesses globally with speed and reliability.
                </p>
              </div>
            </div>

            {/* Clean Light / Dark Card */}
            <div className="p-6 rounded-[24px] bg-white dark:bg-[#161a22] border border-neutral-200 dark:border-neutral-700/80 text-neutral-900 dark:text-white flex flex-col justify-between shadow-sm transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800/60 flex items-center justify-center mb-6">
                <Globe className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2 leading-snug">
                  Shaping the Future of Global Logistics
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Our vision is to build a smarter logistics ecosystem powered by innovation, sustainability, and
                  seamless global connectivity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Instant Cargo & Container Dispatch Enquiry Card */}
        <div className="lg:col-span-5 bg-white dark:bg-[#13161c] rounded-[30px] p-5 sm:p-7 border border-neutral-200 dark:border-neutral-800 shadow-md flex flex-col justify-between transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 text-[11px] font-bold border border-orange-200 dark:border-orange-800/60">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Port Dispatch Desk</span>
              </div>
              <span className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500">Fast Response</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white tracking-tight leading-snug">
              Priority Cargo & Container Dispatch Enquiry
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 mb-5">
              Submit your port movement enquiry for immediate vessel clearance, heavy trailers & bonded CFS tariffs.
            </p>

            {isSubmitted ? (
              <div className="py-10 px-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-neutral-900 dark:text-white">
                  Enquiry Transmitted Successfully!
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1.5 max-w-xs mx-auto">
                  Our Chennai Port dispatch supervisor has received your enquiry and will connect via phone/email within 15 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. R. Sundaram"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#1a1e27] border border-neutral-200 dark:border-neutral-700/80 text-xs font-medium text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 block mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sundaram@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#1a1e27] border border-neutral-200 dark:border-neutral-700/80 text-xs font-medium text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#1a1e27] border border-neutral-200 dark:border-neutral-700/80 text-xs font-medium text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 block mb-1">
                      Enquiry Service *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#1a1e27] border border-neutral-200 dark:border-neutral-700/80 text-xs font-medium text-neutral-900 dark:text-white outline-none focus:border-orange-500 transition-colors cursor-pointer"
                    >
                      <option value="Container Port Haulage">Container Port Haulage</option>
                      <option value="Ocean Freight (FCL / LCL)">Ocean Freight (FCL / LCL)</option>
                      <option value="Customs House Clearing (CHA)">Customs House Clearing (CHA)</option>
                      <option value="CFS Buffer Yard Storage">CFS Buffer Yard Storage</option>
                      <option value="Intermodal Road-Rail Transit">Intermodal Road-Rail Transit</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 block mb-1">
                      Container Type
                    </label>
                    <select
                      value={formData.containerType}
                      onChange={(e) => setFormData({ ...formData, containerType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#1a1e27] border border-neutral-200 dark:border-neutral-700/80 text-xs font-medium text-neutral-900 dark:text-white outline-none focus:border-orange-500 transition-colors cursor-pointer"
                    >
                      <option value="20ft Standard Dry">20ft Standard Dry</option>
                      <option value="40ft High Cube (HC)">40ft High Cube (HC)</option>
                      <option value="40ft Open Top / Flat Rack">40ft Open Top / Flat Rack</option>
                      <option value="Reefer Cold Chain Container">Reefer Cold Chain Container</option>
                      <option value="LCL Consolidated Cargo">LCL Consolidated Cargo</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 block mb-1">
                      Corridor / Destination
                    </label>
                    <input
                      type="text"
                      value={formData.routeCorridor}
                      onChange={(e) => setFormData({ ...formData, routeCorridor: e.target.value })}
                      placeholder="e.g. Chennai Port to Sriperumbudur"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#1a1e27] border border-neutral-200 dark:border-neutral-700/80 text-xs font-medium text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 block mb-1">
                    Shipment Details & Specifics
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. 5x 40ft HC automotive machinery, requires urgent customs clearance at CCTP Gate 2..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#1a1e27] border border-neutral-200 dark:border-neutral-700/80 text-xs font-medium text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none focus:border-orange-500 resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#ff5c00] hover:bg-[#e04f00] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Dispatch Enquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400">
            <span>Direct Dispatch: +91 94440 12345</span>
            <span className="font-semibold text-orange-600 dark:text-orange-400">Chennai Port EDI Hub</span>
          </div>
        </div>
      </div>
    </section>
  );
}
