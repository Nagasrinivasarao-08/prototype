"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";

const PRICING_TIERS = [
  {
    id: "discovery",
    name: "Architectural Audit",
    subtitle: "Ideal for initial technical assessment, code audit, & feasibility.",
    badge: "1-2 Weeks",
    popular: false,
    features: [
      "Current Codebase & Architecture Audit",
      "AI & Automation Feasibility Assessment",
      "Salesforce Data Model & Apex Audit",
      "Detailed Roadmap & Cost Estimate",
      "Executive Technical Presentation",
    ],
    ctaText: "Book Architecture Audit",
    href: "#contact",
  },
  {
    id: "dedicated-team",
    name: "Dedicated Engineering Pod",
    subtitle: "Scale your capability with senior full-stack & AI engineers.",
    badge: "Most Requested",
    popular: true,
    features: [
      "Dedicated Senior Software Engineers",
      "Direct Slack/Jira Integration & Daily Syncs",
      "AI Agent & Salesforce Apex Expertise",
      "Flexible Sprint Allocations",
      "ISO 27001 Security & Data Compliance",
      "Zero Overhead & Rapid Onboarding",
    ],
    ctaText: "Hire Dedicated Team",
    href: "#contact",
  },
  {
    id: "turnkey-project",
    name: "Turnkey Project Delivery",
    subtitle: "Complete end-to-end custom software & platform builds.",
    badge: "Fixed Scope",
    popular: false,
    features: [
      "Fixed Milestone Scope & Schedule",
      "Full Product Design & Engineering",
      "Quality Assurance & Security Auditing",
      "User Acceptance Testing (UAT)",
      "90-Day Post-Launch SLA Support",
    ],
    ctaText: "Scope Your Project",
    href: "#contact",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#FAFAFA] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-sans uppercase font-semibold text-brand-600 tracking-wider block mb-2">
            Delivery Models
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Flexible software engagement models.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans">
            Choose between strategic architectural discovery, dedicated engineering pod scaling, or fixed-scope project delivery.
          </p>
        </div>

        {/* Clean Light Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`p-8 rounded-xl flex flex-col justify-between transition-all duration-200 ${
                tier.popular
                  ? "bg-white border-2 border-brand-600 shadow-md"
                  : "bg-white border border-slate-200 hover:border-slate-300"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-2xl font-bold text-slate-900">{tier.name}</h3>
                  <span
                    className={`px-2.5 py-0.5 text-[10px] font-sans font-semibold uppercase rounded ${
                      tier.popular ? "bg-brand-50 text-brand-700 border border-brand-200" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {tier.badge}
                  </span>
                </div>

                <p className="text-sm text-slate-600 font-sans min-h-[40px] leading-relaxed">
                  {tier.subtitle}
                </p>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs font-sans text-slate-700">
                      <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-100">
                <a
                  href={tier.href}
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-sm transition-colors ${
                    tier.popular
                      ? "bg-slate-900 hover:bg-slate-800 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
