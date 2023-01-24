/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryDark": `#14281D`,
        "primaryLight": `#b8ce54`,
        "accentDark": `#340122`,
        "accentLight": `#957186`,
        "alt": `#936B22`
      },
      dropShadow: {
        "hero-shadow": '0 5px 15px black'
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/pattern.svg')",
        "hero-pattern-alt": "url('/assets/pattern_alt.svg')"
      }
    },
  },
  plugins: [],
}
