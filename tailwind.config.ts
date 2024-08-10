import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        darkestBlack: "#000000",
        darkBlack: "#313131",
        darkGray: "#525252",
        normalGray: "#8c8c8c",
        lightGray: "#b7b7b7",
        darkestBlue: "#051650",
        darkBlue: "#123499",
        normalBlue: "#0f52ba",
        lightBlue: "#6185bd",
        lightestBlue: "#8ca3ff",
      },
      fontFamily: {
        lexend: "Lexend, sans-serif",
      },
    },
  },
  plugins: [],
};
export default config;
