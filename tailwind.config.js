/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": `#00100B`,
        "primary": `#762E2F`,
        "secondary": `#8A95A5`,
        "accent-1": `#B9C6AE`,
        "light": `#E9E3B4`,
      },
      dropShadow: {
        "hero-shadow": '0 5px 8px black'
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
