"use client";

import { motion } from "framer-motion";
import { BarChart3, Code2, Database, Palette } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { skillGroups } from "@/lib/content";

const icons: Record<string, React.ElementType> = {
  Frontend: Code2,
  "Data Visualization": BarChart3,
  "Backend & Data": Database,
  Design: Palette,
};

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-zinc-100 bg-zinc-50/40 py-24 md:py-32">
      <div className="section">
        <SectionHeading
          eyebrow="Capabilities"
          title="The toolkit behind the products."
          description="A stack chosen for building maintainable, data-dense, product-grade interfaces — across frontend, visualization, data, and design."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, gi) => {
            const Icon = icons[group.category] ?? Code2;
            return (
              <Reveal key={group.category} delay={(gi % 2) * 0.08}>
                <div className="surface h-full rounded-4xl p-7 transition-shadow duration-300 hover:shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-[17px] font-semibold text-ink">{group.category}</h3>
                      <p className="text-[13px] text-zinc-500">{group.blurb}</p>
                    </div>
                  </div>

                  <RevealGroup className="mt-6 flex flex-wrap gap-2" stagger={0.04}>
                    {group.skills.map((s) => (
                      <RevealItem key={s.name}>
                        <motion.span
                          whileHover={{ y: -2 }}
                          className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-[13.5px] font-medium text-zinc-700 shadow-ring transition-colors hover:border-accent/40 hover:text-ink"
                        >
                          {s.name}
                        </motion.span>
                      </RevealItem>
                    ))}
                  </RevealGroup>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
