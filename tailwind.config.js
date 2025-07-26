/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Theme colors using CSS variables
        'theme-bg': 'var(--theme-bg)',
        'theme-text': 'var(--theme-text)',
        'theme-text-secondary': 'var(--theme-text-secondary)',
        'theme-text-accent': 'var(--theme-text-accent)',
        'theme-border': 'var(--theme-border)',
        'theme-card-bg': 'var(--theme-card-bg)',
        'theme-card-border': 'var(--theme-card-border)',
        'theme-button-bg': 'var(--theme-button-bg)',
        'theme-button-hover': 'var(--theme-button-hover)',
        'theme-button-text': 'var(--theme-button-text)',
        'theme-accent': 'var(--theme-accent)',
        'theme-accent-secondary': 'var(--theme-accent-secondary)',
        'theme-warning-bg': 'var(--theme-warning-bg)',
        'theme-warning-border': 'var(--theme-warning-border)',
        'theme-warning-text': 'var(--theme-warning-text)',
        'theme-warning-text-secondary': 'var(--theme-warning-text-secondary)',
      },
      fontSize: {
        'theme-xs': 'var(--theme-font-xs)',
        'theme-sm': 'var(--theme-font-sm)',
        'theme-base': 'var(--theme-font-base)',
        'theme-lg': 'var(--theme-font-lg)',
        'theme-xl': 'var(--theme-font-xl)',
        'theme-2xl': 'var(--theme-font-2xl)',
        'theme-3xl': 'var(--theme-font-3xl)',
      }
    },
  },
  plugins: [],
}