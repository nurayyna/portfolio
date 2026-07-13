"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { about } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <div className="section">
        <SectionHeading
          eyebrow="About"
          title="I solve business problems through thoughtful user experiences."
          description={about.intro}
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* principles */}
          <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {about.principles.map((p) => (
              <RevealItem
                key={p.title}
                className="surface rounded-3xl p-6 transition-shadow duration-300 hover:shadow-card"
              >
                <h3 className="text-[15px] font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-zinc-600">{p.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* journey timeline */}
          <div>
            <Reveal>
              <p className="eyebrow kicker-dot mb-8">The journey so far</p>
            </Reveal>
            <ol className="relative border-l border-zinc-200 pl-8">
              {about.journey.map((step, i) => (
                <Reveal
                  as="li"
                  key={step.title}
                  delay={i * 0.08}
                  className="relative pb-10 last:pb-0"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.1, type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-accent shadow-[0_0_0_4px_rgba(79,70,229,0.12)]"
                  />
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                    {step.year}
                  </span>
                  <h4 className="mt-1 text-lg font-semibold text-ink">{step.title}</h4>
                  <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-zinc-600">
                    {step.body}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
