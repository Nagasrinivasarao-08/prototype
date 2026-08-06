"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, CheckCircle2, TrendingUp } from "lucide-react";
import { TRUST_METRICS } from "@/data/companyData";

export function SocialProofSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFAFA] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-sans font-semibold text-brand-600 mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Experience that reduces delivery risk.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            18+ years of engineering discipline, technical stability, and high customer satisfaction across global deployments.
          </p>
        </div>

        {/* 4 Large Metric Cards in CodeDale Pill Card Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 text-center flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="font-mono text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-brand-600 transition-colors">
                  {metric.value}
                </div>
                <h3 className="font-display text-base font-bold text-slate-800 mb-2">
                  {metric.label}
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {metric.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] font-sans font-medium text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Metric</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
