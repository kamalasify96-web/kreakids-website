"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getCopy } from "@/lib/copy";
import { waLink } from "@/lib/site";
import Btn from "./Btn";

const field = "mt-2 block min-h-[52px] w-full rounded-2xl border-4 border-ink bg-paper px-4 py-3 text-lg font-medium text-ink placeholder:text-ink/50";

export default function BookingForm({ locale }: { locale: Locale }) {
  const t = getCopy(locale).book;
  const [v, setV] = useState({ type: t.types[0], date: "", kids: "", theme: "", name: "", notes: "" });
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setV({ ...v, [k]: e.target.value });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const L = t.msgLabels;
    const lines = [t.msgIntro, `${L.type}: ${v.type}`, v.date && `${L.date}: ${v.date}`, v.kids && `${L.kids}: ${v.kids}`, v.theme && `${L.theme}: ${v.theme}`, v.name && `${L.name}: ${v.name}`, v.notes && `${L.notes}: ${v.notes}`].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submit} className="tone-yellow rounded-[32px] border-4 border-ink p-6 shadow-pop sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-base font-extrabold sm:col-span-2">{t.fields.type}
          <select className={field} value={v.type} onChange={set("type")}>{t.types.map((x) => <option key={x}>{x}</option>)}</select>
        </label>
        <label className="block text-base font-extrabold">{t.fields.date}
          <input type="date" className={field} value={v.date} onChange={set("date")} />
        </label>
        <label className="block text-base font-extrabold">{t.fields.kids}
          <input type="number" min={1} inputMode="numeric" className={field} value={v.kids} onChange={set("kids")} />
        </label>
        <label className="block text-base font-extrabold">{t.fields.theme}
          <input type="text" className={field} placeholder={t.themePlaceholder} value={v.theme} onChange={set("theme")} />
        </label>
        <label className="block text-base font-extrabold">{t.fields.name}
          <input type="text" autoComplete="name" className={field} value={v.name} onChange={set("name")} />
        </label>
        <label className="block text-base font-extrabold sm:col-span-2">{t.fields.notes}
          <textarea rows={4} className={field} placeholder={t.notesPlaceholder} value={v.notes} onChange={set("notes")} />
        </label>
      </div>
      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Btn type="submit" tone="pink">{t.submit}</Btn>
        <p className="max-w-sm text-sm font-semibold">{t.privacy}</p>
      </div>
    </form>
  );
}
