"use client";

import React from "react";
import { TRUST_METRICS } from "@/data/companyData";
import { motion } from "framer-motion";
import { AnimateStagger, AnimateStaggerItem, scaleIn } from "@/components/ui/AnimateIn";

export function MetricsSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateStagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          staggerDelay={0.12}
        >
          {TRUST_METRICS.map((metric) => (
            <AnimateStaggerItem key={metric.id} variants={scaleIn}>
              <motion.div
                className="relative p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 group cursor-default"
                whileHover={{
                  borderColor: "#3b82f6",
                  boxShadow: "0 0 32px -8px rgba(59,130,246,0.4)",
                  y: -4,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <motion.div
                  className="font-mono text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-signal-blue-400 via-sky-300 to-emerald-400"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                >
                  {metric.value}
                </motion.div>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">
                  {metric.label}
                </h3>
                <p className="mt-1.5 text-xs text-slate-400 font-sans leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
