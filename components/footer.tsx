import Link from "next/link";
import { nav, profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-zinc-100 py-12">
      <div className="section flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-[13px] font-bold text-white">
            NA
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-ink">{profile.name}</p>
            <p className="text-[12px] text-zinc-500">
              {profile.role} · {profile.discipline}
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] text-zinc-500 transition-colors hover:text-teal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="font-mono text-[11px] text-zinc-400">
          © {new Date().getFullYear()} — Designed & built by {profile.name.split(" ")[1]}
        </p>
      </div>
    </footer>
  );
}
