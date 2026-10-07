"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getCopy } from "@/lib/copy";
import { Logo } from "@/components/ui/Logo";

const items = [
  { href: "/experiences", key: "experiences" },
  { href: "/parties", key: "parties" },
  { href: "/carts", key: "carts" },
  { href: "/gallery", key: "gallery" },
  { href: "/shop", key: "shop" },
  { href: "/about", key: "about" },
] as const;

export default function Navbar({ locale }: { locale: Locale }) {
  const t = getCopy(locale).nav;
  const path = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const rest = path.replace(/^\/(en|ar)/, "") || "/";
  const other: Locale = locale === "en" ? "ar" : "en";
  const isActive = (href: string) => rest === href || rest.startsWith(href + "/");

  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[200] focus:rounded-full focus:border-4 focus:border-ink focus:bg-yellow focus:px-5 focus:py-3 focus:font-extrabold">{t.skip}</a>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
        <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border-4 border-ink bg-paper px-4 py-2 shadow-pop-sm sm:px-6">
          <Link href={`/${locale}`} aria-label="KreaKid's home" className="shrink-0 py-1">
            <Logo className="h-9 w-auto sm:h-10" color="#FF3E96" />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {items.map((i) => (
              <li key={i.key}>
                <Link href={`/${locale}${i.href}`} aria-current={isActive(i.href) ? "page" : undefined}
                  className={`inline-flex min-h-[44px] items-center rounded-full px-3.5 text-[15px] font-extrabold transition-colors hover:bg-yellow ${isActive(i.href) ? "bg-yellow" : ""}`}>
                  {t[i.key]}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link href={`/${other}${rest === "/" ? "" : rest}`} lang={other} aria-label={t.langLabel}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border-4 border-ink px-3 text-sm font-extrabold transition-colors hover:bg-lime">
              {t.lang}
            </Link>
            <Link href={`/${locale}/book`} className="hidden min-h-[44px] items-center rounded-full border-4 border-ink bg-pink px-5 text-sm font-extrabold uppercase tracking-wide transition-colors hover:bg-yellow sm:inline-flex">
              {t.book}
            </Link>
            <button type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? t.close : t.menu} onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border-4 border-ink bg-yellow lg:hidden">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" aria-hidden="true">
                {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div id="mobile-menu" className="tone-pink fixed inset-0 z-40 overflow-y-auto px-6 pb-10 pt-28 lg:hidden">
          <ul className="flex flex-col gap-2">
            {[{ href: "", key: "home" }, ...items, { href: "/contact", key: "contact" }].map((i) => (
              <li key={i.key}>
                <Link href={`/${locale}${i.href}`} className="font-display flex min-h-[56px] items-center border-b-4 border-ink py-2 text-4xl">
                  {t[i.key as keyof typeof t]}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={`/${locale}/book`} className="mt-8 flex min-h-[56px] items-center justify-center rounded-full border-4 border-ink bg-yellow text-lg font-extrabold uppercase shadow-pop-sm">
            {t.book}
          </Link>
        </div>
      )}
    </>
  );
}
