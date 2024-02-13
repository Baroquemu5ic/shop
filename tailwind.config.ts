import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        "brand-orange": "#DE7F11",
        "brand-blue": "#004AAD",
        "brand-neutral": "#F4F7FA",
      },
    },
  },
};
export default config;
