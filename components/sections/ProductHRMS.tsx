import React from "react";
import { ASC_HRMS_DATA } from "@/data/productData";
import { Check, ArrowRight, Layers, Zap } from "lucide-react";
import { AnimateIn, slideLeft, slideRight } from "@/components/ui/AnimateIn";

export function ProductHRMS() {
  return (
    <section id="hrms-product" className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 lg:p-14 rounded-2xl bg-slate-900 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <AnimateIn variants={slideLeft} className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-mono font-medium">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Featured Solution · ASC HRMS Enterprise</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                {ASC_HRMS_DATA.name}: {ASC_HRMS_DATA.tagline}
              </h2>

              <p className="text-slate-300 text-base font-sans leading-relaxed">
                {ASC_HRMS_DATA.description}
              </p>

              {/* Capabilities Grid */}
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase font-semibold text-slate-400 tracking-wider mb-3">
                  Core Module Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ASC_HRMS_DATA.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-sans text-slate-200">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors shadow-md"
                >
                  <span>Request Live Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium text-sm transition-colors"
                >
                  <span>One-Time Licensing Model</span>
                </a>
              </div>
            </AnimateIn>

            {/* Right Software Mockup Showcase */}
            <AnimateIn variants={slideRight} delay={0.2} className="lg:col-span-6 space-y-4">
              <div className="rounded-xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-950">
                {/* Browser top chrome */}
                <div className="h-7 bg-slate-800 px-3 flex items-center gap-2 border-b border-slate-700">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-mono text-slate-400 ml-2">ASC HRMS Enterprise Dashboard</span>
                </div>
                <img
                  src="/images/asc_hrms_ui.png"
                  alt="ASC HRMS Portal UI"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-sans">
                <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Biometric & Mobile Check-in</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero Monthly Licensing Fees</span>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
