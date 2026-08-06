"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateIn, AnimateStagger, AnimateStaggerItem, fadeUp } from "@/components/ui/AnimateIn";

const FAQS = [
  {
    id: "faq-1",
    question: "How can IT solutions help to grow your business?",
    answer:
      "IT solutions streamline operations, reduce costs, improve productivity, and enhance customer experience. By automating processes, improving data management, and enabling better decision-making, IT helps businesses scale faster and stay competitive.",
  },
  {
    id: "faq-2",
    question: "What industries use IT consulting services the most?",
    answer:
      "Finance, healthcare, logistics, e-commerce, legal, and manufacturing leverage IT consulting most heavily to modernize operations, maintain strict compliance, and scale enterprise platforms.",
  },
  {
    id: "faq-3",
    question: "What are the top industries that utilize custom software?",
    answer:
      "Financial services, healthcare, logistics & supply chain, retail/e-commerce, real estate lending, and legal technology rely on custom software for competitive operational advantage.",
  },
  {
    id: "faq-4",
    question: "Why is custom software development important for a business?",
    answer:
      "Custom software is built specifically for your unique business workflows, giving full ownership, zero per-user recurring licensing fees, seamless API integrations, and total long-term scalability.",
  },
  {
    id: "faq-5",
    question: "Is custom software better than generic business software?",
    answer:
      "Custom software eliminates rigid workarounds, fits your exact operational processes, scales without cost penalties per seat, and acts as a proprietary long-term asset for your enterprise.",
  },
  {
    id: "faq-6",
    question: "What are some good reasons to outsource IT services?",
    answer:
      "Outsourcing provides immediate access to senior engineering talent, reduces overhead expenses, speeds up time-to-market, and allows internal leadership to focus on core business growth.",
  },
  {
    id: "faq-7",
    question: "Why do companies outsource their tech support?",
    answer:
      "Companies outsource tech support to ensure 24/7 SLA coverage, maintain system uptime, lower operational overhead, and get proactive security monitoring from dedicated experts.",
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F5F5F7] text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateIn variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-mono font-medium">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 font-sans leading-relaxed">
            Everything you need to know about our custom software development, CRM advisory, and long-term IT support.
          </p>
        </AnimateIn>

        {/* Accessible Accordion */}
        <AnimateStagger className="space-y-4" staggerDelay={0.08}>
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <AnimateStaggerItem key={faq.id} variants={fadeUp}>
                <div
                  className={`rounded-2xl bg-white border overflow-hidden shadow-sm transition-all duration-200 ${isOpen ? 'border-blue-200 shadow-md' : 'border-slate-200/80'}`}
                >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-slate-900 rounded-2xl"
                >
                  <span className="font-display text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-brand-600" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-sm text-slate-600 font-sans leading-relaxed border-t border-slate-100">
                        <p className="mt-4">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                </div>
              </AnimateStaggerItem>
            );
          })}
        </AnimateStagger>
      </div>
    </section>
  );
}
