import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50: "#FAFAFA",
          100: "#F5F5F7",
          200: "#E5E5E8",
          300: "#D4D4D8",
        },
        brand: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          500: "#0066FF",
          600: "#0052CC",
          700: "#003D99",
          900: "#0A1E3F",
        },
        charcoal: {
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
          500: "#64748B",
        },
        accent: {
          teal: "#0D9488",
          emerald: "#10B981",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
        signature: ["var(--font-caveat)", "Caveat", "cursive"],
      },
      borderRadius: {
        DEFAULT: "6px",
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
      },
    },
  },
  plugins: [],
};

export default config;
