import type { Locale } from "@/lib/i18n";
import { getCopy } from "@/lib/copy";
import { waLink } from "@/lib/site";
import Btn from "./Btn";
import { Blob } from "./Shapes";
import { Eyebrow } from "./Section";

/** Every page ends here: pink band, then the footer drips from it. */
export default function FinalCta({ locale, title, sub }: { locale: Locale; title?: string; sub?: string }) {
  const c = getCopy(locale);
  return (
    <section className="tone-pink relative overflow-hidden px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-32">
      <Blob v={2} className="pointer-events-none absolute -bottom-24 start-[-5rem] h-[24rem] w-[24rem] animate-wobble text-yellow opacity-70" />
      <div className="relative z-[2] mx-auto max-w-4xl text-center">
        <div className="flex justify-center"><Eyebrow>{c.nav.book}</Eyebrow></div>
        <h2 className="h-display text-[clamp(2.6rem,7vw,5.5rem)]">{title ?? c.home.finalTitle}</h2>
        <p className="mx-auto mt-5 max-w-xl text-xl font-medium">{sub ?? c.home.finalSub}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Btn href={`/${locale}/book`} tone="yellow">{c.cta.bookParty}</Btn>
          <Btn href={waLink()} external tone="paper">{c.cta.whatsapp}</Btn>
        </div>
      </div>
    </section>
  );
}
