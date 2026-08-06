import React from "react";
import { ShieldCheck, Award, Star, Cloud, Code2, CheckCircle2 } from "lucide-react";

export function TrustBar() {
  const primaryPartnerships = [
    { name: "Salesforce Partner", detail: "Registered Consulting Partner", icon: <Cloud className="w-4 h-4 text-sky-600" /> },
    { name: "ISO 27001:2022 Certified", detail: "Information Security Management", icon: <ShieldCheck className="w-4 h-4 text-emerald-600" /> },
    { name: "Salesforce AppExchange", detail: "App Developer", icon: <Cloud className="w-4 h-4 text-sky-500" /> },
    { name: "Microsoft Technology Expertise", detail: "Dynamics 365, .NET, Azure", icon: <Code2 className="w-4 h-4 text-blue-600" /> },
  ];

  const industryRecognition = [
    { name: "Clutch", detail: "Top Rated Software Developer" },
    { name: "GoodFirms", detail: "Verified Consulting Firm" },
    { name: "SiliconIndia", detail: "25 Most Promising IT Companies" },
    { name: "SoftwareWorld", detail: "Top Custom Software Developers" },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-10 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Primary Certifications & Partnerships Group */}
          <div className="lg:col-span-7 space-y-4">
            <h4 className="text-[10px] font-sans uppercase font-bold text-slate-400 tracking-wider">
              Primary Certifications & Partnerships
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {primaryPartnerships.map((partner, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200/60"
                >
                  <div className="p-2 rounded bg-white border border-slate-200 shadow-3xs">
                    {partner.icon}
                  </div>
                  <div>
                    <span className="text-xs font-sans font-bold text-slate-900 block leading-tight">
                      {partner.name}
                    </span>
                    <span className="text-[10px] font-sans text-slate-500 block leading-tight mt-0.5">
                      {partner.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider on desktop */}
          <div className="hidden lg:block lg:col-span-1 h-full w-[1px] bg-slate-200 mx-auto self-stretch" />

          {/* Industry Recognition Group */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] font-sans uppercase font-bold text-slate-400 tracking-wider">
              Industry Recognition
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {industryRecognition.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-white border border-slate-200/80 hover:border-slate-300 transition-colors shadow-4xs flex flex-col justify-between"
                >
                  <span className="text-xs font-sans font-bold text-slate-900 leading-tight">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-sans text-slate-500 leading-tight mt-1.5 block">
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
