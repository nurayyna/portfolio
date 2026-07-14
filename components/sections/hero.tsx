"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { DashboardIllustration } from "@/components/dashboard-illustration";
import { hero, profile } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 md:pt-24">
      {/* background texture */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dotgrid mask-fade-y opacity-60" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(79,70,229,0.08),transparent)]" />
      </div>

      <div className="section grid items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        {/* copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 shadow-ring backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-soft" />
            <span className="text-xs font-medium text-zinc-600">{profile.availability}</span>
          </motion.div>

          <h1 className="text-display-lg font-semibold text-ink text-balance">
            {hero.headline.split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.03 }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
            className="mt-6 max-w-xl text-pretty text-[17px] leading-relaxed text-zinc-600"
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[15px] font-medium text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-ink-soft hover:shadow-card"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 text-[15px] font-medium text-ink shadow-ring transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-soft"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <div className="flex items-center gap-1.5">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-ring transition-all hover:-translate-y-0.5 hover:text-ink hover:shadow-soft"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-ring transition-all hover:-translate-y-0.5 hover:text-ink hover:shadow-soft"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* metrics */}
          <motion.dl
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.75 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-zinc-100 pt-8"
          >
            {hero.metrics.map((m) => (
              <div key={m.label}>
                <dt className="text-2xl font-semibold tracking-tight text-ink">{m.value}</dt>
                <dd className="mt-1 text-[13px] leading-snug text-zinc-500">{m.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* visual */}
        <div className="lg:pl-6">
          <DashboardIllustration />
        </div>
      </div>

      {/* trust marquee */}
      <TrustStrip />
    </section>
  );
}

function TrustStrip() {
  const items = [
    "Enterprise Dashboards",
    "Reporting Systems",
    "Data Visualization",
    "AI-Assisted Workflows",
    "Design Systems",
    "Product Thinking",
  ];
  const row = [...items, ...items];
  return (
    <div className="border-y border-zinc-100 bg-zinc-50/40 py-5">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
          {row.map((label, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-mono text-xs uppercase tracking-[0.18em] text-zinc-400"
            >
              {label}
              <span className="h-1 w-1 rounded-full bg-zinc-300" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
