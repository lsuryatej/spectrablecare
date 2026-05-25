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
        bg: "#F7F4F0",
        surface: "#FFFFFF",
        border: "#E8E3DC",
        primary: {
          DEFAULT: "#7A1E2E",
          hover: "#5E1622",
        },
        cta: {
          DEFAULT: "#C8730A",
          hover: "#A65E08",
        },
        ink: {
          DEFAULT: "#1A1410",
          muted: "#7A6F65",
          inverse: "#F7F4F0",
        },
        dark: {
          DEFAULT: "#1C1410",
          surface: "#261C17",
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
        card: "0 4px 24px rgba(26, 20, 16, 0.04)",
        "card-hover": "0 16px 40px rgba(26, 20, 16, 0.08)",
        nav: "0 1px 0 rgba(26, 20, 16, 0.06)",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
