import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS_DATA } from "@/data/testimonialsData";
import { TestimonialItem } from "@/types";
import { Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  const featured = TESTIMONIALS_DATA[0]; // Remi Gangarossa
  const secondary = TESTIMONIALS_DATA.slice(1); // John Ragsdale & Offshore Australia

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Verified Client Testimonials"
          title="What executives say about engineering partnerships with Aspire."
          description="Direct feedback from enterprise operations leaders, CEOs, and technology Directors."
          align="center"
        />

        {/* Featured Testimonial Spotlight */}
        {featured && (
          <div className="mb-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative">
            <Quote className="w-12 h-12 text-signal-blue-500/20 absolute top-6 right-8 pointer-events-none" />

            <div className="flex items-center gap-1 mb-6 text-amber-400">
              {[...Array(featured.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <blockquote className="text-lg sm:text-xl lg:text-2xl font-sans text-slate-200 leading-relaxed italic">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-display text-lg font-bold text-white">{featured.author}</div>
                <div className="text-xs font-mono text-signal-blue-400 mt-0.5">
                  {featured.title} · <strong className="text-slate-300 font-sans">{featured.company}</strong>
                </div>
              </div>
              <span className="px-3 py-1 text-xs font-mono bg-slate-800 text-slate-300 rounded-full border border-slate-700">
                2+ Years Partnership
              </span>
            </div>
          </div>
        )}

        {/* Secondary Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondary.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-1 mb-4 text-amber-400">
          {[...Array(item.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        <blockquote className="text-sm sm:text-base font-sans text-slate-300 leading-relaxed italic">
          &ldquo;{item.quote}&rdquo;
        </blockquote>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/80">
        <div className="font-display text-base font-bold text-white">{item.author}</div>
        <div className="text-xs font-mono text-slate-400 mt-0.5">
          {item.title} — <span className="text-slate-300 font-sans">{item.company}</span>
        </div>
      </div>
    </div>
  );
}
