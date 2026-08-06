"use client";

import React from "react";
import { Star, MessageSquare } from "lucide-react";

const TESTIMONIALS = [
  {
    id: "remi-gangarossa",
    author: "Remi Gangarossa",
    title: "Chief Operations Officer",
    company: "Renovo Financial, LLC",
    quote:
      "Bakul from Aspire Software Consultancy has been integral in implementing Renovo’s manual business processes into the Salesforce system. He has an amazing team that works around the clock to deliver on all of our requests. Since partnering with his team, we have been freed up to spend more of our time thinking of creative ways to improve our business, leaving the execution piece to him. Partnering with him has transformed our business.",
    rating: 5,
  },
  {
    id: "john-ragsdale-esp",
    author: "John Ragsdale",
    title: "Chief Information Officer",
    company: "EyeCare Services Partners (ESP)",
    quote:
      "Great development team! Great architect skills, great ideas, experience with many different types of apps, etc.",
    rating: 5,
  },
  {
    id: "john-ragsdale-tap",
    author: "John Ragsdale",
    title: "Founder CEO & CIO",
    company: "#1 LSU100 Fastest Growing Business",
    quote:
      "Lalit and his app dev team have developed 5+ large scale custom apps for TAP clients. Their partnership, attention to detail, thoroughness, and quality have all been strengths throughout the building of these apps. In addition, Lalit's team stands behind their work and continually supports the apps they build. I highly recommend them.",
    rating: 5,
  },
  {
    id: "offshore-australia",
    author: "Offshore Australia",
    title: "Workforce Strategy Development",
    company: "National & International Sourcing",
    quote:
      "Excellent project management, excellent listening and execution by his team of our industry App. At present developing the next industry App with Lalit's team members.",
    rating: 5,
  },
  {
    id: "mans-johansson",
    author: "Måns Johansson",
    title: "Network Manager",
    company: "Dentnet Group",
    quote:
      "Aspire helping us create a unique digital platform used in the Dental market. From first contact to deployment of platform, and ongoing it has been professional and swift. The Dentnet group highly recommends Aspire software.",
    rating: 5,
  },
  {
    id: "rob-mcnicoll",
    author: "Rob McNicoll",
    title: "Director",
    company: "Copper Monkey Ltd.",
    quote:
      "Overall I strongly recommend Aspire. I’ve worked with many different suppliers over the last decade, but in the last 3 years have only used Aspire as they have consistently provided the performance I require in my business.",
    rating: 5,
  },
  {
    id: "craig-vaughan",
    author: "Craig Vaughan",
    title: "Founder & Director",
    company: "BrokerEngine",
    quote:
      "Aspire team has worked incredibly hard and taken ownership of the BrokerEngine product development and support/enhancements project as of their own product. I would highly recommend Aspire Team for any such software project development.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#F5F5F7] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Client Feedback
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Trusted by CIOs, COOs, & Technology Leaders
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Verbatim client feedback from long-term engineering partnerships across North America, UK, Europe, and Australia.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    Verified Partner
                  </span>
                </div>

                <blockquote className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-sm font-bold text-slate-900">{t.author}</h4>
                  <p className="text-[11px] font-sans text-slate-500">{t.title} · <span className="text-slate-700 font-medium">{t.company}</span></p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-display font-bold text-brand-600 text-xs shrink-0">
                  {t.author.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
