"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimateStagger, AnimateStaggerItem, scaleIn, CountUp, GlowCard } from "@/components/ui/AnimateIn";

const METRICS_DATA = [
  { id: "years", num: 18, suffix: "+ Years", label: "Years Experience", description: "Delivering custom enterprise solutions since 2007." },
  { id: "projects", num: 1000, suffix: "+", label: "Projects Delivered", description: "Successfully shipped across web, CRM, mobile & IoT." },
  { id: "countries", num: 12, suffix: "+", label: "Countries Served", description: "Global clients across US, UK, Europe, Australia & Asia." },
  { id: "satisfaction", num: 98, suffix: "%", label: "Satisfaction Rate", description: "Verbatim client satisfaction and long-term retention." },
];

export function MetricsSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateStagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          staggerDelay={0.12}
        >
          {METRICS_DATA.map((metric) => (
            <AnimateStaggerItem key={metric.id} variants={scaleIn}>
              <GlowCard
                glowColor="rgba(59, 130, 246, 0.25)"
                className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group cursor-default h-full"
              >
                <div className="font-mono text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
                  <CountUp to={metric.num} suffix={metric.suffix} duration={2.2} />
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {metric.label}
                </h3>
                <p className="mt-1.5 text-xs text-slate-400 font-sans leading-relaxed">
                  {metric.description}
                </p>
              </GlowCard>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
