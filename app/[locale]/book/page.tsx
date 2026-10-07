import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCopy } from "@/lib/copy";
import { isLocale } from "@/lib/i18n";
import BookingForm from "@/components/ui/BookingForm";
import Faq from "@/components/ui/Faq";
import PageHero from "@/components/ui/PageHero";
import Section, { Eyebrow, H2 } from "@/components/ui/Section";
import FinalCta from "@/components/ui/FinalCta";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return { title: getCopy(isLocale(params.locale) ? params.locale : "en").nav.book };
}

export default function Book({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = getCopy(locale);
  return (
    <>
      <PageHero tone="pink" eyebrow={c.book.eyebrow} title={c.book.title} sub={c.book.sub} seed={7} />
      <Section tone="paper" className="!pt-28">
        <div className="mx-auto max-w-3xl"><BookingForm locale={locale} /></div>
      </Section>
      <Section tone="yellow">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div><Eyebrow>{c.home.faqEyebrow}</Eyebrow><H2>{c.book.faqTitle}</H2></div>
          <Faq items={c.faq} />
        </div>
      </Section>
      <FinalCta locale={locale} />
    </>
  );
}
