import React from "react";
import { TECH_CAPABILITIES_DATA } from "@/data/techData";
import { Code2 } from "lucide-react";
import { AnimateIn, AnimateStagger, AnimateStaggerItem, fadeUp } from "@/components/ui/AnimateIn";

export function TechCapabilities() {
  return (
    <section id="technology" className="py-20 lg:py-28 bg-[#FAFAFA] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateIn variants={fadeUp} className="max-w-3xl mb-16">
          <span className="text-xs font-sans uppercase font-semibold text-brand-600 tracking-wider block mb-2">
            Technology Stack
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Verified technical capabilities & framework depth.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Our engineering teams specialize in enterprise software frameworks across Microsoft .NET, Salesforce Apex/LWC, web, mobile, and cloud environments.
          </p>
        </AnimateIn>

        {/* Technology Index Grid */}
        <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.1}>
          {TECH_CAPABILITIES_DATA.map((cat, idx) => (
            <AnimateStaggerItem key={idx} variants={fadeUp}>
            <div className="p-8 rounded-xl bg-white border border-slate-200 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100">
                  <Code2 className="w-5 h-5 text-brand-600 shrink-0" />
                  <h3 className="font-display text-xl font-bold text-slate-900">{cat.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.items.map((item, iIdx) => (
                    <span
                      key={iIdx}
                      className="px-3 py-1.5 rounded bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-sans text-slate-500">
                Verified Production Expertise
              </div>
            </div>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
