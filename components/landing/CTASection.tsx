"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Mail, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-surface-900 via-surface-950 to-surface-950 text-white relative overflow-hidden border-b border-surface-800">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-500 text-xs font-mono font-semibold uppercase tracking-wider"
        >
          <ShieldCheck className="w-4 h-4" />
          Senior Engineering Advisory
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
        >
          Ready to accelerate your software roadmap with AI & Enterprise CRM?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto"
        >
          Schedule a direct consultation with our principal software architects. We analyze your requirements and deliver a clear technical roadmap within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-glow-blue transition-all duration-200"
          >
            <span>Schedule AI Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-xs font-mono text-slate-400">
          <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="flex items-center justify-center gap-2 p-3 rounded-xl bg-surface-900 border border-surface-800 hover:text-white transition-colors">
            <Mail className="w-4 h-4 text-brand-500" />
            <span>{COMPANY_INFO.primaryEmail}</span>
          </a>
          <a href={`tel:${COMPANY_INFO.usPhone}`} className="flex items-center justify-center gap-2 p-3 rounded-xl bg-surface-900 border border-surface-800 hover:text-white transition-colors">
            <Phone className="w-4 h-4 text-accent-emerald" />
            <span>US: {COMPANY_INFO.usPhone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
