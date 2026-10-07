import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getCopy } from "@/lib/copy";
import { site, waLink } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { Drip } from "@/components/ui/Shapes";

export default function Footer({ locale }: { locale: Locale }) {
  const c = getCopy(locale);
  const t = c.nav;
  const links = [
    ["/experiences", t.experiences], ["/parties", t.parties], ["/carts", t.carts], ["/gallery", t.gallery],
    ["/shop", t.shop], ["/about", t.about], ["/contact", t.contact], ["/book", t.book],
  ] as const;
  return (
    <footer className="tone-ink relative overflow-hidden px-5 pb-10 pt-32 sm:px-8 sm:pt-44">
      <Drip fill="#FF3E96" pos="top" seed={9} />
      <div className="relative z-[2] mx-auto max-w-6xl">
        <Logo color="#FFD400" shadow="#FF3E96" className="mb-4 w-full max-w-[640px]" />
        <p className="mb-14 text-lg font-semibold opacity-80">{c.footer.tag}</p>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <nav aria-label="Footer">
            <h2 className="font-display mb-4 text-3xl">{c.footer.explore}</h2>
            <ul className="grid grid-cols-2 gap-x-6">
              {links.map(([href, label]) => (
                <li key={href}><Link href={`/${locale}${href}`} className="inline-flex min-h-[44px] items-center font-bold hover:text-yellow">{label}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="font-display mb-4 text-3xl">{c.footer.talk}</h2>
            <ul className="space-y-1 font-bold">
              <li><a className="inline-flex min-h-[44px] items-center hover:text-yellow" href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp · <bdi dir="ltr">&nbsp;{site.phoneIntl}</bdi></a></li>
              <li><a className="inline-flex min-h-[44px] items-center hover:text-yellow" href={site.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram · <bdi dir="ltr">&nbsp;@{site.instagram}</bdi></a></li>
              <li className="opacity-80">{site.address[locale]}</li>
            </ul>
          </div>
          <div className="hidden lg:block" />
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t-4 border-paper/20 pt-6 text-sm font-semibold opacity-70 sm:flex-row">
          <span>© {new Date().getFullYear()} KreaKid&apos;s. {c.footer.rights}</span>
          <span>{c.footer.credit}</span>
        </div>
      </div>
    </footer>
  );
}
