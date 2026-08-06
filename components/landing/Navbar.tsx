"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";

export function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-900/90 backdrop-blur-xl border-b border-surface-800 shadow-2xl py-3"
          : "bg-surface-950/60 backdrop-blur-md border-b border-surface-800/40 py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 via-brand-500 to-accent-emerald flex items-center justify-center shadow-glow-blue group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg text-white leading-none tracking-tight">
                  Aspire AI
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-brand-600/20 text-brand-500 border border-brand-500/30 rounded uppercase">
                  Enterprise
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase mt-0.5">
                Software Consultancy
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 font-sans text-sm">
            <Link
              href="#features"
              className="px-4 py-2 rounded-lg font-medium text-slate-300 hover:text-white hover:bg-surface-800/60 transition-all duration-200"
            >
              Capabilities
            </Link>
            <Link
              href="#social-proof"
              className="px-4 py-2 rounded-lg font-medium text-slate-300 hover:text-white hover:bg-surface-800/60 transition-all duration-200"
            >
              Trust & Proof
            </Link>
            <Link
              href="#pricing"
              className="px-4 py-2 rounded-lg font-medium text-slate-300 hover:text-white hover:bg-surface-800/60 transition-all duration-200"
            >
              Engagement Models
            </Link>
            <Link
              href="#testimonials"
              className="px-4 py-2 rounded-lg font-medium text-slate-300 hover:text-white hover:bg-surface-800/60 transition-all duration-200"
            >
              Client Outcomes
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm shadow-glow-blue transition-all duration-200"
            >
              <span>Book AI Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-xl bg-surface-800 text-slate-200 hover:text-white focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface-900 border-b border-surface-800 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3 font-sans text-sm">
              <Link
                href="#features"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg text-slate-200 hover:bg-surface-800"
              >
                <span>Capabilities</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
              <Link
                href="#social-proof"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg text-slate-200 hover:bg-surface-800"
              >
                <span>Trust & Credentials</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
              <Link
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg text-slate-200 hover:bg-surface-800"
              >
                <span>Engagement Models</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
              <Link
                href="#testimonials"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg text-slate-200 hover:bg-surface-800"
              >
                <span>Client Outcomes</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-600 text-white font-semibold text-sm"
                >
                  <span>Book AI Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
