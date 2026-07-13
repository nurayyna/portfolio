import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white shadow-soft hover:bg-ink-soft hover:shadow-card hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-zinc-200 bg-white text-ink shadow-ring hover:border-zinc-300 hover:shadow-soft hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-ink hover:bg-zinc-100",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
}: Props) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (external || href.startsWith("http") || href.startsWith("/resume")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
