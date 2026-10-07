import type { IconName } from "@/lib/copy";

const P: Record<IconName, JSX.Element> = {
  jar: (<><path d="M22 8h20v8l5 7v28a7 7 0 0 1-7 7H24a7 7 0 0 1-7-7V23l5-7z" /><path d="M17 36c6 5 10-4 15 0s10 4 15 0" /></>),
  squish: (<><path d="M8 42c0-15 10-24 24-24s24 9 24 24c0 6-6 8-12 8H20c-6 0-12-2-12-8z" /><path d="M23 22l2 7M32 19v9M41 22l-2 7" /><path d="M25 39h.1M39 39h.1M29 43q3 3 6 0" /></>),
  candle: (<><path d="M24 28h16v28H24z" /><path d="M32 8c5 6 5 10 0 13-5-3-5-7 0-13z" /><path d="M32 21v7" /></>),
  palette: (<><path d="M32 8C18 8 8 18 8 31s9 22 21 22c6 0 7-4 4-7s-1-7 4-7h7c7 0 12-4 12-10C56 17 46 8 32 8z" /><path d="M20 30h.1M28 20h.1M40 20h.1M47 29h.1" /></>),
  crown: (<><path d="M9 46L7 20l15 12 10-18 10 18 15-12-2 26z" /><path d="M11 54h42" /></>),
  spark: (<><path d="M30 6c2 15 7 20 22 22-15 2-20 7-22 22-2-15-7-20-22-22 15-2 20-7 22-22z" /><path d="M51 42c1 5 3 7 7 8-4 1-6 3-7 8-1-5-3-7-7-8 4-1 6-3 7-8z" /></>),
  tee: (<path d="M22 10L8 18l6 12 6-3v27h24V27l6 3 6-12-14-8c-2 4-6 6-10 6s-8-2-10-6z" />),
  cone: (<><path d="M19 30h26L32 60z" /><path d="M17 30a15 15 0 0 1 30 0" /><path d="M25 24v-3" /></>),
  party: (<><path d="M10 56L30 14l20 42z" /><path d="M19 40h22M25 27h10" /><path d="M42 8l3 5M52 18l-5 3M50 6v.1" /></>),
  chat: (<><path d="M9 12h46v32H32L18 56V44H9z" /><path d="M22 28h.1M32 28h.1M42 28h.1" /></>),
  pin: (<><path d="M32 58C20 44 13 35 13 26a19 19 0 0 1 38 0c0 9-7 18-19 32z" /><circle cx="32" cy="26" r="7" /></>),
  cal: (<><path d="M9 14h46v42H9z" /><path d="M9 27h46M21 6v14M43 6v14" /></>),
};

export default function Icon({ name, className = "h-10 w-10" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {P[name]}
    </svg>
  );
}
