import { Burst } from "./Shapes";

export default function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const row = [...items, ...items];
  return (
    <div dir="ltr" className={`overflow-hidden border-y-4 border-ink ${className}`} aria-hidden="true">
      <div className="flex w-max animate-marquee items-center gap-8 py-4 sm:gap-12">
        {row.map((t, i) => (
          <span key={i} className="flex shrink-0 items-center gap-8 font-display text-3xl uppercase sm:gap-12 sm:text-5xl">
            {t}
            <Burst className="h-7 w-7 sm:h-9 sm:w-9" />
          </span>
        ))}
      </div>
    </div>
  );
}
