"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Rocket, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { career } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons = [GraduationCap, Briefcase, Building2, Rocket];

// Subtle progression across the timeline: Foundation → Craft → Scale → Future
const phaseColors = ["#461220", "#8c2f39", "#b23a48", "#fcb9b2"];

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
              const color = phaseColors[i] ?? "#8c2f39";
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
                        isFuture && "border-dashed",
                      )}
                      style={
                        isCurrent
                          ? { background: color, color: "#fff", borderColor: "transparent", boxShadow: `0 0 0 5px ${color}1f` }
                          : isFuture
                            ? { background: "#fff", color, borderColor: `${color}66` }
                            : { background: "#fff", color, borderColor: `${color}26` }
                      }
                    >
                      <Icon className="h-6 w-6" />
                    </motion.span>

                    <div
                      className={cn(
                        "rounded-3xl border p-5 transition-shadow duration-300",
                        isCurrent ? "shadow-soft" : "border-zinc-100 bg-white hover:shadow-soft",
                      )}
                      style={
                        isCurrent
                          ? { borderColor: `${color}33`, background: `${color}0d` }
                          : undefined
                      }
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className="font-mono text-[11px] uppercase tracking-[0.14em]"
                          style={{ color }}
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
