module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        glow: "#ff0404",
      },
      fontFamily: {
        orbit: ["Orbitron", "sans-serif"],
        archivo: ["Archivo Black", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 5px #ff0404, 0 0 25px #ff0404, 0 0 50px #ff0404, 0 0 200px #ff0404",
      },
      backgroundImage: {
        skeleton:
          "url(	http://rechase.pythonanywhere.com/static/teams/images/back2.png)",
      },
      backgroundSize: {
        16: "4rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
