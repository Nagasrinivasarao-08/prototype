"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

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

/** Container that staggers children */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// ── AnimateIn ────────────────────────────────────────────────────────────────
// Wraps any children with a scroll-triggered animation.
// Usage: <AnimateIn variants={fadeUp}> ... </AnimateIn>

interface AnimateInProps {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  as?: keyof JSX.IntrinsicElements;
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

// ── AnimateStagger ───────────────────────────────────────────────────────────
// Wraps a list — applies staggerContainer to the wrapper and fadeUp to each child.
// Usage:
//   <AnimateStagger className="grid grid-cols-3 gap-6">
//     {items.map(i => <AnimateStaggerItem key={i.id}> ... </AnimateStaggerItem>)}
//   </AnimateStagger>

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
