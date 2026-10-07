import Link from "next/link";
import { ReactNode } from "react";
import type { IconName, Tone } from "@/lib/copy";
import Icon from "./Icon";

export default function Card({ tone, icon, title, text, href, tilt = 0, children, cta }: { tone: Tone; icon?: IconName; title: string; text?: string; href?: string; tilt?: number; children?: ReactNode; cta?: string }) {
  const inner = (
    <>
      {icon && <Icon name={icon} className="mb-5 h-14 w-14" />}
      <h3 className="h-display text-3xl sm:text-[2rem]">{title}</h3>
      {text && <p className="mt-3 text-[17px] font-medium leading-relaxed">{text}</p>}
      {children}
      {cta && <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide underline decoration-4 underline-offset-4">{cta}<span aria-hidden="true" className="rtl:-scale-x-100">→</span></span>}
    </>
  );
  const cls = `tone-${tone} block h-full rounded-[28px] border-4 border-ink p-7 shadow-pop transition-transform duration-200 hover:-translate-y-1 hover:shadow-pop-lg`;
  const style = tilt ? { transform: `rotate(${tilt}deg)` } : undefined;
  return href ? <Link href={href} className={cls} style={style}>{inner}</Link> : <div className={cls} style={style}>{inner}</div>;
}
