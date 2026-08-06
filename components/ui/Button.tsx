import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  icon,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-signal-blue-500 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-signal-blue-600 hover:bg-signal-blue-700 text-white shadow-md hover:shadow-lg shadow-signal-blue-600/20 border border-transparent",
    secondary:
      "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 shadow-sm",
    outline:
      "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700",
    ghost:
      "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-transparent",
  };

  const sizes = {
    sm: "text-xs px-3.5 py-2 gap-1.5 min-h-[38px]",
    md: "text-sm px-5 py-2.5 gap-2 min-h-[44px]",
    lg: "text-base px-6 py-3.5 gap-2.5 min-h-[50px]",
  };

  const combinedClass = twMerge(clsx(baseStyles, variants[variant], sizes[size], className));

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {children}
        {icon && <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
}
