import React from "react";
import Link from "next/link";
import { SERVICES_GROUPED_DATA } from "@/data/servicesData";
import { ServiceItem } from "@/types";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimateIn, AnimateStagger, AnimateStaggerItem, fadeUp } from "@/components/ui/AnimateIn";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAFAFA] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn variants={fadeUp} className="max-w-3xl mb-16">
          <span className="text-xs font-sans uppercase font-semibold text-brand-600 tracking-wider block mb-2">
            Service Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Comprehensive software engineering capabilities.
          </h2>
        </AnimateIn>

        <AnimateStagger className="space-y-12" staggerDelay={0.1}>
          {SERVICES_GROUPED_DATA.map((group) => (
            <AnimateStaggerItem key={group.id} variants={fadeUp}>
            <div className="p-8 rounded-xl bg-white border border-slate-200">
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                {group.categoryName}
              </h3>
              <p className="text-sm text-slate-600 font-sans mb-6">{group.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.services.map((service: ServiceItem) => (
                  <div key={service.id} className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                    <h4 className="font-semibold text-slate-900 text-base mb-1">{service.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">{service.shortDesc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag: string, idx: number) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-white text-[10px] font-mono text-slate-600 border border-slate-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
