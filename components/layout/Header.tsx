"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { MobileDrawer } from "./MobileDrawer";
import { Menu, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Services",     href: "#services" },
  { label: "Our Work",     href: "#work" },
  { label: "Achievements", href: "#about" },
  { label: "FAQs",         href: "#faq" },
  { label: "Contact",      href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-white/90 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* Left — Logo */}
            <div className="flex-shrink-0">
              <CompanyLogo />
            </div>

            {/* Center — Floating pill nav */}
            <nav
              className="hidden xl:flex items-center gap-0.5 px-2 py-2 rounded-full border border-slate-200 bg-white shadow-sm text-sm font-sans"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-1.5 rounded-full font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right — CTA */}
            <div className="hidden xl:flex items-center flex-shrink-0">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 min-h-[40px]"
              >
                <span>Book a Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile — Hamburger */}
            <div className="flex xl:hidden items-center">
              <button
                onClick={() => setIsMobileOpen(true)}
                aria-expanded={isMobileOpen}
                aria-controls="mobile-navigation-drawer"
                className="p-2.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Open mobile navigation"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      <MobileDrawer isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
