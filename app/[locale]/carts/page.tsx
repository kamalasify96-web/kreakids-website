import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCopy } from "@/lib/copy";
import { isLocale } from "@/lib/i18n";
import Btn from "@/components/ui/Btn";
import Card from "@/components/ui/Card";
import FinalCta from "@/components/ui/FinalCta";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section, { Eyebrow, H2 } from "@/components/ui/Section";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return { title: getCopy(isLocale(params.locale) ? params.locale : "en").nav.carts };
}

export default function Carts({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = getCopy(locale);
  const t = c.carts;
  return (
    <>
      <PageHero tone="violet" eyebrow={t.eyebrow} title={t.title} sub={t.sub} seed={6}>
        <Btn href={`/${locale}/book`} tone="lime">{t.ctaTitle}</Btn>
      </PageHero>

      <Section tone="paper" className="!pt-32">
        <div className="grid gap-7 sm:grid-cols-2">
          {t.items.map((i, k) => (
            <Reveal key={i.title} delay={(k % 2) * 0.08}><Card tone={i.tone} icon={i.icon} title={i.title} text={i.text} /></Reveal>
          ))}
        </div>
      </Section>

      <Section tone="lime">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal><Eyebrow>{t.eyebrow}</Eyebrow><H2>{t.whyTitle}</H2></Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-4">
              {t.why.map((x) => (
                <li key={x} className="flex items-center gap-4 rounded-full border-4 border-ink bg-paper px-5 py-3 text-lg font-extrabold shadow-pop-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-4 border-ink bg-pink text-sm" aria-hidden="true">✓</span>{x}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
      <FinalCta locale={locale} title={t.ctaTitle} sub={t.ctaText} />
    </>
  );
}
