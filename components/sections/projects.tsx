"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Lightbulb,
  Palette,
  Puzzle,
  Target,
  TrendingUp,
  UserRound,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { projects, type Project } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Projects() {
  const [open, setOpen] = useState<string | null>(projects[0]?.slug ?? null);

  return (
    <section id="work" className="scroll-mt-24 border-t border-zinc-100 bg-zinc-50/40 py-24 md:py-32">
      <div className="section">
        <SectionHeading
          eyebrow="Featured Work"
          title="Case studies, not screenshots."
          description="Each project starts with the business problem before the technology. Here's how complex workflows became products people trust."
        />

        <div className="mt-14 flex flex-col gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <ProjectCard
                project={project}
                isOpen={open === project.slug}
                onToggle={() => setOpen(open === project.slug ? null : project.slug)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  isOpen,
  onToggle,
}: {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "surface overflow-hidden rounded-4xl transition-all duration-500",
        isOpen ? "shadow-card" : "hover:shadow-soft",
      )}
      style={
        isOpen
          ? { boxShadow: `0 24px 64px -32px ${project.accent}55` }
          : undefined
      }
    >
      {/* header — always visible */}
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-6 p-6 text-left md:p-8"
        aria-expanded={isOpen}
      >
        <span
          className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-mono text-sm font-semibold sm:flex"
          style={{ background: `${project.accent}12`, color: project.accent }}
        >
          {project.index}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              {project.name}
            </h3>
            <span
              className="rounded-full px-2.5 py-0.5 text-[11px] font-medium"
              style={{ background: `${project.accent}12`, color: project.accent }}
            >
              {project.year}
            </span>
          </div>
          <p className="mt-1 text-[15px] text-zinc-600">{project.tagline}</p>
          <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-400">
            {project.category}
          </p>
        </div>

        <span
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-all duration-300",
            isOpen && "rotate-180 bg-navy text-white",
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <CaseStudy project={project} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CaseStudy({ project }: { project: Project }) {
  return (
    <div className="border-t border-zinc-100 px-6 pb-8 pt-8 md:px-8">
      {/* summary + stack */}
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-[17px] leading-relaxed text-zinc-700 text-pretty">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-[12.5px] font-medium text-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* results */}
        <div className="grid gap-3 rounded-3xl border border-zinc-100 bg-zinc-50/60 p-5 sm:grid-cols-3 lg:grid-cols-1">
          <p className="col-span-full mb-1 flex items-center gap-2 text-[13px] font-semibold text-ink">
            <TrendingUp className="h-4 w-4" style={{ color: project.accent }} />
            Results
          </p>
          {project.results.map((r) => (
            <div key={r.label}>
              <p className="text-lg font-semibold tracking-tight text-ink">{r.value}</p>
              <p className="text-[12.5px] leading-snug text-zinc-500">{r.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* problem + role */}
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Block icon={Target} accent={project.accent} title="The Problem">
          {project.problem}
        </Block>
        <Block icon={UserRound} accent={project.accent} title="My Role">
          {project.role}
        </Block>
      </div>

      {/* responsibilities */}
      <div className="mt-8">
        <BlockLabel icon={Puzzle} accent={project.accent}>
          Responsibilities
        </BlockLabel>
        <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
          {project.responsibilities.map((r) => (
            <li key={r} className="flex items-start gap-2.5 text-[14.5px] text-zinc-700">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: project.accent }}
              />
              {r}
            </li>
          ))}
        </ul>
      </div>

      {/* challenges + design decisions */}
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <BlockLabel icon={Wrench} accent={project.accent}>
            Challenges
          </BlockLabel>
          <div className="mt-4 space-y-4">
            {project.challenges.map((c) => (
              <div key={c.title} className="rounded-2xl border border-zinc-100 p-4">
                <h5 className="text-[14px] font-semibold text-ink">{c.title}</h5>
                <p className="mt-1 text-[13.5px] leading-relaxed text-zinc-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <BlockLabel icon={Palette} accent={project.accent}>
            Design Decisions
          </BlockLabel>
          <div className="mt-4 space-y-4">
            {project.designDecisions.map((d) => (
              <div key={d.title} className="rounded-2xl border border-zinc-100 p-4">
                <h5 className="text-[14px] font-semibold text-ink">{d.title}</h5>
                <p className="mt-1 text-[13.5px] leading-relaxed text-zinc-600">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* implementation + lessons */}
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Block icon={Wrench} accent={project.accent} title="Implementation">
          {project.implementation}
        </Block>
        <Block icon={Lightbulb} accent={project.accent} title="Lessons Learned">
          {project.lessons}
        </Block>
      </div>
    </div>
  );
}

function BlockLabel({
  icon: Icon,
  accent,
  children,
}: {
  icon: React.ElementType;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <p className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-ink">
      <Icon className="h-4 w-4" style={{ color: accent }} />
      {children}
    </p>
  );
}

function Block({
  icon,
  accent,
  title,
  children,
}: {
  icon: React.ElementType;
  accent: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-zinc-100 bg-white p-5">
      <BlockLabel icon={icon} accent={accent}>
        {title}
      </BlockLabel>
      <p className="mt-3 text-[14.5px] leading-relaxed text-zinc-600 text-pretty">{children}</p>
    </div>
  );
}
