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
  return { title: getCopy(isLocale(params.locale) ? params.locale : "en").nav.experiences };
}

const tones = ["pink", "yellow", "lime", "violet", "orange", "cobalt", "yellow", "pink"] as const;

export default function Experiences({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = getCopy(locale);
  const e = c.experiences;
  return (
    <>
      <PageHero tone="cobalt" eyebrow={e.eyebrow} title={e.title} sub={e.sub} seed={2}>
        <Btn href={`/${locale}/book`} tone="yellow">{c.nav.book}</Btn>
      </PageHero>

      <Section tone="paper" id="workshops" className="scroll-mt-20 !pt-32">
        <Reveal>
          <Eyebrow>{e.workshops.title}</Eyebrow>
          <H2>{e.workshops.text}</H2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {e.workshops.list.map((w, i) => (
            <Reveal key={w.title} delay={(i % 4) * 0.06}>
              <div className={`tone-${tones[i]} h-full rounded-[28px] border-4 border-ink p-6 shadow-pop`}>
                <Icon name={w.icon} className="mb-4 h-12 w-12" />
                <h3 className="h-display text-2xl">{w.title}</h3>
                <p className="mt-2 text-base font-medium">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="yellow" id="classes" className="scroll-mt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal><Eyebrow>{e.classes.title}</Eyebrow><H2>{e.classes.title}</H2><p className="mt-6 max-w-lg text-xl font-medium">{e.classes.text}</p></Reveal>
          <Reveal delay={0.1} className="flex justify-center"><Icon name={e.classes.icon} className="h-48 w-48 sm:h-64 sm:w-64" /></Reveal>
        </div>
      </Section>

      <Section tone="cobalt" id="holiday" className="scroll-mt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="order-2 flex justify-center lg:order-1"><Icon name={e.holiday.icon} className="h-48 w-48 text-yellow sm:h-64 sm:w-64" /></Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2"><Eyebrow>{e.holiday.title}</Eyebrow><H2>{e.holiday.title}</H2><p className="mt-6 max-w-lg text-xl font-medium">{e.holiday.text}</p></Reveal>
        </div>
      </Section>

      <Section tone="lime" id="mobile" className="scroll-mt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal><Eyebrow>{e.mobile.title}</Eyebrow><H2>{e.mobile.title}</H2><p className="mt-6 max-w-lg text-xl font-medium">{e.mobile.text}</p><div className="mt-8"><Btn href={`/${locale}/carts`} tone="ink">{c.nav.carts}</Btn></div></Reveal>
          <Reveal delay={0.1} className="flex justify-center"><Icon name={e.mobile.icon} className="h-48 w-48 sm:h-64 sm:w-64" /></Reveal>
        </div>
      </Section>

      <Section tone="paper">
        <Card tone="pink" title={e.ctaTitle} text={e.ctaText}>
          <div className="mt-6"><Btn href={`/${locale}/book`} tone="yellow">{c.cta.askQuote}</Btn></div>
        </Card>
      </Section>
      <FinalCta locale={locale} />
    </>
  );
}
