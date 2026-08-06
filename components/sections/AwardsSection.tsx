"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimateIn, AnimateStagger, AnimateStaggerItem, fadeUp } from "@/components/ui/AnimateIn";

/* ── Tech cloud tags for middle card ── */
const TECH_TAGS = [
  { label: "Salesforce CRM",       x: "8%",   y: "12%" },
  { label: "Cloud & Azure",        x: "55%",  y: "6%"  },
  { label: ".NET / C#",            x: "72%",  y: "22%" },
  { label: "React & Next.js",      x: "60%",  y: "42%" },
  { label: "Mobile iOS & Android", x: "4%",   y: "42%" },
  { label: "Microsoft Dynamics",   x: "18%",  y: "62%" },
  { label: "SQL & PostgreSQL",     x: "60%",  y: "64%" },
  { label: "API Integrations",     x: "6%",   y: "80%" },
  { label: "AppExchange Apps",     x: "54%",  y: "83%" },
];

export function AwardsSection() {
  return (
    <section id="achievements" className="py-20 lg:py-28 bg-[#F5F5F7] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimateIn variants={fadeUp} className="text-center mb-14 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Our Achievements
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans max-w-xl mx-auto leading-relaxed">
            Curious about what we&apos;ve accomplished?{" "}
            <span className="text-brand-600 font-medium">Let our track record speak</span>{" "}
            for itself.
          </p>
        </AnimateIn>

        {/* 3-card grid */}
        <AnimateStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>

          {/* ── Card 1: Projects Delivered ── */}
          <AnimateStaggerItem variants={fadeUp}>
            <motion.div
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col h-full"
              whileHover={{ y: -6, boxShadow: "0 16px 40px -12px rgba(0,0,0,0.12)" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {/* Visual */}
              <div className="flex-1 bg-gradient-to-br from-slate-50 to-blue-50 p-6 flex flex-col items-start justify-end min-h-[220px] relative overflow-hidden">
                {/* Dashboard mockup */}
                <div className="absolute top-6 left-6 right-6 bg-white rounded-xl shadow-md p-4 border border-slate-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2.5 bg-blue-100 rounded w-3/4" />
                    <div className="h-2.5 bg-slate-100 rounded w-1/2" />
                    <div className="flex gap-2 mt-3">
                      <motion.div
                        className="h-14 w-1/4 bg-blue-200 rounded origin-bottom"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ alignSelf: "flex-end" }}
                      />
                      <motion.div
                        className="h-10 w-1/4 bg-blue-300 rounded origin-bottom"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{ alignSelf: "flex-end" }}
                      />
                      <motion.div
                        className="h-16 w-1/4 bg-blue-500 rounded origin-bottom"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        style={{ alignSelf: "flex-end" }}
                      />
                      <motion.div
                        className="h-12 w-1/4 bg-blue-400 rounded origin-bottom"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        style={{ alignSelf: "flex-end" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Body */}
              <div className="p-6 space-y-2">
                <p className="text-2xl font-display font-bold text-slate-900">1,000+ Projects Delivered</p>
                <p className="text-sm text-brand-600 font-sans font-medium leading-relaxed">
                  Custom software, CRM, mobile, and enterprise platforms shipped across{" "}
                  <span className="text-blue-600 underline decoration-dotted">12+ countries</span>{" "}
                  since 2007.
                </p>
              </div>
            </motion.div>
          </AnimateStaggerItem>

          {/* ── Card 2: 18+ Years / Tech Expertise ── */}
          <AnimateStaggerItem variants={fadeUp}>
            <motion.div
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col h-full"
              whileHover={{ y: -6, boxShadow: "0 16px 40px -12px rgba(0,0,0,0.12)" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {/* Visual — floating tech tag cloud */}
              <div className="flex-1 relative min-h-[220px] bg-[#F8FAFC] overflow-hidden">
                {/* Center circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center">
                    <span className="text-[10px] font-semibold text-slate-500 text-center leading-tight px-1">
                      Our Expert<br />Team
                    </span>
                  </div>
                </div>
                {/* Tech tags floating */}
                {TECH_TAGS.map((tag, tIdx) => (
                  <motion.span
                    key={tag.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: tIdx * 0.05 + 0.2, duration: 0.3 }}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="absolute text-[10px] font-mono font-medium text-slate-700 bg-white border border-slate-200 px-2 py-0.5 rounded-full shadow-xs whitespace-nowrap cursor-default"
                    style={{ left: tag.x, top: tag.y }}
                  >
                    {tag.label}
                  </motion.span>
                ))}
              </div>
              {/* Body */}
              <div className="p-6 space-y-2">
                <p className="text-2xl font-display font-bold text-slate-900">18+ Years of Experience</p>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">
                  Bringing seasoned engineering expertise to every engagement — from initial architecture to long-term support.
                </p>
              </div>
            </motion.div>
          </AnimateStaggerItem>

          {/* ── Card 3: Global Growth / Scale ── */}
          <AnimateStaggerItem variants={fadeUp}>
            <motion.div
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col h-full"
              whileHover={{ y: -6, boxShadow: "0 16px 40px -12px rgba(0,0,0,0.12)" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {/* Visual — area chart */}
              <div className="flex-1 bg-white min-h-[220px] relative overflow-hidden p-6 flex flex-col justify-between">
                <div>
                  <p className="text-lg font-display font-bold text-slate-900">Global Reach</p>
                  <p className="text-[11px] font-mono text-emerald-600 font-semibold mt-0.5">Growth Highlight ↑</p>
                </div>
                {/* SVG area chart */}
                <svg viewBox="0 0 280 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full mt-4">
                  <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22C55E" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#22C55E" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="25" x2="280" y2="25" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4 4"/>
                  <line x1="0" y1="55" x2="280" y2="55" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4 4"/>
                  <line x1="0" y1="85" x2="280" y2="85" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4 4"/>
                  <path d="M0 90 C30 88 50 82 80 75 C110 68 130 60 160 45 C190 30 220 20 250 12 L280 8 L280 110 L0 110 Z" fill="url(#areaGrad)"/>
                  <motion.path
                    d="M0 90 C30 88 50 82 80 75 C110 68 130 60 160 45 C190 30 220 20 250 12 L280 8"
                    stroke="#22C55E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  <circle cx="280" cy="8" r="4" fill="#22C55E"/>
                  <circle cx="280" cy="8" r="7" fill="#22C55E" fillOpacity="0.2"/>
                </svg>
              </div>
              {/* Body */}
              <div className="p-6 space-y-2">
                <p className="text-2xl font-display font-bold text-slate-900">Empowering Growth at Scale</p>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">
                  We help businesses{" "}
                  <span className="text-brand-600 font-medium underline decoration-dotted">redirect resources</span>{" "}
                  from maintaining broken systems to fuelling product innovation and expansion.
                </p>
              </div>
            </motion.div>
          </AnimateStaggerItem>

        </AnimateStagger>
      </div>
    </section>
  );
}
