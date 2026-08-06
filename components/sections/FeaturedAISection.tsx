import React from "react";
import { Button } from "@/components/ui/Button";
import { Sparkles, Bot, FileText, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";

export function FeaturedAISection() {
  return (
    <section id="ai-spotlight" className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      {/* Subtle Glow Background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-signal-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Capability · Practical Enterprise AI
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Empower your workforce with targeted AI & workflow automation.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg font-sans leading-relaxed">
                Rather than generic experimental chatbots, Aspire integrates practical generative AI models and automated workflow agents directly into your operational software systems—driving measurable speed and cost efficiency.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <Bot className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Intelligent Document Processing</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Automated extraction, classification, and validation of complex enterprise forms.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <FileText className="w-5 h-5 text-signal-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Custom Internal AI Copilots</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Domain-specific knowledge assistants grounded on internal company data.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <Cpu className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">CRM & ERP Agent Integration</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Seamless embedding into Salesforce, Microsoft Dynamics, and custom APIs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Enterprise Governance</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Strict ISO 27001 data privacy, compliance auditing, and role-based access.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  href="#contact"
                  variant="primary"
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold border-none"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Discuss an AI Opportunity
                </Button>
              </div>
            </div>

            {/* Right Interactive Card Frame */}
            <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400">AI Automation Workflow</span>
                <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">ACTIVE</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                  <span className="text-amber-400 font-bold">INCOMING:</span> Invoice & Contract PDF Batch #4092
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between">
                  <span>AI Extraction Model:</span>
                  <span className="text-signal-blue-400 font-bold">100% Verified</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between">
                  <span>Salesforce Sync Status:</span>
                  <span className="text-emerald-400 font-bold">Automated Entry</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-signal-blue-500/10 border border-slate-800 text-center">
                <p className="text-xs font-mono text-slate-300">
                  ⚡ Reduced processing turnaround by <strong className="text-white">85%</strong> for enterprise operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
