"use client";

import React, { useState } from "react";
import { Sparkles, Building2, Globe, Cloud, Database, Cpu, CheckCircle2 } from "lucide-react";
import { AnimateIn, fadeUp } from "@/components/ui/AnimateIn";

interface NodeData {
  id: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  cx: number;
  cy: number;
  color: string;
}

const NODES: NodeData[] = [
  {
    id: "ai",
    label: "AI & Automation",
    sublabel: "GenAI, LLMs, Agents",
    icon: <Sparkles className="w-4 h-4 text-amber-400" />,
    cx: 240,
    cy: 70,
    color: "#F59E0B",
  },
  {
    id: "enterprise",
    label: "Enterprise CRM & ERP",
    sublabel: "Salesforce, Dynamics 365",
    icon: <Building2 className="w-4 h-4 text-signal-blue-400" />,
    cx: 410,
    cy: 160,
    color: "#3B82F6",
  },
  {
    id: "webmobile",
    label: "Web & Mobile Products",
    sublabel: "React, Next.js, iOS/Android",
    icon: <Globe className="w-4 h-4 text-emerald-400" />,
    cx: 360,
    cy: 330,
    color: "#10B981",
  },
  {
    id: "cloud",
    label: "Cloud & Security",
    sublabel: "AWS, Azure, ISO 27001",
    icon: <Cloud className="w-4 h-4 text-cyan-400" />,
    cx: 120,
    cy: 330,
    color: "#06B6D4",
  },
  {
    id: "data",
    label: "Data & Integration",
    sublabel: "APIs, Microservices, ETL",
    icon: <Database className="w-4 h-4 text-indigo-400" />,
    cx: 70,
    cy: 160,
    color: "#6366F1",
  },
];

export function SystemsDiagram() {
  const [activeNode, setActiveNode] = useState<string | null>("ai");

  return (
    <AnimateIn variants={fadeUp} className="relative w-full aspect-[4/3] max-w-lg mx-auto bg-slate-950/80 rounded-2xl border border-slate-800 p-4 shadow-2xl overflow-hidden group">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />

      {/* SVG Canvas for Connectors */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 480 400" fill="none">
        <defs>
          <linearGradient id="grad-pulse" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Orbit Lines */}
        <circle cx="240" cy="200" r="140" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
        <circle cx="240" cy="200" r="80" stroke="#1E293B" strokeWidth="1" />

        {/* Dynamic Lines connecting Central Business to Outer Nodes */}
        {NODES.map((node) => {
          const isActive = activeNode === node.id;
          return (
            <g key={`line-${node.id}`}>
              <line
                x1="240"
                y1="200"
                x2={node.cx}
                y2={node.cy}
                stroke={isActive ? node.color : "#334155"}
                strokeWidth={isActive ? 2 : 1}
                strokeOpacity={isActive ? 0.9 : 0.4}
                className="transition-all duration-300"
              />
              {/* Pulse animation along line */}
              {isActive && (
                <circle cx={node.cx} cy={node.cy} r="4" fill={node.color} className="animate-ping opacity-75" />
              )}
            </g>
          );
        })}
      </svg>

      {/* Central Node: YOUR BUSINESS */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-2 border-signal-blue-500 shadow-lg shadow-signal-blue-500/20 text-center p-2 transition-transform duration-300 hover:scale-105"
      >
        <div className="p-2 rounded-full bg-signal-blue-600/20 mb-1">
          <Cpu className="w-5 h-5 text-signal-blue-400 animate-pulse" />
        </div>
        <span className="font-display font-bold text-xs sm:text-sm text-white tracking-tight leading-tight">
          Your Business
        </span>
        <span className="text-[9px] font-mono text-signal-blue-300 mt-0.5">Core System</span>
      </div>

      {/* Outer Nodes */}
      {NODES.map((node) => {
        const isActive = activeNode === node.id;
        return (
          <div
            key={node.id}
            onMouseEnter={() => setActiveNode(node.id)}
            onClick={() => setActiveNode(node.id)}
            style={{
              left: `${(node.cx / 480) * 100}%`,
              top: `${(node.cy / 400) * 100}%`,
            }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer transition-all duration-300 ${
              isActive ? "scale-110 z-30" : "hover:scale-105 opacity-85 hover:opacity-100"
            }`}
          >
            <div
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border backdrop-blur-md transition-all duration-300 shadow-md ${
                isActive
                  ? "bg-slate-900/95 border-slate-600 shadow-lg"
                  : "bg-slate-950/80 border-slate-800"
              }`}
              style={{
                borderColor: isActive ? node.color : undefined,
              }}
            >
              <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                {node.icon}
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-semibold text-white leading-none">{node.label}</p>
                <p className="text-[10px] font-mono text-slate-400 mt-0.5 leading-tight">{node.sublabel}</p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Bottom Info Banner */}
      <div className="absolute bottom-3 left-4 right-4 z-20 px-3 py-2 bg-slate-900/90 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-300 font-mono text-[11px]">
          <CheckCircle2 className="w-3.5 h-3.5 text-signal-green-500" />
          <span>Integrated Engineering Ecosystem</span>
        </div>
        <span className="text-[10px] font-mono text-signal-blue-400">18+ Yrs Proven</span>
      </div>
    </AnimateIn>
  );
}
