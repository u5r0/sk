/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["A Jannat LT", "sans-serif"],
      },
      colors: {
        indigo: {
          900: "#1a154a",
          800: "#03506f",
        },
      },
      spacing: {
        6.5: "1.7rem",
      },
      animation: {
        diagonal: "diagonal .5s ease",
        rotating: "rotating 3s ease-in-out infinite alternate",
        shipping: "shipping 15s linear infinite",
        earth1: "earth1 50s linear infinite",
        earth2: "earth2 50s linear infinite",
      },
      keyframes: {
        diagonal: {
          from: {
            opacity: "0",
            transform: "translate3d(100px,-100px,0)",
          },
          to: {
            opacity: "1",
            transform: "translateZ(0)",
          },
        },
        rotating: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shipping: {
          "0%": { transform: "translateY(-1px)" },
          "50%": { transform: "translateY(-70px)" },
          "100%": { transform: "translateY(-1px)" },
        },
        earth1: {
          "0%": { right: "-110px" },
          "40%": { right: "100%" },
          "100%": { right: "-110px" },
        },
        earth2: {
          "0%": { left: "-110px" },
          "40%": { left: "100%" },
          "100%": { left: "-110px" },
        },
      },
      backgroundImage: {
        zigzag:
          "linear-gradient(135deg, white 25%, transparent 25%), linear-gradient(225deg, white 25%, transparent 25%)",
      },
    },
  },
  plugins: [],
};
