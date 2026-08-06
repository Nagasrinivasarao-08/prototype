import React from "react";
import { TRUST_METRICS } from "@/data/companyData";

export function MetricsSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-slate-700 transition-all duration-200 group"
            >
              <div className="font-mono text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-signal-blue-400 via-sky-300 to-emerald-400 group-hover:scale-105 transition-transform duration-200 origin-left">
                {metric.value}
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">
                {metric.label}
              </h3>
              <p className="mt-1.5 text-xs text-slate-400 font-sans leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
