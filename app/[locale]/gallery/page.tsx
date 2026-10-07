import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCopy } from "@/lib/copy";
import { isLocale } from "@/lib/i18n";
import { site } from "@/lib/site";
import Btn from "@/components/ui/Btn";
import FinalCta from "@/components/ui/FinalCta";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { Blob } from "@/components/ui/Shapes";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return { title: getCopy(isLocale(params.locale) ? params.locale : "en").nav.gallery };
}

// To use real photos: drop them in /public/photos, then render an <img src={asset("/photos/x.jpg")}> inside a tile.
// Until then each tile is a brand graphic that links to the Instagram feed.
export default function Gallery({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = getCopy(locale);
  const g = c.gallery;
  const spans = ["", "sm:row-span-2", "", "", "sm:col-span-2", "", "", ""];
  return (
    <>
      <PageHero tone="pink" eyebrow={g.eyebrow} title={g.title} sub={g.sub} seed={8}>
        <Btn href={site.instagramUrl} external tone="yellow">{c.cta.followIg}</Btn>
      </PageHero>
      <Section tone="paper" className="!pt-32">
        <div className="grid auto-rows-[200px] grid-cols-2 gap-5 sm:auto-rows-[220px] lg:grid-cols-4">
          {g.tiles.map((t, i) => (
            <Reveal key={t.label} delay={(i % 4) * 0.05} className={spans[i]}>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className={`tone-${t.tone} group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border-4 border-ink p-5 shadow-pop transition-transform hover:-translate-y-1`}>
                <Blob v={(i % 3) as 0 | 1 | 2} className="absolute -bottom-10 end-[-2rem] h-40 w-40 opacity-25 transition-transform duration-500 group-hover:scale-110" />
                <Icon name={t.icon} className="relative h-12 w-12 sm:h-16 sm:w-16" />
                <p className="h-display relative text-2xl sm:text-3xl">{t.label}</p>
              </a>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-xl font-bold">{g.note}</p>
      </Section>
      <FinalCta locale={locale} />
    </>
  );
}
