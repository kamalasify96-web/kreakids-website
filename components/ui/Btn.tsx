import Link from "next/link";
import { ReactNode } from "react";
import type { Tone } from "@/lib/copy";

const T: Record<string, string> = {
  yellow: "bg-yellow text-ink",
  pink: "bg-pink text-ink",
  paper: "bg-paper text-ink",
  ink: "bg-ink text-paper",
  lime: "bg-lime text-ink",
  cobalt: "bg-cobalt text-paper",
  violet: "bg-violet text-paper",
  orange: "bg-orange text-ink",
};

export default function Btn({
  href,
  children,
  tone = "yellow",
  external,
  className = "",
  onClick,
  type,
  disabled,
}: {
  href?: string;
  children: ReactNode;
  tone?: Tone;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const cls = `inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2 rounded-full border-4 border-ink px-7 py-3 text-center text-base font-extrabold uppercase tracking-wide shadow-pop-sm transition-all duration-200 hover:translate-x-[calc(var(--sx,1)*2px)] hover:translate-y-[2px] hover:shadow-none active:translate-y-[4px] disabled:opacity-60 sm:text-lg ${T[tone]} ${className}`;
  if (!href) return <button type={type ?? "button"} onClick={onClick} disabled={disabled} className={cls}>{children}</button>;
  if (external) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  return <Link href={href} className={cls}>{children}</Link>;
}
