"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { X, ChevronRight, Mail, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 xl:hidden" id="mobile-navigation-drawer">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white text-slate-900 shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between pb-6 border-b border-slate-200">
            <CompanyLogo />
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-6 space-y-1 font-sans text-sm" aria-label="Mobile Navigation">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg font-medium text-slate-700 hover:bg-slate-50 min-h-[44px]"
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="#about"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg font-medium text-slate-700 hover:bg-slate-50 min-h-[44px]"
            >
              <span>About</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="#services"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg font-medium text-slate-700 hover:bg-slate-50 min-h-[44px]"
            >
              <span>Services</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="#hrms-product"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg font-medium text-slate-700 hover:bg-slate-50 min-h-[44px]"
            >
              <span>Products (ASC HRMS)</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="#work"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg font-medium text-slate-700 hover:bg-slate-50 min-h-[44px]"
            >
              <span>Portfolio</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="#technology"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg font-medium text-slate-700 hover:bg-slate-50 min-h-[44px]"
            >
              <span>Technology</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="#contact"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg font-medium text-slate-700 hover:bg-slate-50 min-h-[44px]"
            >
              <span>Careers</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="#contact"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg font-medium text-slate-700 hover:bg-slate-50 min-h-[44px]"
            >
              <span>Contact Us</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </nav>
        </div>

        <div className="p-6 border-t border-slate-200 bg-slate-50 space-y-4">
          <Link
            href="#contact"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-slate-900 text-white font-medium text-sm shadow-sm min-h-[44px]"
          >
            Schedule a Free Consultation
          </Link>

          <div className="space-y-1 text-xs text-slate-600 font-sans pt-1">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{COMPANY_INFO.primaryEmail}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>US: {COMPANY_INFO.usPhone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
