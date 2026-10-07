import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { locales } from "@/lib/i18n";
export const dynamic = "force-static";
const pages = ["", "/experiences", "/parties", "/carts", "/gallery", "/shop", "/book", "/about", "/contact"];
export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((l) => pages.map((p) => ({ url: `${site.url}/${l}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 })));
}
