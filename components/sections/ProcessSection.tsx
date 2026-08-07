import React from "react";
import { PROCESS_STEPS } from "@/data/processData";
import { AnimateIn, AnimateStagger, AnimateStaggerItem, fadeUp } from "@/components/ui/AnimateIn";

export function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateIn variants={fadeUp} className="max-w-3xl mb-16">
          <span className="text-xs font-sans uppercase font-semibold text-slate-500 tracking-wider block mb-2">
            Delivery Methodology
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            A 4-step delivery pipeline engineered for clarity.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            From initial architectural discovery to ongoing production scaling, our transparent process ensures predictable milestones and zero budget surprises.
          </p>
        </AnimateIn>

        {/* 4 Process Steps Grid */}
        <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" staggerDelay={0.1}>
          {PROCESS_STEPS.map((step, idx) => (
            <AnimateStaggerItem key={step.number} variants={fadeUp}>
            <div
              className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-slate-900">
                    {step.number}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-sans uppercase font-medium bg-white text-slate-600 border border-slate-200 rounded">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-0.5 mb-3">{step.subtitle}</p>

                <p className="text-sm text-slate-600 font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-400">
                Delivery Protocol v4.2
              </div>
            </div>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
