module.exports = {
  purge: [
    './src/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'otoño': 'url(../img/bg-otoño.jpg)',
        'plants': 'url(../img/bg-plants.jpg)',
        'dots-pattern': 'url(../img/dots-pattern.jpg)',
        'wave-pattern': 'url(../img/wave-white.png)',
        'aquarela': 'url(../img/aquarela.png)'
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
