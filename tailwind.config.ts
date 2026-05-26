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
        bg: "#FFFDF6",
        surface: "#FFFFFF",
        border: "#DDD0BC",
        primary: {
          DEFAULT: "#58021A",
          hover: "#400014",
        },
        cta: {
          DEFAULT: "#C8730A",
          hover: "#A65E08",
        },
        ink: {
          DEFAULT: "#392514",
          muted: "#896E5A",
          inverse: "#FFFDF6",
        },
        dark: {
          DEFAULT: "#392514",
          surface: "#4B2E15",
        },
        caregiver: {
          DEFAULT: "#C2570A",
          bg: "#FDF0E6",
        },
        therapist: {
          DEFAULT: "#2D7A5F",
          bg: "#EAF5F0",
        },
        admin: {
          DEFAULT: "#3B5C8A",
          bg: "#EBF0F8",
        },
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "Menlo", "monospace"],
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h2: ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        h3: ["1.75rem", { lineHeight: "1.25" }],
        h4: ["1.25rem", { lineHeight: "1.35" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        label: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
        kpi: ["3.5rem", { lineHeight: "1.0" }],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 4px 24px rgba(57, 37, 20, 0.07)",
        "card-hover": "0 16px 40px rgba(57, 37, 20, 0.14)",
        nav: "0 1px 0 rgba(57, 37, 20, 0.10)",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "marquee": "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
