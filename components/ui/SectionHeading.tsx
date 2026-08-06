import React from "react";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badgeText?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badgeText,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClasses =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClasses} max-w-3xl mb-12 lg:mb-16 ${className}`}>
      {badgeText && (
        <Badge variant="blue" className="mb-4">
          {badgeText}
        </Badge>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
