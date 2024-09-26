import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "20px",
        lg: "20px",
        xl: "70px",
        "2xl": "110px",
      },
    },
    extend: {
      fontFamily: {
        openSans: ["var(--font-open-sans)"],
        alfern: ["--font-alfern-2"],
      },
      colors: {
        primaryLight: "#FFFFFF",
        darkPink: "#FB00B1",
        lightPink: "#ffa9e9",
      },
      backgroundImage: {
        homeHeroBg: "url('/new_hero-bg.png')",
        videoBg: "url('/Thumbnail.png')",

        firstCloud: "url('/clouds/r-cloud-5.svg')",
        secondCloud: "url('/clouds/r-cloud-6.svg')",
        thirdCloud: "url('/clouds/r-cloud-10.svg')",
        btnCloud: "url('/clouds/btn-cloud.svg')",
        footerClouds: "url('/clouds/footer-cloud.svg')",

        "gradient-radial": "radial-gradient(circle, rgba(251,0,177,.8) 0%, rgba(255, 169, 233,0) 40%)",
        "gradient-linear": "linear-gradient(180deg, rgba(255,155,214,0) 0%, rgba(255,155,214,1) 100%)",
        "gradient-linear-2": "linear-gradient(90deg, rgba(251,0,177,1) 0%, rgba(251,0,177,0) 100%)",
      },
      keyframes: {
        moveToLeft: {
          "0%,100%": { transform: "translateX(100px)" },
          "50%": { transform: "translateX(-300px)" },
        },
        moveToRight: {
          "0%,100%": { transform: "translateX(-100px)" },
          "50%": { transform: "translateX(250px)" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
      boxShadow: {
        'bottom': '0 11px 6px -1px rgba(251,0,177, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'bottomRight': '8px 10px 10px -1px rgba(251,0,177, 0.3), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
        cardShadow:'0px 0px 20px 0px rgba(251, 0, 177, 0.4)'
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
};
export default config;
