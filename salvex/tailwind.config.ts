import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}", "./registry/**/*.{js,ts,jsx,tsx}", "./content/**/*.{md,mdx}", "./public/**/*.{svg,html}", "./inspira.config.{ts,js}"],
  theme: {
    extend: {},
  },
};

export default config;
