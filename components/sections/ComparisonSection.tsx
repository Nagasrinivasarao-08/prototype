"use client";

import React from "react";
import { Check, X, Star } from "lucide-react";
import { AnimateIn, fadeUp, scaleIn } from "@/components/ui/AnimateIn";

const COMPARISON_ROWS = [
  {
    feature: "Cost",
    aspire: "Fair, transparent & predictable",
    hiring: "$$$ (high salaries & benefits)",
    agencies: "$$$ - $$$$ (hidden project fees)",
  },
  {
    feature: "Expertise",
    aspire: "Senior talent, 18+ years experience",
    hiring: "Varies per individual hire",
    agencies: "Varies / often assigned junior devs",
  },
  {
    feature: "Turnaround",
    aspire: "Fast, reliable delivery & 24/7 SLA",
    hiring: "Weeks of recruiting & onboarding",
    agencies: "Often slower with bloated processes",
  },
  {
    feature: "Flexibility",
    aspire: "Scale engineering up or down anytime",
    hiring: "Long-term employment contracts",
    agencies: "Rigid scopes & costly change orders",
  },
  {
    feature: "Security & Standards",
    aspire: "ISO 27001 certified & dedicated QA",
    hiring: "Depends on internal processes",
    agencies: "Inconsistent compliance standards",
  },
];

export function ComparisonSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F5F7] text-slate-900 border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimateIn variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            What Makes Us Different
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Why leading businesses choose Aspire over hiring in-house or outsourcing elsewhere.
          </p>
        </AnimateIn>

        {/* Dashed separator */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-2xl h-px border-t-2 border-dashed border-slate-300" />
        </div>

        {/* Comparison Table Container */}
        <AnimateIn variants={scaleIn} delay={0.15} className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-50/80 border-b border-slate-200 p-4 sm:p-6 items-center text-center font-display">
            <div className="col-span-3 text-left font-bold text-slate-400 text-xs sm:text-sm uppercase tracking-wider pl-2 sm:pl-4">
              Comparison
            </div>
            
            {/* Aspire Column (Highlighted) */}
            <div className="col-span-3 flex flex-col items-center justify-center font-bold text-slate-900 text-base sm:text-lg">
              <Star className="w-4 h-4 text-brand-600 fill-brand-600 mb-1" />
              <span>Aspire</span>
            </div>

            <div className="col-span-3 font-semibold text-slate-700 text-xs sm:text-base">
              Hiring Employees
            </div>

            <div className="col-span-3 font-semibold text-slate-700 text-xs sm:text-base">
              Other Agencies
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-100 font-sans text-xs sm:text-sm">
            {COMPARISON_ROWS.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-slate-50/50 transition-colors">
                
                {/* Feature Name */}
                <div className="col-span-3 font-bold text-slate-900 pl-2 sm:pl-4">
                  {row.feature}
                </div>

                {/* Aspire Value (Green Check) */}
                <div className="col-span-3 text-center font-medium text-slate-900 flex items-center justify-center gap-1.5 px-1 sm:px-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                  <span>{row.aspire}</span>
                </div>

                {/* Hiring Employees (Red Cross) */}
                <div className="col-span-3 text-center text-slate-600 flex items-center justify-center gap-1.5 px-1 sm:px-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 stroke-[2.5]" />
                  <span>{row.hiring}</span>
                </div>

                {/* Other Agencies (Red Cross) */}
                <div className="col-span-3 text-center text-slate-600 flex items-center justify-center gap-1.5 px-1 sm:px-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 stroke-[2.5]" />
                  <span>{row.agencies}</span>
                </div>

              </div>
            ))}
          </div>

        </AnimateIn>

      </div>
    </section>
  );
}
