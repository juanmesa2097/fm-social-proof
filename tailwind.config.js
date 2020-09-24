module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.html", "./src/**/*.scss", "./src/**/*.ts"],
  theme: {
    fontFamily: {
      display: ["Spartan", "sans-serif"],
      body: ["Spartan", "sans-serif"],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
