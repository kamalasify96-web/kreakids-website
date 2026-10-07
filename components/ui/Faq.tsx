export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-4">
      {items.map((f) => (
        <details key={f.q} className="group rounded-[24px] border-4 border-ink bg-paper text-ink shadow-pop-sm open:bg-yellow">
          <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-4 px-6 py-3 font-display text-xl sm:text-2xl [&::-webkit-details-marker]:hidden">
            {f.q}
            <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-4 border-ink bg-pink text-xl leading-none transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="px-6 pb-6 text-lg font-medium">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
