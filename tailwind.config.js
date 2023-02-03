/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": `#090C02`,
        "primary": `#80D39B`,
        "secondary": `#58641D`,
        "tertiary": `#A1E887`,
        "accent": `#5465ff`,

      },
      dropShadow: {
        "hero-shadow": '0 0 2px black',
        "card-shadow": '0 0 6px gray'
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/pattern.svg')",
        "hero-pattern-alt": "url('/assets/footer_pattern.svg')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
