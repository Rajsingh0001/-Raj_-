/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Ensure this line exists
  ],
  theme: {
    extend: {
      animation: {
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px #f97316, 0 0 10px #8b5cf6" },
          "50%": { boxShadow: "0 0 20px #f97316, 0 0 40px #8b5cf6" },
        },
      },
    },
  },
  plugins: [],
};
