import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ar"];

// Dev / server mode only. In the static export the root page redirects instead.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = { matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"] };
