import React from "react";

const CHALLENGES = [
  {
    title: "Outdated Legacy Systems",
    description: "Aging software and fragmented databases block growth, create security risks, and make simple changes expensive.",
    gradient: "from-slate-900 via-[#1E1B4B] to-slate-950",
    visual: (
      <div className="w-full h-full relative p-4 flex flex-col justify-center overflow-hidden">
        {/* Floating Glass Panel */}
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-3.5 shadow-2xl backdrop-blur-md space-y-2 relative z-10">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              <span className="text-[10px] font-mono text-slate-400 ml-1">Legacy_Monolith_v1.4.dll</span>
            </div>
            <span className="text-[9px] font-mono bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded border border-rose-500/30">
              DEPRECATED
            </span>
          </div>
          <div className="space-y-1.5 font-mono text-[10px]">
            <div className="text-slate-500">{"// Warning: Unsupported runtime framework"}</div>
            <div className="text-rose-400 font-medium">ERR_OUTDATED_DATABASE_SCHEMA (0x80040154)</div>
            <div className="flex items-center gap-2 text-amber-300/90 text-[9px] pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>High Maintenance Overhead · Security Risk</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "No In-House Technical Expertise",
    description: "Building and retaining skilled engineering talent is expensive. Without the right team, critical projects stall or ship broken.",
    gradient: "from-slate-900 via-[#1E293B] to-[#0F172A]",
    visual: (
      <div className="w-full h-full relative p-4 flex flex-col justify-center overflow-hidden">
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-3.5 shadow-2xl backdrop-blur-md space-y-2.5 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-display font-bold text-white">Engineering Pod Status</span>
            <span className="text-[9px] font-mono bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded border border-amber-500/30">
              VACANCY ALERT
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
            <div className="p-2 rounded bg-slate-800/80 border border-slate-700 text-slate-300">
              <span className="text-slate-400 block text-[9px]">Senior Architect:</span>
              <span className="text-rose-400 font-bold">Unassigned ⚠️</span>
            </div>
            <div className="p-2 rounded bg-slate-800/80 border border-slate-700 text-slate-300">
              <span className="text-slate-400 block text-[9px]">Salesforce Lead:</span>
              <span className="text-rose-400 font-bold">Unassigned ⚠️</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Inefficient Manual Processes",
    description: "Teams waste hours on repetitive data entry, approval chains, and status updates that should be automated.",
    gradient: "from-slate-900 via-[#311B92]/40 to-slate-950",
    visual: (
      <div className="w-full h-full relative p-4 flex flex-col justify-center overflow-hidden">
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-3.5 shadow-2xl backdrop-blur-md space-y-2 relative z-10">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-[11px] font-display font-bold text-white">Manual Task Backlog</span>
            <span className="text-[9px] font-mono bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded border border-rose-500/30">
              14.5 HRS/WK WASTED
            </span>
          </div>
          <div className="space-y-1.5 text-[10px] font-mono text-slate-300">
            <div className="flex items-center justify-between p-1.5 rounded bg-slate-800/60">
              <span>Manual Excel Data Entry</span>
              <span className="text-rose-400 font-bold">Pending Approval</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-slate-800/60">
              <span>Paper Contract Processing</span>
              <span className="text-amber-400 font-bold">Slow Handoff</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Failed or Delayed Software Projects",
    description: "Poorly scoped engagements, wrong vendor choices, and unclear requirements lead to over-budget, late deliveries.",
    gradient: "from-slate-900 via-[#881337]/30 to-slate-950",
    visual: (
      <div className="w-full h-full relative p-4 flex flex-col justify-center overflow-hidden">
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-3.5 shadow-2xl backdrop-blur-md space-y-2 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-display font-bold text-white">Project Timeline Alert</span>
            <span className="text-[9px] font-mono bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded border border-rose-500/30">
              +6 WEEKS DELAYED
            </span>
          </div>
          {/* Timeline chart mockup */}
          <div className="space-y-2 pt-1 font-mono text-[9px]">
            <div>
              <div className="flex justify-between text-slate-400 mb-1">
                <span>Phase 2 Release</span>
                <span className="text-rose-400 font-bold">Over Budget (+65%)</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-rose-500 w-3/4 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Disconnected Systems & Data Silos",
    description: "CRMs, ERPs, and databases that don't talk to each other force manual re-entry and create conflicting records.",
    gradient: "from-slate-900 via-[#1E1B4B] to-slate-950",
    visual: (
      <div className="w-full h-full relative p-4 flex flex-col justify-center overflow-hidden">
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-3.5 shadow-2xl backdrop-blur-md space-y-2.5 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-display font-bold text-white">System Integration Status</span>
            <span className="text-[9px] font-mono bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded border border-rose-500/30">
              DISCONNECTED
            </span>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-300 pt-1">
            <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700">Salesforce CRM</span>
            <span className="text-rose-500 font-bold">⚡ Broken Sync</span>
            <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700">ERP Database</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Security & Compliance Gaps",
    description: "Unaudited software, unpatched systems, and weak access controls expose businesses to breaches and regulatory penalties.",
    gradient: "from-slate-900 via-[#991B1B]/30 to-slate-950",
    visual: (
      <div className="w-full h-full relative p-4 flex flex-col justify-center overflow-hidden">
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-3.5 shadow-2xl backdrop-blur-md space-y-2 relative z-10">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-[11px] font-display font-bold text-white">Security Vulnerability Audit</span>
            <span className="text-[9px] font-mono bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded border border-rose-500/30">
              AUDIT FAILURE
            </span>
          </div>
          <div className="space-y-1.5 text-[10px] font-mono text-slate-300">
            <div className="flex items-center justify-between">
              <span>Unpatched Security Flaws:</span>
              <span className="text-rose-400 font-bold">3 High Severity</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Compliance Gap:</span>
              <span className="text-amber-400 font-bold">ISO 27001 Audit Needed</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export function ChallengesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F5F7] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered pill badge + heading */}
        <div className="text-center mb-16 space-y-5">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-sans font-semibold">
            Solutions Beyond the Problem
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 max-w-2xl mx-auto leading-tight">
            The Challenges Modern Businesses Face
          </h2>
        </div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHALLENGES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Dark High-Tech Visual Area */}
              <div className={`h-44 w-full bg-gradient-to-br ${item.gradient} relative border-b border-slate-800/50`}>
                {item.visual}
              </div>

              {/* Card body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  {/* Problem badge */}
                  <span className="inline-block text-[11px] font-semibold font-mono text-rose-600 bg-rose-50 border border-rose-100 px-2.5 py-0.5 rounded-md mb-2">
                    Problem
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-slate-900 leading-snug mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
