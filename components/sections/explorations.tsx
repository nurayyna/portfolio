"use client";

import { motion } from "framer-motion";
import { Search, Sparkles, Target, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { explorations } from "@/lib/content";

export function Explorations() {
  return (
    <section id="explorations" className="scroll-mt-24 py-24 md:py-32">
      <div className="section">
        <SectionHeading
          eyebrow="Design Thinking"
          title="Every decision has a reason behind it."
          description="A look under the hood at how I think through interface problems, from research and context to the decision and its outcome."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {explorations.map((ex, i) => (
            <Reveal key={ex.title} delay={(i % 3) * 0.06}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="surface group flex h-full flex-col rounded-3xl p-6 transition-shadow duration-300 hover:shadow-card"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-accent-wash px-2.5 py-1 text-[11px] font-medium text-accent">
                    {ex.tag}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-[17px] font-semibold text-ink">{ex.title}</h3>

                <dl className="mt-4 space-y-3.5 text-[13.5px]">
                  <Step icon={Target} label="Context">
                    {ex.context}
                  </Step>
                  <Step icon={Search} label="Research">
                    {ex.research}
                  </Step>
                  <Step icon={Sparkles} label="Decision">
                    {ex.decision}
                  </Step>
                </dl>

                <div className="mt-auto flex items-start gap-2 border-t border-zinc-100 pt-4 text-[13.5px]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <p className="leading-relaxed text-zinc-700">{ex.outcome}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Step({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-2.5">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" />
      <div>
        <dt className="font-medium text-ink">{label}</dt>
        <dd className="mt-0.5 leading-relaxed text-zinc-600">{children}</dd>
      </div>
    </div>
  );
}
