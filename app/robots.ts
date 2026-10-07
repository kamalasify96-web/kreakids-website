import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return { // Client review build on GitHub Pages (has a base path) stays out of search results.
  rules: process.env.NEXT_PUBLIC_BASE_PATH ? { userAgent: "*", disallow: "/" } : { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` };
}
