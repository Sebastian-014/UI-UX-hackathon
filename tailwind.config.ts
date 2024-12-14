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
        mypurple: "#535399",
        myyellow: "#FFA454",
        mywhite: "#F1F1F1",
        mypink: "#FB2E86",
        pink2:  "#ECD2FA",
        pink3:  "#FFF6FB",
        pink4:  "#FCECF1",
        myblue: "#151875",
        myblue1: "#1A0B5B",
        myblue3: "#3F509E",
        myblue4: "#111C85",
        myblue5: "#101750",
        myred:  "#FB2448",
        mygray: "#EEEFFB",    
        gray2: "#8A8FB9",
        gray3: "#E7E4F8",
        gray4: "#9DA0AE",
        gray5: "#F2F0FF",
        gray6: "#F6F7FB",
        gray7: "#F7F7F7",      
        gray8: "#F1F0FF",
        gray9: "#ACABC3",
        gray10: "#F5F6F8",
        gray11: "#B7BACB",
        gray12: "#9096B2",
        gray13: "#FBFBFF",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
