"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate, Variants } from "framer-motion";

// ── Shared variants ─────────────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1 },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

// ── AnimateIn Component ──────────────────────────────────────────────────────

interface AnimateInProps {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function AnimateIn({
  children,
  variants = fadeUp,
  delay = 0,
  duration = 0.5,
  className,
  once = true,
  amount = 0.2,
}: AnimateInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── AnimateStagger Component ──────────────────────────────────────────────────

interface AnimateStaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  amount?: number;
}

export function AnimateStagger({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
  amount = 0.1,
}: AnimateStaggerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerDelay, delayChildren: 0.05 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimateStaggerItem({
  children,
  className,
  variants = fadeUp,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}) {
  return (
    <motion.div
      variants={variants}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── CountUp Number Component ─────────────────────────────────────────────────
// Counts from 0 up to `targetNumber` when scrolled into view.
// E.g. <CountUp from={0} to={18} suffix="+" duration={2} />

interface CountUpProps {
  to: number;
  from?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({
  to,
  from = 0,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(value) {
          setDisplayValue(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

// ── FloatingElement Component ────────────────────────────────────────────────
// Gives elements a subtle, continuous levitating animation.

interface FloatingElementProps {
  children: React.ReactNode;
  duration?: number;
  distance?: number;
  delay?: number;
  className?: string;
}

export function FloatingElement({
  children,
  duration = 4,
  distance = 8,
  delay = 0,
  className = "",
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [-distance / 2, distance / 2, -distance / 2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── GlowCard Component (Spotlight cursor hover effect) ─────────────────────

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({
  children,
  className = "",
  glowColor = "rgba(59, 130, 246, 0.15)",
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: -200, y: -200, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setCursor((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10 rounded-[inherit]"
        style={{
          opacity: cursor.opacity,
          background: `radial-gradient(400px circle at ${cursor.x}px ${cursor.y}px, ${glowColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
}

// ── Infinite Marquee Component ─────────────────────────────────────────────

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export function Marquee({
  children,
  speed = 25,
  direction = "left",
  className = "",
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap flex ${className}`}>
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex shrink-0 items-center gap-8 min-w-full"
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
