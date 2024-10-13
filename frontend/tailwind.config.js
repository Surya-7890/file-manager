/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fi: ["fi"],
        devicons: ["devicons"],
        fa: ["fa"],
        mf: ["mf"],
        octicons: ["octicons"],
      },
    },
  },
  plugins: [],
};
