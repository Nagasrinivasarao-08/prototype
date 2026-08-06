"use client";

import React from "react";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/servicesData";
import { Sparkles, ArrowRight } from "lucide-react";

interface MegaMenuProps {
  onClose: () => void;
}

export function MegaMenu({ onClose }: MegaMenuProps) {
  return (
    <div
      role="region"
      aria-label="Services Navigation"
      className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl transition-all duration-200 z-50 text-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                href="#services"
                onClick={onClose}
                className="group p-3.5 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-slate-100 text-slate-800 shrink-0">
                    <Sparkles className="w-4 h-4 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {service.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-slate-900 p-6 rounded-xl text-white flex flex-col justify-between border border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase text-brand-400 font-semibold">
                Enterprise Platform Spotlight
              </span>
              <h3 className="mt-2 text-lg font-display font-bold leading-snug">
                Salesforce CRM & Custom .NET Engineering
              </h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Learn how our senior technical architects modernize enterprise systems with dependable execution and zero data disruption.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-sans text-slate-400">18+ Years Track Record</span>
              <Link
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors"
              >
                <span>Talk to Architect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
