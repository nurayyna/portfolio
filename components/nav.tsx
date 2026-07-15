"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "flex w-full max-w-[1100px] items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500",
          scrolled ? "glass" : "border border-transparent bg-transparent",
        )}
      >
        <Link
          href="#top"
          className="flex items-center gap-2.5 pl-1 font-semibold tracking-tight text-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-[13px] font-bold text-white">
            NA
          </span>
          <span className="hidden text-sm sm:block">Nur Aina</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-teal/5 hover:text-teal"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-navy px-4 py-2 text-sm font-medium text-white transition-all hover:bg-navy-soft hover:-translate-y-0.5 md:inline-flex"
          >
            Resume
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-ink md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass absolute inset-x-4 top-20 rounded-3xl p-2 md:hidden"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm text-zinc-700 hover:bg-teal/5 hover:text-teal"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block rounded-2xl bg-navy px-4 py-3 text-center text-sm font-medium text-white"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
