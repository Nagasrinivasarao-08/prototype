"use client";

import React from "react";
import Link from "next/link";
import { Megaphone, Truck, GraduationCap, HeartPulse, Landmark, Film, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimateIn, AnimateStagger, AnimateStaggerItem, fadeUp, slideLeft } from "@/components/ui/AnimateIn";

const INDUSTRIES = [
  {
    name: "Marketing Management",
    desc: "Automated campaign tracking, marketing attribution, and CRM lead scoring platforms.",
    icon: <Megaphone className="w-5 h-5 text-indigo-600" />,
    color: "group-hover:border-indigo-200 group-hover:bg-indigo-50/30",
    iconBg: "bg-indigo-50 border-indigo-100",
  },
  {
    name: "Logistics, Travel and Hospitality",
    desc: "Real-time fleet tracking, smart lockbox inventory, and seasonal reservation booking engines.",
    icon: <Truck className="w-5 h-5 text-blue-600" />,
    color: "group-hover:border-blue-200 group-hover:bg-blue-50/30",
    iconBg: "bg-blue-50 border-blue-100",
  },
  {
    name: "Online Education Industry",
    desc: "Custom LMS portals, student progress analytics, and interactive e-learning applications.",
    icon: <GraduationCap className="w-5 h-5 text-purple-600" />,
    color: "group-hover:border-purple-200 group-hover:bg-purple-50/30",
    iconBg: "bg-purple-50 border-purple-100",
  },
  {
    name: "Healthcare",
    desc: "HIPAA-compliant patient management, dental clinic portals, and medical telemetry ingestion.",
    icon: <HeartPulse className="w-5 h-5 text-rose-600" />,
    color: "group-hover:border-rose-200 group-hover:bg-rose-50/30",
    iconBg: "bg-rose-50 border-rose-100",
  },
  {
    name: "Finance",
    desc: "Mortgage brokerage workflow engines, loan origination portals, and Salesforce FSC setups.",
    icon: <Landmark className="w-5 h-5 text-emerald-600" />,
    color: "group-hover:border-emerald-200 group-hover:bg-emerald-50/30",
    iconBg: "bg-emerald-50 border-emerald-100",
  },
  {
    name: "Entertainment",
    desc: "High-traffic digital streaming platforms, digital asset management, and event ticketing portals.",
    icon: <Film className="w-5 h-5 text-amber-600" />,
    color: "group-hover:border-amber-200 group-hover:bg-amber-50/30",
    iconBg: "bg-amber-50 border-amber-100",
  },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#F5F5F7] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <AnimateIn variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Industry Focus
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Solving IT challenges in every industry, every day.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            From finance and logistics to healthcare and entertainment, we build software engineered for sector compliance and operational scale.
          </p>
        </AnimateIn>

        {/* Industries Grid — staggered */}
        <AnimateStagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14"
          staggerDelay={0.09}
        >
          {INDUSTRIES.map((ind, idx) => (
            <AnimateStaggerItem key={idx} variants={fadeUp}>
              <motion.div
                className={`group p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between h-full transition-all duration-200 ${ind.color}`}
                whileHover={{ y: -5, boxShadow: "0 12px 32px -8px rgba(0,0,0,0.12)" }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <div>
                  <div className={`p-3 rounded-xl border w-fit mb-4 transition-colors duration-200 ${ind.iconBg}`}>
                    {ind.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                    {ind.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>

        {/* CTA Bar */}
        <AnimateIn variants={fadeUp} delay={0.2} className="text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-colors shadow-sm"
          >
            <span>Schedule a Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimateIn>

      </div>
    </section>
  );
}
