"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Cloud, Database, Monitor, Smartphone, Cpu, Building2, Wrench, ShoppingBag, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { AnimateIn, AnimateStagger, AnimateStaggerItem, fadeUp } from "@/components/ui/AnimateIn";

const SERVICES_DATA = [
  { title: "AI Consulting & Automation", desc: "Drive growth with AI consulting, generative AI, and seamless integration.", icon: <Sparkles className="w-5 h-5 text-amber-500" />, href: "#contact" },
  { title: "Salesforce CRM", desc: "From Sales to Service, Streamline every process with Salesforce.", icon: <Cloud className="w-5 h-5 text-sky-500" />, href: "#contact" },
  { title: "MS Dynamics CRM", desc: "Unleashing the Power of Dynamics CRM: A Journey into Customized Solutions.", icon: <Database className="w-5 h-5 text-blue-600" />, href: "#contact" },
  { title: "Web Application", desc: "Unlocking Digital Potential: Empowering Users Through Web App Development.", icon: <Monitor className="w-5 h-5 text-indigo-500" />, href: "#contact" },
  { title: "Mobile Development", desc: "Unleashing the Power: Unlocking Innovation Through Mobile App Development.", icon: <Smartphone className="w-5 h-5 text-emerald-500" />, href: "#contact" },
  { title: "Desktop Application", desc: "Empowering Productivity: Unleashing the Potential of Desktop Applications.", icon: <Cpu className="w-5 h-5 text-slate-700" />, href: "#contact" },
  { title: "Enterprise Solution", desc: "Streamline, Scale, and Succeed: The Ultimate Enterprise Solution.", icon: <Building2 className="w-5 h-5 text-brand-600" />, href: "#contact" },
  { title: "Product Engineering", desc: "Driving Innovation and Excellence in Product Development.", icon: <Wrench className="w-5 h-5 text-purple-600" />, href: "#contact" },
  { title: "E-Commerce Site", desc: "Empowering Businesses through Seamless E-Commerce Solutions.", icon: <ShoppingBag className="w-5 h-5 text-orange-500" />, href: "#contact" },
  { title: "IOT Solutions", desc: "Boosting Your Tech Team: Unleashing the Power of IT Staff Augmentation & IoT.", icon: <ShieldCheck className="w-5 h-5 text-teal-600" />, href: "#contact" },
];

export function FeaturesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F5F5F7] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimateIn variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Solutions Tailored for Your Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Discover our full-service offerings — crafted to deliver reliability, scalability, and results.
          </p>
        </AnimateIn>

        {/* Dashed separator */}
        <AnimateIn variants={fadeUp} delay={0.1} className="flex justify-center mb-14">
          <div className="w-full max-w-3xl h-px border-t-2 border-dashed border-slate-300" />
        </AnimateIn>

        {/* 10 Services Grid — staggered */}
        <AnimateStagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.07}
        >
          {SERVICES_DATA.map((svc, idx) => (
            <AnimateStaggerItem key={idx} variants={fadeUp}>
              <motion.div
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between group h-full"
                whileHover={{ y: -5, boxShadow: "0 12px 32px -8px rgba(0,0,0,0.12)" }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <div>
                  <motion.div
                    className="p-3 rounded-xl bg-slate-50 border border-slate-100 w-fit mb-4"
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {svc.icon}
                  </motion.div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>

      </div>
    </section>
  );
}
