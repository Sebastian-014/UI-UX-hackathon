import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myviolet: "#7E33E0",
        mywhite: "#F1F1F1",
        mypink: "#FB2E86",
        pink2:  "#ECD2FA",
        myblue:  "#151875",
        myblue1:  "#1A0B5B",
        myred:  "#FB2448",
        mygray: "#EEEFFB",    
        gray2: "#8A8FB9",
        gray3:  "#E7E4F8",
        gray4:  "#9DA0AE",
        gray5: "#F2F0FF",
        gray6: "#F6F7FB",
        gray7: "#F7F7F7",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
