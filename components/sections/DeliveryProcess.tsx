import React from "react";
import { INITIAL_CONSULTATION_STEPS, PROCESS_STEPS } from "@/data/processData";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function DeliveryProcess() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-sans uppercase font-semibold text-slate-500 tracking-wider block mb-2">
            Delivery Methodology
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            A structured software delivery pipeline.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            From initial architectural discovery to ongoing 24/7 SLA maintenance, our delivery model ensures clear scope, predictable timelines, and continuous software evolution.
          </p>
        </div>

        {/* Initial Consultation Bar */}
        <div className="mb-16 p-8 rounded-xl bg-slate-50 border border-slate-200">
          <h3 className="text-xs font-sans uppercase font-semibold text-brand-600 tracking-wider mb-6">
            Initial Engagement Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INITIAL_CONSULTATION_STEPS.map((cStep) => (
              <div key={cStep.step} className="p-4 rounded bg-white border border-slate-200">
                <div className="flex items-center gap-2 font-mono text-sm font-bold text-slate-900 mb-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center text-xs">
                    {cStep.step}
                  </span>
                  <span>{cStep.title}</span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {cStep.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Full Delivery Process 4-Stage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((stage, idx) => (
            <div
              key={stage.number}
              className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-slate-900">{stage.number}</span>
                  <span className="px-2 py-0.5 text-[10px] font-sans font-medium bg-white text-slate-600 border border-slate-200 rounded">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-900">{stage.title}</h3>
                <p className="text-xs font-mono text-slate-500 mt-0.5 mb-3">{stage.subtitle}</p>

                <p className="text-sm text-slate-600 font-sans leading-relaxed mb-4">
                  {stage.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-1">
                <span className="text-[10px] font-sans uppercase font-semibold text-slate-500 block mb-1">Key Deliverables</span>
                {stage.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-1.5 text-[11px] font-sans text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
