import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#08090A",
        surface: "#111315",
        "surface-subtle": "#17191C",
        primary: "#F5F5F5",
        secondary: "#A1A1AA",
        border: "rgba(255, 255, 255, 0.08)",
        "border-hover": "rgba(79, 140, 255, 0.3)",
        accent: {
          DEFAULT: "#4F8CFF",
          glow: "rgba(79, 140, 255, 0.15)",
          hover: "#3B7BEB",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glow 3s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "line-flow": "lineFlow 3s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { opacity: "0.4", filter: "drop-shadow(0 0 8px rgba(79, 140, 255, 0.2))" },
          "100%": { opacity: "0.9", filter: "drop-shadow(0 0 16px rgba(79, 140, 255, 0.6))" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        lineFlow: {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
