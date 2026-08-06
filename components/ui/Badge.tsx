import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "green" | "slate" | "outline";
  className?: string;
}

export function Badge({ children, variant = "blue", className }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase";

  const variants = {
    blue: "bg-signal-blue-50 text-signal-blue-700 border border-signal-blue-200 dark:bg-signal-blue-600/10 dark:text-signal-blue-400 dark:border-signal-blue-500/20",
    green:
      "bg-signal-green-50 text-signal-green-600 border border-signal-green-200 dark:bg-signal-green-500/10 dark:text-signal-green-400 dark:border-signal-green-500/20",
    slate:
      "bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
    outline:
      "bg-transparent text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700",
  };

  return (
    <span className={twMerge(clsx(baseStyles, variants[variant], className))}>
      {children}
    </span>
  );
}
