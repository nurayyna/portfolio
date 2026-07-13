"use client";

import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="border-t border-zinc-100 bg-zinc-50/40 py-24 md:py-32">
      <div className="section">
        <SectionHeading
          eyebrow="Testimonials"
          title="Words from people I'll build with."
          description="These spaces are reserved for future managers, collaborators, and clients — a placeholder for the outcomes we'll ship together."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="surface relative flex h-full flex-col rounded-3xl p-7">
                <Quote className="h-7 w-7 text-accent/25" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-zinc-600 text-pretty">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-sm font-semibold text-zinc-400">
                    ?
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold text-ink">{t.name}</p>
                    <p className="text-[12.5px] text-zinc-500">{t.title}</p>
                  </div>
                  {t.placeholder && (
                    <span className="ml-auto rounded-full border border-dashed border-zinc-300 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-zinc-400">
                      Reserved
                    </span>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
