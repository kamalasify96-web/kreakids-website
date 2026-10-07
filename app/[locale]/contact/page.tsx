import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCopy } from "@/lib/copy";
import { isLocale } from "@/lib/i18n";
import { site, waLink } from "@/lib/site";
import Btn from "@/components/ui/Btn";
import FinalCta from "@/components/ui/FinalCta";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return { title: getCopy(isLocale(params.locale) ? params.locale : "en").nav.contact };
}

export default function Contact({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = getCopy(locale);
  const t = c.contact;
  const rows = [
    { tone: "lime", icon: "chat" as const, label: t.whatsapp, value: site.phoneIntl, href: waLink(), ext: true },
    { tone: "yellow", icon: "party" as const, label: t.call, value: site.phoneDisplay, href: site.phoneHref, ext: false },
    { tone: "pink", icon: "spark" as const, label: t.instagram, value: `@${site.instagram}`, href: site.instagramUrl, ext: true },
  ];
  return (
    <>
      <PageHero tone="lime" eyebrow={t.eyebrow} title={t.title} sub={t.sub} seed={11}>
        <Btn href={waLink()} external tone="ink">{c.cta.whatsapp}</Btn>
      </PageHero>
      <Section tone="paper" className="!pt-32">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            {rows.map((r) => (
              <a key={r.label} href={r.href} {...(r.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`tone-${r.tone} flex min-h-[88px] items-center gap-5 rounded-[28px] border-4 border-ink p-5 shadow-pop transition-transform hover:-translate-y-1`}>
                <Icon name={r.icon} className="h-12 w-12 shrink-0" />
                <span><span className="block text-sm font-extrabold uppercase tracking-wide">{r.label}</span><bdi dir="ltr" className="h-display block text-2xl sm:text-3xl">{r.value}</bdi></span>
              </a>
            ))}
            <div className="flex items-start gap-5 rounded-[28px] border-4 border-ink bg-paper p-5 shadow-pop">
              <Icon name="pin" className="h-12 w-12 shrink-0" />
              <span><span className="block text-sm font-extrabold uppercase tracking-wide">{t.visit}</span><span className="mt-1 block text-lg font-semibold">{site.address[locale]}</span></span>
            </div>
          </div>
          <div className="overflow-hidden rounded-[28px] border-4 border-ink shadow-pop">
            <iframe title={t.mapTitle} src={site.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[360px] w-full" />
          </div>
        </div>
      </Section>
      <FinalCta locale={locale} />
    </>
  );
}
