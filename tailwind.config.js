/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      animation: {
        gradient: "gradient 8s ease infinite",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },

      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },

        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },

        glow: {
          "0%": { boxShadow: "0 0 5px #3b82f6" },
          "100%": { boxShadow: "0 0 20px #3b82f6" },
        },
      },

      backgroundSize: {
        "200": "200% 200%",
      },
    },
  },

  plugins: [],
};