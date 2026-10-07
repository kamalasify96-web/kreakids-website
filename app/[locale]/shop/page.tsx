import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCopy } from "@/lib/copy";
import { isLocale } from "@/lib/i18n";
import { site, waLink } from "@/lib/site";
import Btn from "@/components/ui/Btn";
import Card from "@/components/ui/Card";
import FinalCta from "@/components/ui/FinalCta";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return { title: getCopy(isLocale(params.locale) ? params.locale : "en").nav.shop };
}

export default function Shop({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = getCopy(locale);
  const s = c.shop;
  return (
    <>
      <PageHero tone="orange" eyebrow={s.eyebrow} title={s.title} sub={site.shopOpen ? s.subOpen : s.subClosed} seed={3}>
        {site.shopOpen ? (
          <Btn href={site.salla} external tone="paper">{s.openCta}</Btn>
        ) : (
          <>
            <span className="inline-flex min-h-[52px] items-center rounded-full border-4 border-ink bg-ink px-6 text-sm font-extrabold uppercase tracking-wide text-paper">{s.badgeClosed}</span>
            <Btn href={waLink("Hi KreaKid's! I'd like to order from the shop.")} external tone="paper">{s.closedCta}</Btn>
          </>
        )}
      </PageHero>
      <Section tone="paper" className="!pt-32">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {s.items.map((i, k) => (
            <Reveal key={i.title} delay={(k % 4) * 0.06}><Card tone={i.tone} icon={i.icon} title={i.title} text={i.text} /></Reveal>
          ))}
        </div>
      </Section>
      <FinalCta locale={locale} />
    </>
  );
}
