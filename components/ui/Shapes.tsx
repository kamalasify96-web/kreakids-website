const BLOBS = [
  "M45-58C58-48 68-33 72-15C76 3 74 23 63 38C52 53 33 63 12 69C-9 75-33 76-50 65C-67 54-77 31-78 9C-79-13-71-35-56-48C-41-61-20-65-2-63C16-62 32-68 45-58Z",
  "M52-44C66-30 74-10 72 10C70 30 56 48 38 60C20 72-2 78-24 72C-46 66-70 48-76 26C-82 4-72-20-56-38C-40-56-18-68 4-68C26-68 38-58 52-44Z",
  "M30-70C52-62 70-42 74-18C78 6 66 22 58 42C50 62 34 78 10 78C-14 78-30 66-52 54C-74 42-84 22-78-2C-72-26-52-36-40-52C-28-68 8-78 30-70Z",
];
const BURST = "M0-96L16-62L50-80L48-42L88-44L66-12L98 10L62 26L78 62L40 56L36 96L10 68L-16 94L-24 56L-62 74L-54 38L-94 28L-66 2L-90-26L-52-30L-60-70L-26-52Z";

export function Blob({ v = 0, className = "", fill = "currentColor" }: { v?: 0 | 1 | 2; className?: string; fill?: string }) {
  return (
    <svg viewBox="-100 -100 200 200" className={className} aria-hidden="true"><path d={BLOBS[v]} fill={fill} /></svg>
  );
}

export function Burst({ className = "", fill = "currentColor" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="-100 -100 200 200" className={className} aria-hidden="true"><path d={BURST} fill={fill} /></svg>
  );
}

function rnd(seed: number) {
  let s = seed;
  return () => ((s = (s * 16807) % 2147483647) / 2147483647);
}

/** Dripping slime edge. Place at the top or bottom of a section; `fill` is the colour of the section it drips INTO. */
export function Drip({ fill, seed = 3, pos = "top", className = "" }: { fill: string; seed?: number; pos?: "top" | "bottom"; className?: string }) {
  const r = rnd(seed * 97 + 13);
  const h0 = 40;
  let path = `M0 0H1600V${h0}`;
  let cx = 1560;
  const radii = [22, 26, 30, 34];
  const depths = [40, 70, 110, 150, 64, 96];
  while (cx > 40) {
    const rad = radii[Math.floor(r() * radii.length)];
    const depth = depths[Math.floor(r() * depths.length)];
    path += `H${cx + rad + 30}C${cx + rad} ${h0} ${cx + rad} ${h0 + 22} ${cx + rad} ${h0 + 34}V${h0 + depth}a${rad} ${rad} 0 0 1 ${-2 * rad} 0V${h0 + 34}C${cx - rad} ${h0 + 22} ${cx - rad} ${h0} ${cx - rad - 30} ${h0}`;
    cx -= 90 + Math.floor(r() * 100);
  }
  path += "H0Z";
  return (
    <svg
      viewBox="0 0 1600 230"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 z-[1] h-[70px] w-full sm:h-[110px] lg:h-[150px] ${pos === "top" ? "top-[-1px]" : "bottom-[-1px] -scale-y-100"} ${className}`}
    >
      <path d={path} fill={fill} />
    </svg>
  );
}
