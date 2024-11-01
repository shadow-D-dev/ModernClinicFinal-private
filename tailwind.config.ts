import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Header/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/HomePage//**/*.{js,ts,jsx,tsx,mdx}",
    "./src/animation//**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Commitment//**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Services//**/*.{js,ts,jsx,tsx,mdx}",
    "./src/WhyUs//**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Testimonials//**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ContactUsMap//**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        plusJakarta: "var(--font-plus-jakarta)",
      },
    },
  },
  plugins: [],
};
export default config;
