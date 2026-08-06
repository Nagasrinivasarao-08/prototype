"use client";

import React from "react";
import { motion as framerMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { FloatingElement } from "@/components/ui/AnimateIn";

export function Hero() {
  const avatarClients = [
    { text: "BE", bg: "bg-slate-100 text-slate-700", border: "border-white" },
    { text: "RF", bg: "bg-blue-50 text-blue-700", border: "border-white" },
    { text: "DN", bg: "bg-emerald-50 text-emerald-700", border: "border-white" },
    { text: "BB", bg: "bg-indigo-50 text-indigo-700", border: "border-white" },
  ];

  return (
    <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 bg-[#FAFAFA] text-slate-900 border-b border-slate-200 overflow-hidden">
      {/* Coded decorative grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)] opacity-35 pointer-events-none" />

      {/* Ambient Pulsing Glow Orbs */}
      <framerMotion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [-20, 20, -20],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none"
      />
      <framerMotion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.35, 0.15],
          y: [-20, 20, -20],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-300/30 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">

          {/* Centered Small Trust Badge */}
          <framerMotion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-sans font-medium shadow-sm cursor-default"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span>18+ years delivering software &amp; enterprise solutions</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-semibold">ISO 27001:2022</span>
          </framerMotion.div>

          {/* Centered Large Headline with Levitating Floating Cards */}
          <div className="relative w-full">
            {/* Desktop Testimonial Card - Left (Levitating Float) */}
            <div className="hidden xl:block absolute -left-48 top-6 z-20">
              <FloatingElement duration={5} distance={10}>
                <framerMotion.div
                  initial={{ opacity: 0, x: -40, rotate: -4 }}
                  animate={{ opacity: 1, x: 0, rotate: -4 }}
                  whileHover={{ rotate: 0, scale: 1.05, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)" }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="w-60 p-5 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-200 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.12)] text-left cursor-pointer"
                >
                  <span className="text-4xl text-slate-300 font-serif leading-none block -mb-2">“</span>
                  <p className="text-[11px] font-sans text-slate-700 leading-relaxed italic">
                    Great development team! Great architect skills, great ideas, experience with many different types of apps.
                  </p>
                  <div className="mt-4 pt-2.5 border-t border-slate-100">
                    <span className="font-signature text-xl text-brand-600 block leading-tight">John Ragsdale</span>
                    <span className="text-slate-500 text-[10px] block leading-tight mt-0.5">CIO, EyeCare Services Partners</span>
                  </div>
                </framerMotion.div>
              </FloatingElement>
            </div>

            {/* Desktop Testimonial Card - Right (Levitating Float) */}
            <div className="hidden xl:block absolute -right-48 top-6 z-20">
              <FloatingElement duration={6} distance={12} delay={0.5}>
                <framerMotion.div
                  initial={{ opacity: 0, x: 40, rotate: 4 }}
                  animate={{ opacity: 1, x: 0, rotate: 4 }}
                  whileHover={{ rotate: 0, scale: 1.05, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)" }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                  className="w-60 p-5 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-200 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.12)] text-left cursor-pointer"
                >
                  <span className="text-4xl text-slate-300 font-serif leading-none block -mb-2">“</span>
                  <p className="text-[11px] font-sans text-slate-700 leading-relaxed italic">
                    In the last three years I have only used Aspire because they consistently provide the performance my business requires.
                  </p>
                  <div className="mt-4 pt-2.5 border-t border-slate-100">
                    <span className="font-signature text-xl text-brand-600 block leading-tight">Rob McNicoll</span>
                    <span className="text-slate-500 text-[10px] block leading-tight mt-0.5">Director, Copper Monkey Ltd.</span>
                  </div>
                </framerMotion.div>
              </FloatingElement>
            </div>

            {/* Headline with single inline icon accent */}
            <framerMotion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12] max-w-xl mx-auto"
            >
              We manage your
              <span className="inline-flex items-center align-middle">
                <svg className="inline-block align-middle w-[0.7em] h-[0.7em] mx-[0.2em] text-blue-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                IT,
              </span>
              <br className="hidden sm:inline" />
              so you can manage your business.
            </framerMotion.h1>
          </div>

          {/* Subheadline */}
          <framerMotion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto"
          >
            For more than 18 years, Aspire has helped businesses design, build, modernize, and support reliable software across CRM, enterprise platforms, web, mobile, products, and automation.
          </framerMotion.p>

          {/* Actions */}
          <framerMotion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <framerMotion.a
              href="#contact"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 20px -4px rgba(15,23,42,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all duration-200 shadow-sm min-h-[44px]"
            >
              <span>Schedule a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </framerMotion.a>

            <framerMotion.a
              href="#work"
              whileHover={{ scale: 1.04, x: 2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors min-h-[44px]"
            >
              <span>View Our Portfolio</span>
              <ArrowUpRight className="w-4 h-4" />
            </framerMotion.a>
          </framerMotion.div>

          {/* Social Proof Stack */}
          <framerMotion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="flex items-center justify-center gap-3 pt-1"
          >
            <div className="flex -space-x-2">
              {avatarClients.map((client, idx) => (
                <framerMotion.div
                  key={idx}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-mono font-bold border-2 ${client.border} ${client.bg} shadow-3xs cursor-default`}
                >
                  {client.text}
                </framerMotion.div>
              ))}
            </div>
            <span className="text-xs font-sans text-slate-600 font-medium">
              Trusted Technology Partner · ISO 27001:2022 Certified
            </span>
          </framerMotion.div>

          {/* Clean Metrics Row */}
          <framerMotion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="pt-6 grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-y-3 gap-x-6 text-xs font-sans text-slate-600 w-full border-t border-slate-200/60"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="font-mono text-sm font-bold text-slate-900">18+ Years</span>
              <span className="text-slate-500">Experience</span>
            </div>
            <span className="hidden sm:inline text-slate-300">|</span>
            <div className="flex items-center justify-center gap-2">
              <span className="font-mono text-sm font-bold text-slate-900">1,000+</span>
              <span className="text-slate-500">Projects</span>
            </div>
            <span className="hidden sm:inline text-slate-300">|</span>
            <div className="flex items-center justify-center gap-2">
              <span className="font-mono text-sm font-bold text-slate-900">12+</span>
              <span className="text-slate-500">Countries</span>
            </div>
            <span className="hidden sm:inline text-slate-300">|</span>
            <div className="flex items-center justify-center gap-2">
              <span className="font-mono text-sm font-bold text-slate-900">98%</span>
              <span className="text-slate-500">Satisfaction</span>
            </div>
          </framerMotion.div>
        </div>

        {/* Mobile/Tablet Fallback Testimonial Cards Layout */}
        <div className="xl:hidden grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-2xl mx-auto">
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
            <span className="text-3xl text-slate-300 font-serif leading-none block -mb-2">“</span>
            <p className="text-xs font-sans text-slate-700 leading-relaxed italic">
              Great development team! Great architect skills, great ideas, experience with many different types of apps.
            </p>
            <div className="mt-4 pt-2.5 border-t border-slate-100">
              <span className="font-signature text-xl text-brand-600 block leading-tight">John Ragsdale</span>
              <span className="text-slate-500 text-[10px] block leading-tight mt-0.5">CIO, EyeCare Services Partners</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
            <span className="text-3xl text-slate-300 font-serif leading-none block -mb-2">“</span>
            <p className="text-xs font-sans text-slate-700 leading-relaxed italic">
              In the last three years I have only used Aspire because they consistently provide the performance my business requires.
            </p>
            <div className="mt-4 pt-2.5 border-t border-slate-100">
              <span className="font-signature text-xl text-brand-600 block leading-tight">Rob McNicoll</span>
              <span className="text-slate-500 text-[10px] block leading-tight mt-0.5">Director, Copper Monkey Ltd.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
