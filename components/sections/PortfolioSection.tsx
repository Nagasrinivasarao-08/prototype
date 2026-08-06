"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimateIn, AnimateStagger, AnimateStaggerItem, fadeUp } from "@/components/ui/AnimateIn";

/* ── Project showcase data with real generated UI images ── */
const SHOWCASES = [
  {
    id: "renovo",
    title: "Renovo Financial — Salesforce Platform",
    subtitle: "Loan Management & CRM · Chicago, IL",
    bg: "from-slate-900 via-blue-950 to-slate-950",
    accent: "#3B82F6",
    image: "/images/renovo_fintech_ui.png",
  },
  {
    id: "brokerengine",
    title: "ByBox & BrokerEngine — Field & Mortgage Apps",
    subtitle: "Product Engineering & Logistics · Australia & UK",
    bg: "from-blue-700 via-indigo-900 to-slate-950",
    accent: "#60A5FA",
    image: "/images/bybox_logistics_ui.png",
  },
  {
    id: "skitravel",
    title: "Ski Travel & JacTravel — Booking Platform",
    subtitle: "Web Application & Real-Time Engine · Europe",
    bg: "from-violet-800 via-purple-950 to-slate-950",
    accent: "#A78BFA",
    image: "/images/skitravel_booking_ui.png",
  },
  {
    id: "truninger",
    title: "Truninger AG — IoT Telemetry & Industrial AI",
    subtitle: "Industrial Telemetry & Sensor Dashboards · Switzerland",
    bg: "from-emerald-800 via-teal-950 to-slate-950",
    accent: "#34D399",
    image: "/images/truninger_iot_ui.png",
  },
];

/* ── Laptop mockup displaying full-color UI screenshot ── */
function LaptopMockup({ project }: { project: (typeof SHOWCASES)[0] }) {
  return (
    <div className="relative w-full max-w-[500px] mx-auto group-hover:scale-[1.02] transition-transform duration-300">
      {/* Laptop bezel */}
      <div className="rounded-t-2xl overflow-hidden border-[4px] border-slate-700 bg-slate-900 shadow-2xl">
        {/* Browser header bar */}
        <div className="h-7 bg-slate-800 px-3 flex items-center gap-2 border-b border-slate-700/80">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
          <div className="flex-1 max-w-[200px] mx-auto h-4 bg-slate-900/60 rounded-full flex items-center justify-center px-3">
            <span className="text-[9px] font-mono text-slate-400 truncate">
              https://app.aspire.tech/{project.id}
            </span>
          </div>
        </div>

        {/* Screen Content - Real image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Laptop base & notch */}
      <div className="relative h-3.5 bg-gradient-to-b from-slate-600 via-slate-700 to-slate-800 rounded-b-xl mx-4 shadow-lg border-t border-slate-500/30 flex items-center justify-center">
        <div className="w-16 h-1 bg-slate-900/60 rounded-full" />
      </div>
      <div className="h-1 bg-slate-900/40 rounded-b-full mx-12 blur-[1px]" />
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section id="work" className="py-20 lg:py-28 bg-[#F5F5F7] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered header */}
        <AnimateIn variants={fadeUp} className="text-center mb-14 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Our Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Still curious about us?{" "}
            <span className="text-brand-600 font-medium">Our work speaks for itself.</span>
          </p>
        </AnimateIn>

        {/* 2-column showcase grid */}
        <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.15}>
          {SHOWCASES.map((project) => (
            <AnimateStaggerItem key={project.id} variants={fadeUp}>
            <div
              key={project.id}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${project.bg} p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[420px] sm:min-h-[460px] group border border-slate-800/50 shadow-xl`}
            >
              {/* Decorative background glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ background: project.accent }}
              />

              {/* Laptop Showcase */}
              <div className="relative z-10 my-auto">
                <LaptopMockup project={project} />
              </div>

              {/* Title overlay */}
              <div className="relative z-10 mt-6 pt-4 border-t border-white/10 text-white flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold tracking-tight">{project.title}</h3>
                  <p className="text-xs text-white/70 font-sans mt-0.5">{project.subtitle}</p>
                </div>
                <span className="shrink-0 text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/20 backdrop-blur-sm">
                  View Case Study
                </span>
              </div>
            </div>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>

      </div>
    </section>
  );
}
