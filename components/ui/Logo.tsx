import { WORDMARK, MONOGRAM } from "@/lib/logoPaths";

const C = { pink: "#FF3E96", yellow: "#FFD400", cobalt: "#2B4EFF", ink: "#17141F", paper: "#FFF5E1", lime: "#C6FF2E", violet: "#7B4DFF", orange: "#FF6A1F" };
export const CONFETTI = [C.cobalt, C.pink, C.violet, C.orange, C.cobalt, C.pink, C.orange, C.violet, C.pink];

/** The KreaKid's wordmark, as outlined vector paths. Never retype it in a font. */
export function Logo({
  color = C.pink,
  colors,
  shadow,
  className,
  title = "KreaKid's",
}: {
  color?: string;
  colors?: string[];
  shadow?: string;
  className?: string;
  title?: string;
}) {
  const pad = shadow ? 26 : 0;
  return (
    <svg viewBox={`0 0 ${WORDMARK.w + pad} ${WORDMARK.h + pad}`} className={className} role="img" aria-label={title}>
      <g transform={WORDMARK.translate}>
        {shadow && WORDMARK.letters.map((d, i) => <path key={`s${i}`} d={d} fill={shadow} transform="translate(26 26)" />)}
        {WORDMARK.letters.map((d, i) => <path key={i} d={d} fill={colors ? colors[i % colors.length] : color} />)}
      </g>
    </svg>
  );
}

/** K' monogram on a flat square (round it with CSS). */
export function Monogram({ fg = C.yellow, bg = C.pink, className }: { fg?: string; bg?: string; className?: string }) {
  return (
    <svg viewBox={MONOGRAM.viewBox} className={className} role="img" aria-label="KreaKid's">
      <rect width="1000" height="1000" fill={bg} />
      <g transform={`rotate(${MONOGRAM.rotate} 500 500)`}>{MONOGRAM.paths.map((d, i) => <path key={i} d={d} fill={fg} />)}</g>
    </svg>
  );
}
