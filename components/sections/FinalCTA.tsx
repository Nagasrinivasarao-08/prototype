import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, MessageSquare, ShieldCheck } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-signal-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-signal-blue-500/10 border border-signal-blue-500/30 text-signal-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          Senior Engineering Advisory
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Have a technology challenge worth solving?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto">
          Bring us a real engineering problem and we will tell you plainly whether we can solve it — and what that solution would cost.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Book a Consultation
          </Button>
          <Button
            href="#contact"
            variant="outline"
            size="lg"
            icon={<MessageSquare className="w-5 h-5 text-slate-400" />}
            className="border-slate-700 text-slate-200 hover:bg-slate-800"
          >
            Contact Our Team
          </Button>
        </div>

        <div className="pt-6 text-xs font-mono text-slate-400">
          Direct Access to Principal Consultants · Non-Disclosure Assured · Response Within 1 Business Day
        </div>
      </div>
    </section>
  );
}
