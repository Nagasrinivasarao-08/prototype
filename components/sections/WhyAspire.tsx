"use client";

import React from "react";
import { WHY_ASPIRE_STRENGTHS } from "@/data/whyAspireData";
import { AnimateIn, AnimateStagger, AnimateStaggerItem, fadeUp, scaleIn } from "@/components/ui/AnimateIn";
import { motion } from "framer-motion";

/* Inline SVG illustrations — one per strength card */
const ILLUSTRATIONS = [
  /* 1 — Cost-Effectiveness */
  <svg key="cost" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="40" cy="44" r="22" stroke="#2563EB" strokeWidth="2.5" fill="#EFF6FF"/>
    <path d="M40 26v36M30 32c0-3.3 4.5-6 10-6s10 2.7 10 6-4.5 6-10 6-10 2.7-10 6 4.5 6 10 6" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="58" cy="22" r="8" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2"/>
    <path d="M58 18v8M55 22h6" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
  </svg>,
  /* 2 — Proven Competence */
  <svg key="competence" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M40 14l5.5 11.1 12.3 1.8-8.9 8.7 2.1 12.2L40 42.1l-11 5.7 2.1-12.2-8.9-8.7 12.3-1.8L40 14z" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M30 58h20M40 52v6" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M22 24c-4 2-6 8-4 14" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3"/>
    <path d="M58 24c4 2 6 8 4 14" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3"/>
  </svg>,
  /* 3 — Industry Expertise */
  <svg key="industry" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="40" cy="40" r="24" stroke="#2563EB" strokeWidth="2.5" fill="#EFF6FF"/>
    <ellipse cx="40" cy="40" rx="10" ry="24" stroke="#2563EB" strokeWidth="2"/>
    <line x1="16" y1="40" x2="64" y2="40" stroke="#2563EB" strokeWidth="2"/>
    <path d="M20 28c6 3 14 4 20 4s14-1 20-4M20 52c6-3 14-4 20-4s14 1 20 4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  /* 4 — Flexible Scalability */
  <svg key="scale" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="18" y="42" width="16" height="20" rx="3" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2.5"/>
    <rect x="32" y="30" width="16" height="32" rx="3" fill="#BFDBFE" stroke="#2563EB" strokeWidth="2.5"/>
    <rect x="46" y="18" width="16" height="44" rx="3" fill="#93C5FD" stroke="#2563EB" strokeWidth="2.5"/>
    <path d="M56 14l4 4-4 4" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M60 18H50" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
  </svg>,
  /* 5 — Client Partnership */
  <svg key="partner" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M14 44l8-8 10 4 8-8 10 4 8-8" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M22 36l-8 8 6 6 26-10 8 6 8-10-14-8-10 6-8-6-8 8z" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="58" cy="26" r="6" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2"/>
    <circle cx="22" cy="26" r="6" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2"/>
  </svg>,
  /* 6 — Results-Driven */
  <svg key="results" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="40" cy="40" r="24" stroke="#2563EB" strokeWidth="2.5" fill="#EFF6FF"/>
    <circle cx="40" cy="40" r="14" stroke="#2563EB" strokeWidth="2" fill="#DBEAFE"/>
    <circle cx="40" cy="40" r="5" fill="#2563EB"/>
    <path d="M56 24l-8 8" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M60 20l-4 4-4-4 4-4 4 4z" fill="#2563EB" stroke="#2563EB" strokeWidth="1" strokeLinejoin="round"/>
  </svg>,
];

export function WhyAspire() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F5F7] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered header */}
        <AnimateIn variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Why Choose Aspire?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Discover the advantages of partnering with an engineering team built
            for long-term delivery and measurable client success.
          </p>
        </AnimateIn>

        {/* 3×2 staggered grid */}
        <AnimateStagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
          staggerDelay={0.1}
        >
          {WHY_ASPIRE_STRENGTHS.map((item, idx) => (
            <AnimateStaggerItem key={idx} variants={fadeUp}>
              <motion.div
                className="flex flex-col items-center text-center group"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Illustration with hover scale */}
                <motion.div
                  className="w-20 h-20 mb-6"
                  whileHover={{ scale: 1.12, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  {ILLUSTRATIONS[idx]}
                </motion.div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 font-sans leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </motion.div>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>

      </div>
    </section>
  );
}
