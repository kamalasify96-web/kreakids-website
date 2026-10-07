import { ReactNode } from "react";
import type { Tone } from "@/lib/copy";

export default function Section({ tone = "paper", children, className = "", id }: { tone?: Tone; children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`tone-${tone} relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      <div className="relative z-[2] mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.18em]">
      <span className="h-1.5 w-8 rounded-full bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`h-display text-[clamp(2.4rem,6vw,4.5rem)] ${className}`}>{children}</h2>;
}
