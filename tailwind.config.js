export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        sf: "var(--sf)",
        ink: "var(--ink)",
        mute: "var(--mute)",
        line: "var(--line)",
        acc: "var(--acc)",
        on: "var(--on)",
        bannerShadow1: "var(--bannerShadow1)",
        bannerShadow2: "var(--bannerShadow2)",
      },
      fontFamily: {
        head: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: { glow: "0 0 10px var(--glow)" },
      keyframes: {
        up: {
          from: { opacity: 0, transform: "translateY(26px)" },
          to: { opacity: 1, transform: "none" },
        },
        fl: { "50%": { transform: "translateY(-12px)" } },
        sp: { to: { transform: "rotate(360deg)" } },
        mq: { to: { transform: "translateX(-50%)" } },
        bl: { "50%": { opacity: 0 } },
        pg: { "70%": { boxShadow: "0 0 0 8px transparent" } },
      },
      animation: {
        up: "up .7s cubic-bezier(.2,.7,.2,1) both",
        fl: "fl 5s ease-in-out infinite",
        sp: "sp 40s linear infinite",
        mq: "mq 30s linear infinite",
        bl: "bl 1s steps(2) infinite",
        pg: "pg 2s infinite",
      },
    },
  },
  plugins: [],
};
