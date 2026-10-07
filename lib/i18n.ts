export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

// Arabic pages show Arabic-Indic numerals; English pages keep 0-9.
export const arDigits = (v: string | number) => String(v).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);
export const num = (v: string | number, locale: Locale) => (locale === "ar" ? arDigits(v) : String(v));
