import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCopy } from "@/lib/copy";
import { isLocale } from "@/lib/i18n";
import Btn from "@/components/ui/Btn";
import Card from "@/components/ui/Card";
import FinalCta from "@/components/ui/FinalCta";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section, { Eyebrow, H2 } from "@/components/ui/Section";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return { title: getCopy(isLocale(params.locale) ? params.locale : "en").nav.parties };
}

export default function Parties({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = getCopy(locale);
  const p = c.parties;
  return (
    <>
      <PageHero tone="yellow" eyebrow={p.eyebrow} title={p.title} sub={p.sub} seed={4}>
        <Btn href={`/${locale}/book`} tone="pink">{c.cta.bookParty}</Btn>
      </PageHero>

      <Section tone="paper" className="!pt-32">
        <Reveal><Eyebrow>{p.eyebrow}</Eyebrow><H2>{p.themesTitle}</H2></Reveal>
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {p.themes.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 0.08}><Card tone={t.tone} icon={t.icon} title={t.title} text={t.text} /></Reveal>
          ))}
        </div>
      </Section>

      <Section tone="pink">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>{p.eyebrow}</Eyebrow>
            <H2>{p.includesTitle}</H2>
            <p className="mt-6 max-w-md text-lg font-semibold">{p.includesNote}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-4">
              {p.includes.map((x) => (
                <li key={x} className="flex items-center gap-4 rounded-full border-4 border-ink bg-paper px-5 py-3 text-lg font-extrabold shadow-pop-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-4 border-ink bg-lime text-sm" aria-hidden="true">✓</span>{x}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="violet">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal><Eyebrow>{p.eyebrow}</Eyebrow><H2>{p.venueTitle}</H2><p className="mt-6 max-w-lg text-xl font-medium">{p.venueText}</p>
            <div className="mt-8"><Btn href={`/${locale}/contact`} tone="lime">{c.nav.contact}</Btn></div></Reveal>
          <Reveal delay={0.1} className="flex justify-center"><Icon name="party" className="h-48 w-48 text-lime sm:h-64 sm:w-64" /></Reveal>
        </div>
      </Section>
      <FinalCta locale={locale} />
    </>
  );
}
