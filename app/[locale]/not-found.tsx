import Link from "next/link";
export default function NotFound() {
  return (
    <div className="tone-yellow flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="h-display text-6xl sm:text-8xl">404</h1>
      <p className="mt-4 text-2xl font-bold">Oops, a spill. · أوه، انسكب شيء.</p>
      <Link href="/en" className="mt-8 inline-flex min-h-[52px] items-center rounded-full border-4 border-ink bg-pink px-7 font-extrabold uppercase shadow-pop-sm">Home</Link>
    </div>
  );
}
