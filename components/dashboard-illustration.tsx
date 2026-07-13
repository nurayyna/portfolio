"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, ArrowUpRight, Bot, CheckCircle2 } from "lucide-react";

/**
 * A self-contained, animated "enterprise dashboard" mockup used as the hero visual.
 * Pure CSS/SVG + framer-motion — no images, fully responsive.
 */
export function DashboardIllustration() {
  const reduce = useReducedMotion();

  const bars = [42, 58, 51, 67, 60, 78, 71, 88];
  const line = [22, 40, 34, 52, 46, 64, 58, 76, 70, 84];

  return (
    <div className="relative">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(79,70,229,0.10),transparent_70%)] blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 24, rotateX: 6 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="surface relative overflow-hidden rounded-[1.75rem] p-4 shadow-float"
        style={{ perspective: 1000 }}
      >
        {/* window chrome */}
        <div className="mb-4 flex items-center gap-2 px-1">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
          <div className="ml-3 flex items-center gap-2 rounded-md bg-zinc-100 px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
            <span className="font-mono text-[10px] tracking-wide text-zinc-500">
              vector / monitoring
            </span>
          </div>
          <div className="ml-auto flex items-center gap-1.5 rounded-full border border-zinc-200 px-2.5 py-1">
            <Activity className="h-3 w-3 text-accent" />
            <span className="font-mono text-[10px] text-zinc-500">live</span>
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Uptime", value: "99.2%", trend: "+0.4" },
            { label: "Assets healthy", value: "184", trend: "+6" },
            { label: "Open alerts", value: "3", trend: "-2" },
          ].map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-zinc-100 bg-zinc-50/60 p-3"
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">
                {kpi.label}
              </p>
              <div className="mt-1 flex items-end justify-between">
                <span className="text-lg font-semibold text-ink">{kpi.value}</span>
                <span className="flex items-center gap-0.5 text-[10px] font-medium text-emerald-600">
                  <ArrowUpRight className="h-3 w-3" />
                  {kpi.trend}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* charts row */}
        <div className="mt-3 grid grid-cols-5 gap-3">
          {/* bar chart */}
          <div className="col-span-3 rounded-2xl border border-zinc-100 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-600">Inspections / week</span>
              <span className="font-mono text-[10px] text-zinc-400">ECharts</span>
            </div>
            <div className="flex h-28 items-end gap-2">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-accent/70 to-accent-soft"
                  initial={{ height: reduce ? `${h}%` : 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.6 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
            </div>
          </div>

          {/* line chart */}
          <div className="col-span-2 rounded-2xl border border-zinc-100 p-4">
            <span className="text-xs font-medium text-zinc-600">Load trend</span>
            <svg viewBox="0 0 100 60" className="mt-3 h-24 w-full overflow-visible">
              <defs>
                <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(79,70,229,0.22)" />
                  <stop offset="100%" stopColor="rgba(79,70,229,0)" />
                </linearGradient>
              </defs>
              <motion.polyline
                fill="none"
                stroke="#4f46e5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={line
                  .map((v, i) => `${(i / (line.length - 1)) * 100},${60 - (v / 100) * 60}`)
                  .join(" ")}
                initial={{ pathLength: reduce ? 1 : 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.7, duration: 1.4, ease: "easeInOut" }}
              />
              <motion.polygon
                fill="url(#lg)"
                points={`0,60 ${line
                  .map((v, i) => `${(i / (line.length - 1)) * 100},${60 - (v / 100) * 60}`)
                  .join(" ")} 100,60`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              />
            </svg>
          </div>
        </div>

        {/* AI assistant toast */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-3 flex items-center gap-3 rounded-2xl border border-accent/15 bg-accent-wash/60 p-3"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white">
            <Bot className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-medium text-ink">
              AI Assistant refined 2 sentences in the report
            </p>
            <p className="truncate text-[11px] text-zinc-500">
              Grammar & clarity suggestions applied inline
            </p>
          </div>
          <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-emerald-500" />
        </motion.div>
      </motion.div>

      {/* floating comment chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute -right-3 top-16 hidden rounded-2xl border border-zinc-100 bg-white/90 p-3 shadow-card backdrop-blur md:block"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-[10px] font-semibold text-white">
            NA
          </span>
          <div className="h-1.5 w-16 rounded-full bg-zinc-200" />
        </div>
        <div className="mt-2 h-1.5 w-24 rounded-full bg-zinc-100" />
        <div className="mt-1.5 h-1.5 w-20 rounded-full bg-zinc-100" />
      </motion.div>
    </div>
  );
}
