import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2dd4bf",
        secondary: "#64748b",
        dark: "#0f172a",
        warna1: "#6A9C89",
        warna2: "#C4DAD2",
        warna3: "#E9EFEC",
        warna4: "#111827",
      },
    },
  },
  plugins: [],
};
export default config;
