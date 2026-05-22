import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "32px",
        xl: "80px"
      },
      screens: {
        xl: "1440px"
      }
    },
    extend: {
      colors: {
        blue: {
          50: "#D2E8FF",
          100: "#A2CCFF",
          200: "#0979FF",
          300: "#0F45E0",
          400: "#102961"
        },
        gray: {
          50: "#EFEDEB",
          100: "#B8BBBF",
          200: "#898F98",
          300: "#373D44",
          400: "#101A29"
        },
        coral: {
          light: "#FFA285",
          DEFAULT: "#F08864"
        },
        system: {
          black: "#1F2227",
          white: "#FFFFFF",
          error: "#E62D2D",
          success: "#6CB320",
          validation: "#F2C526"
        }
      },
      fontFamily: {
        sans: ["Mona Sans", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        6: "24px",
        8: "32px",
        10: "40px",
        12: "48px",
        14: "56px",
        16: "64px",
        20: "80px",
        30: "120px",
        50: "200px"
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "32px",
        xl: "56px"
      },
      fontSize: {
        "display-1": ["60px", { lineHeight: "120%", fontWeight: "500" }],
        "display-2": ["54px", { lineHeight: "120%", fontWeight: "500" }],
        "display-3": ["40px", { lineHeight: "120%", fontWeight: "400" }],
        "display-4": ["28px", { lineHeight: "120%", fontWeight: "500" }],
        "display-5": ["28px", { lineHeight: "120%", fontWeight: "400" }],
        "display-1-mobile": ["32px", { lineHeight: "120%", fontWeight: "500" }],
        "display-2-mobile": ["28px", { lineHeight: "120%", fontWeight: "500" }],
        "display-3-mobile": ["28px", { lineHeight: "120%", fontWeight: "400" }],
        "display-4-mobile": ["24px", { lineHeight: "120%", fontWeight: "400" }],
        "display-5-mobile": ["20px", { lineHeight: "120%", fontWeight: "500" }],
        "body-1": ["24px", { lineHeight: "32px", fontWeight: "500" }],
        "body-2": ["20px", { lineHeight: "28px", fontWeight: "400" }],
        "body-3": ["18px", { lineHeight: "24px", fontWeight: "400" }],
        "body-4": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-5": ["14px", { lineHeight: "21px", fontWeight: "400" }],
        "body-6": ["18px", { lineHeight: "140%", fontWeight: "500" }],
        "body-1-mobile": ["18px", { lineHeight: "24px", fontWeight: "500" }],
        "body-2-mobile": ["16px", { lineHeight: "24px", fontWeight: "500" }],
        "body-3-mobile": ["14px", { lineHeight: "21px", fontWeight: "400" }],
        "body-4-mobile": ["12px", { lineHeight: "18px", fontWeight: "400" }],
        "button-1": ["18px", { lineHeight: "24px", fontWeight: "400" }],
        "button-2": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "button-1-mobile": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "button-2-mobile": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        field: ["14px", { lineHeight: "24px", fontWeight: "400" }]
      },
      maxWidth: {
        "content-desktop": "1280px",
        "content-mobile": "350px"
      },
      backgroundImage: {
        "stage-01": "linear-gradient(180deg, #FFA285 0%, rgba(240, 136, 100, 0.58) 46%, #102961 100%)",
        "stage-02": "linear-gradient(180deg, #FFA285 0%, rgba(240, 136, 100, 0.52) 46%, #102961 100%)",
        "stage-03": "linear-gradient(180deg, #FFA285 0%, rgba(240, 136, 100, 0.48) 44%, #102961 100%)"
      },
      boxShadow: {
        card: "0 0 0 1px rgba(16, 26, 41, 0.04)"
      },
      screens: {
        xs: "390px"
      }
    }
  },
  plugins: []
};

export default config;
