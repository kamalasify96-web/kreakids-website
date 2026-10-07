import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#FF3E96",
        yellow: "#FFD400",
        orange: "#FF6A1F",
        cobalt: "#2B4EFF",
        lime: "#C6FF2E",
        violet: "#7B4DFF",
        paper: "#FFF5E1",
        ink: "#17141F",
      },
      fontFamily: {
        display: ["var(--f-disp)", "system-ui", "sans-serif"],
        body: ["var(--f-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        pop: "calc(var(--sx,1) * 6px) 6px 0 0 #17141F",
        "pop-sm": "calc(var(--sx,1) * 4px) 4px 0 0 #17141F",
        "pop-lg": "calc(var(--sx,1) * 10px) 10px 0 0 #17141F",
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        floaty: { "0%,100%": { transform: "translateY(0) rotate(var(--r,0deg))" }, "50%": { transform: "translateY(-12px) rotate(calc(var(--r,0deg) + 2deg))" } },
        spin360: { to: { transform: "rotate(360deg)" } },
        wobble: { "0%,100%": { transform: "rotate(-2deg)" }, "50%": { transform: "rotate(2deg)" } },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        spin360: "spin360 22s linear infinite",
        wobble: "wobble 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
