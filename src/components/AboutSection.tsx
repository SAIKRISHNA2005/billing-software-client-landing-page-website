"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowDownUp, Globe, Package } from "lucide-react";

export default function AboutSection() {
  const [transferFrom, setTransferFrom] = useState("Port of Chennai (CCTP) - India");
  const [transferTo, setTransferTo] = useState("California, Port of Long Beach - USA");
  const [containerType, setContainerType] = useState("40ft High Cube");

  const handleSwapRoute = () => {
    const temp = transferFrom;
    setTransferFrom(transferTo);
    setTransferTo(temp);
  };

  return (
    <section id="about" className="py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column: Heading + Descriptive Text + 2 Sub-cards */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-neutral-700 text-xs font-medium mb-4 shadow-xs border border-neutral-200">
              <span className="text-orange-500">✈</span>
              <span>About Sri Ponniamman Trans</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.18] mb-4">
              Your Trusted Partner
              <br />
              in Global Logistics
            </h2>

            <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mb-8">
              Sri Ponniamman Trans delivers more than shipments — we deliver confidence, precision, and smart
              technology that moves businesses forward across ports, borders, and continents.
            </p>
          </div>

          {/* Two Bottom Cards: Dark Black Card + Clean Light Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Dark Black Card */}
            <div className="p-6 rounded-[24px] bg-[#111215] text-white flex flex-col justify-between shadow-lg border border-neutral-800">
              <div className="w-10 h-10 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-6">
                <Package className="w-5 h-5 text-neutral-300" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  Delivering Excellence Every Mile
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  We're committed to providing efficient, transparent, and technology-driven logistics services that
                  connect businesses globally with speed and reliability.
                </p>
              </div>
            </div>

            {/* Clean Light Card */}
            <div className="p-6 rounded-[24px] bg-white border border-neutral-200 text-neutral-900 flex flex-col justify-between shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center mb-6">
                <Globe className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-base font-bold text-neutral-900 mb-2 leading-snug">
                  Shaping the Future of Global Logistics
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Our vision is to build a smarter logistics ecosystem powered by innovation, sustainability, and
                  seamless global connectivity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Route / Transfer Estimator Card */}
        <div className="lg:col-span-5 bg-white rounded-[30px] p-5 sm:p-6 border border-neutral-200 shadow-md flex flex-col justify-between">
          <div>
            {/* Transfer From Dropdown Box */}
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 transition-all hover:border-neutral-300">
              <label className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
                Transfer From
              </label>
              <div className="flex items-center justify-between">
                <select
                  value={transferFrom}
                  onChange={(e) => setTransferFrom(e.target.value)}
                  className="bg-transparent text-xs sm:text-sm font-semibold text-neutral-800 outline-none w-full cursor-pointer"
                >
                  <option value="Port of Chennai (CCTP) - India">Port of Chennai (CCTP) - India</option>
                  <option value="Tuticorin Port (VOCPT) - India">Tuticorin Port (VOCPT) - India</option>
                  <option value="Nhava Sheva (JNPT) - India">Nhava Sheva (JNPT) - India</option>
                  <option value="Mundra Port Terminal - India">Mundra Port Terminal - India</option>
                  <option value="Singapore Harbor">Singapore Harbor - SG</option>
                </select>
              </div>
            </div>

            {/* Center Animated Swap Button */}
            <div className="relative my-2.5 flex justify-center">
              <button
                onClick={handleSwapRoute}
                className="w-9 h-9 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center shadow-md shadow-orange-500/30 transition-all transform hover:rotate-180 duration-300 cursor-pointer"
                title="Swap Origin & Destination"
              >
                <ArrowDownUp className="w-4 h-4" />
              </button>
            </div>

            {/* Transfer To Dropdown Box */}
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 transition-all hover:border-neutral-300">
              <label className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
                Transfer To
              </label>
              <div className="flex items-center justify-between">
                <select
                  value={transferTo}
                  onChange={(e) => setTransferTo(e.target.value)}
                  className="bg-transparent text-xs sm:text-sm font-semibold text-neutral-800 outline-none w-full cursor-pointer"
                >
                  <option value="California, Port of Long Beach - USA">California, Port of Long Beach - USA</option>
                  <option value="Dubai, Port of Jebel Ali - UAE">Dubai, Port of Jebel Ali - UAE</option>
                  <option value="Rotterdam Port Terminal - Netherlands">Rotterdam Port Terminal - Netherlands</option>
                  <option value="Hamburg Port - Germany">Hamburg Port - Germany</option>
                  <option value="Singapore Harbor Jurong">Singapore Harbor Jurong</option>
                </select>
              </div>
            </div>

            {/* Container Type Pills */}
            <div className="mt-4">
              <label className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block mb-2">
                Container Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["20ft Standard", "40ft High Cube", "Reefer Cold Chain", "Flat Rack Heavy"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setContainerType(c)}
                    className={`py-2 px-3 rounded-xl text-[11px] font-semibold transition-all border text-left cursor-pointer ${
                      containerType === c
                        ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                        : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Image in Card: Cargo Terminal & Airplane / Truck */}
          <div className="mt-5 rounded-2xl overflow-hidden relative h-40 sm:h-48 border border-neutral-100 shadow-inner">
            <Image
              src="/images/cargo-terminal.jpg"
              alt="Sri Ponniamman Trans Cargo Terminal & Fleet"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
              <span className="text-xs font-bold tracking-wide flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Sri Ponniamman Cargo Hub
              </span>
              <span className="text-[10px] bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full font-medium">
                24/7 Operations
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
