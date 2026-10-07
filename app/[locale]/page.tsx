import { notFound } from "next/navigation";
import { getCopy } from "@/lib/copy";
import { isLocale } from "@/lib/i18n";
import { site, waLink } from "@/lib/site";
import Btn from "@/components/ui/Btn";
import Card from "@/components/ui/Card";
import Faq from "@/components/ui/Faq";
import FinalCta from "@/components/ui/FinalCta";
import Icon from "@/components/ui/Icon";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import Section, { Eyebrow, H2 } from "@/components/ui/Section";
import { Blob, Burst } from "@/components/ui/Shapes";

const heroTilts = [-5, 4, 3, -4];
const heroTones = ["tone-yellow", "tone-cobalt", "tone-lime", "tone-paper"];

export default function Home({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = getCopy(locale);
  const h = c.home;
  const L = (p: string) => `/${locale}${p}`;

  return (
    <>
      {/* HERO */}
      <section className="tone-pink relative overflow-hidden px-5 pb-24 pt-36 sm:px-8 sm:pb-32 sm:pt-44">
        <div className="halftone pointer-events-none absolute -bottom-32 end-[-8rem] h-[34rem] w-[34rem] rounded-full text-ink opacity-20 [mask-image:radial-gradient(circle,#000_30%,transparent_70%)]" aria-hidden="true" />
        <Blob v={0} className="pointer-events-none absolute -top-24 start-[-8rem] h-[30rem] w-[30rem] animate-wobble text-yellow opacity-60" />

        <div className="relative z-[2] mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Eyebrow>{h.eyebrow}</Eyebrow>
            <h1 className="h-display text-[clamp(3.4rem,10vw,8rem)]">
              {h.h1a}{" "}
              <span className="inline-block -rotate-2 rounded-[0.25em] border-4 border-ink bg-yellow px-[0.18em] shadow-pop">{h.h1b}</span>{" "}
              {h.h1c}
            </h1>
            <p className="mt-7 max-w-xl text-xl font-semibold sm:text-2xl">{h.sub}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Btn href={L("/book")} tone="yellow">{c.cta.bookParty}</Btn>
              <Btn href={L("/experiences#workshops")} tone="paper">{c.cta.seeWorkshops}</Btn>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md pt-24" aria-hidden="true">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {h.heroCards.map((card, i) => (
                <div key={card.label} className={`${heroTones[i]} animate-floaty rounded-[28px] border-4 border-ink p-4 shadow-pop sm:p-6 ${i % 2 ? "mt-8" : ""}`} style={{ ["--r" as string]: `${heroTilts[i]}deg`, animationDelay: `${i * 0.7}s` }}>
                  <Icon name={card.icon} className="h-14 w-14 sm:h-16 sm:w-16" />
                  <p className="h-display mt-4 text-[1.4rem] leading-tight sm:text-3xl">{card.label}</p>
                </div>
              ))}
            </div>
            <div className="absolute end-2 top-0 flex h-32 w-32 items-center justify-center sm:-end-4 sm:h-40 sm:w-40">
              <Burst className="absolute inset-0 animate-spin360 text-lime [filter:drop-shadow(4px_4px_0_#17141F)]" />
              <p className="relative text-center font-display leading-none text-ink"><span className="block text-2xl sm:text-3xl">{h.stickerAges}</span><span className="mx-auto mt-1 block max-w-[5.5rem] text-[10px] font-body font-extrabold uppercase leading-tight tracking-wide sm:text-xs">{h.stickerAgesSub}</span></p>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={h.ticker} className="tone-yellow" />

      {/* WHAT WE MAKE */}
      <Section tone="paper">
        <Reveal>
          <Eyebrow>{h.whatEyebrow}</Eyebrow>
          <H2>{h.whatTitle}</H2>
          <p className="mt-5 max-w-2xl text-xl font-medium">{h.whatSub}</p>
        </Reveal>
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {h.cards.map((card, i) => (
            <Reveal key={card.title} delay={(i % 3) * 0.08}>
              <Card tone={card.tone} icon={card.icon} title={card.title} text={card.text} href={L(card.href)} cta={c.cta.learnMore} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* HOW A PARTY WORKS */}
      <Section tone="yellow">
        <Reveal>
          <Eyebrow>{h.steps.eyebrow}</Eyebrow>
          <H2>{h.steps.title}</H2>
        </Reveal>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {h.steps.items.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.08}>
              <li className="h-full list-none rounded-[28px] border-4 border-ink bg-paper p-7 shadow-pop">
                <span className="h-display accent block text-7xl">{s.n}</span>
                <h3 className="h-display mt-2 text-2xl">{s.t}</h3>
                <p className="mt-2 text-[17px] font-medium">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="mt-12"><Btn href={L("/parties")} tone="pink">{c.nav.parties}</Btn></div>
      </Section>

      {/* SLIME CART */}
      <Section tone="violet">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>{h.cart.eyebrow}</Eyebrow>
            <H2>{h.cart.title}</H2>
            <p className="mt-6 max-w-lg text-xl font-medium">{h.cart.text}</p>
            <div className="mt-9"><Btn href={L("/carts")} tone="lime">{h.cart.cta}</Btn></div>
          </Reveal>
          <Reveal delay={0.1} className="relative mx-auto aspect-square w-full max-w-md">
            <Blob v={1} className="absolute inset-0 animate-wobble text-lime" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-ink" aria-hidden="true">
              <Icon name="jar" className="h-32 w-32 sm:h-40 sm:w-40" />
              <span className="h-display mt-3 text-4xl sm:text-5xl">{c.nav.carts}</span>
            </div>
            <div className="absolute -start-2 bottom-8 -rotate-6 rounded-full border-4 border-ink bg-paper px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-ink shadow-pop-sm">{c.cta.askQuote}</div>
          </Reveal>
        </div>
      </Section>

      {/* GALLERY TEASER */}
      <Section tone="paper">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>{h.gallery.eyebrow}</Eyebrow>
            <H2>{h.gallery.title}</H2>
            <p className="mt-5 max-w-xl text-xl font-medium">{h.gallery.text}</p>
          </div>
          <Btn href={site.instagramUrl} external tone="pink">{c.cta.followIg}</Btn>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {c.gallery.tiles.slice(0, 4).map((t, i) => (
            <Reveal key={t.label} delay={i * 0.06}>
              <div className={`tone-${t.tone} flex aspect-square flex-col justify-between rounded-[28px] border-4 border-ink p-5 shadow-pop`} style={{ transform: `rotate(${[-2, 2, 1.5, -1.5][i]}deg)` }}>
                <Icon name={t.icon} className="h-12 w-12 sm:h-16 sm:w-16" />
                <p className="h-display text-2xl sm:text-3xl">{t.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SHOP TEASER */}
      <Section tone="orange">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <Eyebrow>{h.shop.eyebrow}</Eyebrow>
            <H2>{h.shop.title}</H2>
            <p className="mt-6 max-w-xl text-xl font-medium">{site.shopOpen ? h.shop.textOpen : h.shop.textClosed}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              {site.shopOpen ? (
                <Btn href={site.salla} external tone="paper">{c.shop.openCta}</Btn>
              ) : (
                <Btn href={waLink("Hi KreaKid's! I'd like to order Eid boxes / kits.")} external tone="paper">{c.shop.closedCta}</Btn>
              )}
              <Btn href={L("/shop")} tone="ink">{c.cta.seeAll}</Btn>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="hidden justify-center lg:flex">
            <div className="relative flex h-72 w-72 items-center justify-center" aria-hidden="true">
              <Burst className="absolute inset-0 animate-spin360 text-paper [filter:drop-shadow(5px_5px_0_#17141F)]" />
              <Icon name="party" className="relative h-28 w-28" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>{h.faqEyebrow}</Eyebrow>
            <H2>{h.faqTitle}</H2>
          </Reveal>
          <Reveal delay={0.1}><Faq items={c.faq.slice(0, 4)} /></Reveal>
        </div>
      </Section>

      <FinalCta locale={locale} />
    </>
  );
}
