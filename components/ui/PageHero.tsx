import { ReactNode } from "react";
import type { Tone } from "@/lib/copy";
import { Eyebrow } from "./Section";
import { Blob, Drip } from "./Shapes";

export const TONE_HEX: Record<Tone, string> = { pink: "#FF3E96", yellow: "#FFD400", cobalt: "#2B4EFF", violet: "#7B4DFF", orange: "#FF6A1F", lime: "#C6FF2E", paper: "#FFF5E1", ink: "#17141F" };

/** Page header. Its colour drips down onto whatever section follows. */
export default function PageHero({ tone, eyebrow, title, sub, children, seed = 5 }: { tone: Tone; eyebrow: string; title: ReactNode; sub?: string; children?: ReactNode; seed?: number }) {
  return (
    <div className="relative">
      <header className={`tone-${tone} relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 sm:pb-24 sm:pt-44`}>
        <Blob v={1} className="pointer-events-none absolute -top-10 end-[-6rem] h-[26rem] w-[26rem] animate-wobble opacity-20" />
        <div className="relative z-[2] mx-auto max-w-6xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="h-display max-w-4xl text-[clamp(2.8rem,8vw,6.5rem)]">{title}</h1>
          {sub && <p className="mt-6 max-w-2xl text-xl font-medium sm:text-2xl">{sub}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </div>
      </header>
      <Drip fill={TONE_HEX[tone]} pos="top" seed={seed} className="!top-full !bottom-auto" />
    </div>
  );
}
