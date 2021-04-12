module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "mdd-red-strong": "#FF5555",
        "mdd-red-light": "#FF6767",
        "mdd-green-strong": "#81FF55",
        "mdd-green-light": "#D7FF67",
        "mdd-blue-strong": "#55F5FF",
        "mdd-blue-light": "#67A4FF"
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      inset: {
        '1/2': '50%'
      }
    },
  },
  variants: {
    scrollbar: ['rounded'],
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
