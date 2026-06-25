import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF8F5",
        surface: "#FFFFFF",
        sage: {
          DEFAULT: "#8A9A7B",
          dark: "#6E7E5F",
        },
        rose: {
          powder: "#E8C5C5",
          deep: "#C98B8B",
        },
        ink: "#3A3632",
        muted: "#8C857C",
        line: "#ECE5DD",
      },
      fontFamily: {
        serif: ["var(--font-display)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "0.625rem",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(58, 54, 50, 0.12)",
        card: "0 12px 40px -16px rgba(58, 54, 50, 0.18)",
      },
      maxWidth: {
        boutique: "80rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
