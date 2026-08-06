"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimateIn, AnimateStagger, AnimateStaggerItem, fadeUp, slideLeft } from "@/components/ui/AnimateIn";

const BLOGS = [
  {
    id: "salesforce-cloud-2026",
    title: "Why Every Growing Business Needs a Salesforce Sales Cloud Expert in 2026",
    summary: "Why every growing business needs a Salesforce Sales Cloud expert in 2026 to improve sales performance, customer relationships, and business growth.",
    category: "Salesforce CRM",
    date: "2026",
  },
  {
    id: "future-ready-software-2026",
    title: "Why Every Business Needs a Future-Ready Software Development Company in 2026",
    summary: "Future-ready software development company in 2026 offering scalable, secure, AI-powered software solutions for business growth.",
    category: "Software Engineering",
    date: "2026",
  },
  {
    id: "ai-mobile-app-2026",
    title: "Mobile App Development Company in 2026: How AI Is Rewriting the Rules",
    summary: "Mobile App Development Company in 2026 showcasing how AI is transforming app development with intelligent automation, predictive analytics, user-centric design, and AI-powered mobile experiences.",
    category: "Mobile & AI",
    date: "2026",
  },
];

export function InsightsSection() {
  return (
    <section id="insights" className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateIn variants={slideLeft} className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase font-semibold text-brand-600 tracking-wider block mb-2">
              Blogs & Insights
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Latest Insights & Engineering Blogs
            </h2>
          </div>
          <Link
            href="#insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
          >
            <span>View More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimateIn>

        {/* 3 Articles Grid */}
        <AnimateStagger className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
          {BLOGS.map((art) => (
            <AnimateStaggerItem key={art.id} variants={fadeUp}>
              <motion.div
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between group h-full"
                whileHover={{ y: -5, borderColor: "#94a3b8", boxShadow: "0 12px 32px -8px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium">
                    {art.category}
                  </span>
                  <span>{art.date}</span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug mb-3">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
              </motion.div>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
