"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check, Download, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { profile } from "@/lib/content";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-ivory-soft py-24 md:py-32">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] bg-navy px-8 py-16 text-white md:px-16 md:py-24"
        >
          {/* ambient */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brown/25 blur-3xl" />
            <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-teal/30 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "26px 26px",
                maskImage:
                  "radial-gradient(60% 60% at 50% 40%, black, transparent)",
              }}
            />
          </div>

          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-soft" />
              {profile.availability}
            </span>

            <h2 className="mt-6 text-display font-semibold text-balance">
              Let's build something people actually enjoy using.
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/70">
              Whether it's a dashboard, a reporting system, or an AI-assisted workflow — I'd love to
              hear about the problem you're solving. Let's talk.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-brown px-6 text-[15px] font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-brown-soft hover:shadow-float"
              >
                <Mail className="h-4 w-4" />
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 text-[15px] font-medium text-white/90 transition-all hover:bg-white/10"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied" : profile.email}
              </button>
            </div>

            <div className="mt-8 flex items-center gap-2">
              <SocialLink href={profile.links.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={profile.links.github} label="GitHub">
                <Github className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={profile.links.resume} label="Resume">
                <Download className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  );
}
