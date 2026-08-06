import React from "react";
import Link from "next/link";
import { Megaphone, Truck, Plane, GraduationCap, HeartPulse, Landmark, Film, ArrowRight } from "lucide-react";

const INDUSTRIES = [
  {
    name: "Marketing Management",
    desc: "Automated campaign tracking, marketing attribution, and CRM lead scoring platforms.",
    icon: <Megaphone className="w-5 h-5 text-indigo-600" />,
  },
  {
    name: "Logistics, Travel and Hospitality",
    desc: "Real-time fleet tracking, smart lockbox inventory, and seasonal reservation booking engines.",
    icon: <Truck className="w-5 h-5 text-blue-600" />,
  },
  {
    name: "Online Education Industry",
    desc: "Custom LMS portals, student progress analytics, and interactive e-learning applications.",
    icon: <GraduationCap className="w-5 h-5 text-purple-600" />,
  },
  {
    name: "Healthcare",
    desc: "HIPAA-compliant patient management, dental clinic portals, and medical telemetry ingestion.",
    icon: <HeartPulse className="w-5 h-5 text-rose-600" />,
  },
  {
    name: "Finance",
    desc: "Mortgage brokerage workflow engines, loan origination portals, and Salesforce FSC setups.",
    icon: <Landmark className="w-5 h-5 text-emerald-600" />,
  },
  {
    name: "Entertainment",
    desc: "High-traffic digital streaming platforms, digital asset management, and event ticketing portals.",
    icon: <Film className="w-5 h-5 text-amber-600" />,
  },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#F5F5F7] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Industry Focus
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Solving IT challenges in every industry, every day.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            From finance and logistics to healthcare and entertainment, we build software engineered for sector compliance and operational scale.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {INDUSTRIES.map((ind, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 w-fit mb-4">
                  {ind.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                  {ind.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-colors shadow-sm"
          >
            <span>Schedule a Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
