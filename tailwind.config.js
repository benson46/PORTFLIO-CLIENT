module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8'
        },
        dark: {
          800: '#1e293b',
          900: '#0f172a'
        }
      }
    },
  },
  plugins: [],
}