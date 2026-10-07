import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCopy } from "@/lib/copy";
import { isLocale } from "@/lib/i18n";
import Card from "@/components/ui/Card";
import FinalCta from "@/components/ui/FinalCta";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return { title: getCopy(isLocale(params.locale) ? params.locale : "en").nav.about };
}

export default function About({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const a = getCopy(locale).about;
  return (
    <>
      <PageHero tone="yellow" eyebrow={a.eyebrow} title={a.title} sub={a.lead} seed={10} />
      <Section tone="paper" className="!pt-32">
        <div className="mx-auto max-w-3xl space-y-6 text-xl font-medium">{a.body.map((b) => <Reveal key={b}><p>{b}</p></Reveal>)}</div>
        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {a.values.map((v, i) => <Reveal key={v.title} delay={i * 0.08}><Card tone={v.tone} icon={v.icon} title={v.title} text={v.text} /></Reveal>)}
        </div>
      </Section>
      <Section tone="cobalt">
        <div className="grid gap-8 sm:grid-cols-3">
          {a.stats.map((s) => (
            <Reveal key={s.l}><div className="text-center"><p className="h-display accent text-[clamp(4rem,10vw,7rem)]">{s.v}</p><p className="mt-2 text-lg font-bold">{s.l}</p></div></Reveal>
          ))}
        </div>
      </Section>
      <FinalCta locale={locale} title={a.ctaTitle} />
    </>
  );
}
