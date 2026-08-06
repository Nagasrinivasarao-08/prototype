import React from "react";
import Link from "next/link";
import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { Linkedin, Twitter, Facebook, Award, Star, ShieldCheck, CheckCircle2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 font-sans border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">

        {/* Top Brand & Recognition Section */}
        <div className="pb-12 border-b border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-2 rounded-lg inline-block">
              <CompanyLogo />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              We provide quality services at affordable rates to the clients. When it comes to delivering high quality solution in less time and less price, there is no better name than Aspire Software Consultancy.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2 pt-2">
              <a href="https://www.linkedin.com/company/aspire-software-consultancy/" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/Aspire_ASC" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/AspireSoftwareConsultancy/" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Industry Recognition Badges */}
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[10px] font-mono uppercase font-bold text-slate-500 tracking-wider block">
              Recognized Industry Leader
            </span>
            <div className="flex flex-wrap gap-2.5">
              <div className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="font-semibold text-[11px]">Clutch Top Rated</span>
              </div>
              <div className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-semibold text-[11px]">SiliconIndia 25 Promising</span>
              </div>
              <div className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold text-[11px]">GoodFirms Verified</span>
              </div>
              <div className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-purple-400" />
                <span className="font-semibold text-[11px]">Top App Developers</span>
              </div>
              <div className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span className="font-semibold text-[11px]">SoftwareWorld Recognized</span>
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid — 4 Columns */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Column 1: Solutions */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li><Link href="#services" className="hover:text-white transition-colors">Salesforce CRM</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">E-Commerce Site</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Dot Net Core Development</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Mobile Development</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">MS Dynamics CRM</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">ERP Solutions</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Salesforce Reseller</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">IT Consulting & Advisory</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">IOT Solutions</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">ASP .NET Development</Link></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">Why Us</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">Team</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="https://aspiresoftwareconsultancy.com/PrivacyPolicy.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="https://aspiresoftwareconsultancy.com/TermsAndConditions.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="https://aspiresoftwareconsultancy.com/TermsAndConditions.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Refund & Cancellation Policy</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li><Link href="#insights" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#work" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#achievements" className="hover:text-white transition-colors">Review & Awards</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#insights" className="hover:text-white transition-colors">Infographics</Link></li>
              <li><Link href="#insights" className="hover:text-white transition-colors">Video</Link></li>
              <li><Link href="#work" className="hover:text-white transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          {/* Column 4: Hire Developers */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
              Hire Developers
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li><Link href="#contact" className="hover:text-white transition-colors">Hire ASP .NET Developers</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Hire .NET Developers</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Hire Angular Developers</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Hire Salesforce Developers</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {currentYear} Aspire Software Consultancy. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://aspiresoftwareconsultancy.com/PrivacyPolicy.html" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="https://aspiresoftwareconsultancy.com/TermsAndConditions.html" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
