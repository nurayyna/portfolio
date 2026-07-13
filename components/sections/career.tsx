"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Rocket, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { career } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons = [GraduationCap, Briefcase, Building2, Rocket];

export function Career() {
  return (
    <section id="journey" className="scroll-mt-24 py-24 md:py-32">
      <div className="section">
        <SectionHeading
          eyebrow="Career Timeline"
          title="From multimedia computing to product engineering."
          description="The path so far — and where it's heading."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 top-7 hidden h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-200 to-transparent lg:block" />

          <div className="grid gap-6 lg:grid-cols-4">
            {career.map((item, i) => {
              const Icon = icons[i] ?? Briefcase;
              const isCurrent = item.status === "current";
              const isFuture = item.status === "future";
              return (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div className="relative">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.15, type: "spring", stiffness: 260, damping: 18 }}
                      className={cn(
                        "relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border",
                        isCurrent
                          ? "border-transparent bg-accent text-white shadow-[0_0_0_5px_rgba(79,70,229,0.12)]"
                          : isFuture
                            ? "border-dashed border-zinc-300 bg-white text-zinc-400"
                            : "border-zinc-200 bg-white text-ink shadow-ring",
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.span>

                    <div
                      className={cn(
                        "rounded-3xl border p-5 transition-shadow duration-300",
                        isCurrent
                          ? "border-accent/20 bg-accent-wash/50 shadow-soft"
                          : "border-zinc-100 bg-white hover:shadow-soft",
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={cn(
                            "font-mono text-[11px] uppercase tracking-[0.14em]",
                            isCurrent ? "text-accent" : "text-zinc-400",
                          )}
                        >
                          {item.phase}
                        </span>
                        <span className="text-[11px] text-zinc-400">{item.period}</span>
                      </div>
                      <h3 className="mt-2 text-[16px] font-semibold text-ink">{item.title}</h3>
                      <p className="text-[13px] font-medium text-zinc-500">{item.org}</p>
                      <p className="mt-2.5 text-[13.5px] leading-relaxed text-zinc-600">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
