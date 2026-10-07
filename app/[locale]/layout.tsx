import type { Metadata, Viewport } from "next";
import { Bagel_Fat_One, Figtree, Lalezar, Tajawal } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { getCopy } from "@/lib/copy";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

const bagel = Bagel_Fat_One({ subsets: ["latin"], weight: "400", variable: "--font-bagel", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-figtree", display: "swap" });
const lalezar = Lalezar({ subsets: ["arabic", "latin"], weight: "400", variable: "--font-lalezar", display: "swap" });
const tajawal = Tajawal({ subsets: ["arabic", "latin"], weight: ["400", "500", "700", "800"], variable: "--font-tajawal", display: "swap" });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#FF3E96" };

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const m = getCopy(locale).meta;
  return {
    metadataBase: new URL(site.url),
    title: { default: m.title, template: `%s | ${locale === "ar" ? "كرياكيدز" : "KreaKid's"}` },
    description: m.description,
    alternates: { languages: { en: "/en", ar: "/ar" } },
    openGraph: { type: "website", siteName: "KreaKid's", title: m.title, description: m.description, locale: locale === "ar" ? "ar_SA" : "en_US" },
  };
}

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = getCopy(locale);
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KreaKid's",
    description: c.meta.description,
    telephone: site.phoneIntl,
    url: site.url,
    sameAs: [site.instagramUrl],
    address: { "@type": "PostalAddress", addressLocality: "Jeddah", postalCode: "23717", addressCountry: "SA" },
  };
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${bagel.variable} ${figtree.variable} ${lalezar.variable} ${tajawal.variable} font-body antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <Navbar locale={locale} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
        <WhatsAppButton label={c.cta.whatsapp} />
      </body>
    </html>
  );
}
