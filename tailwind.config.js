/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: [
        '0.75rem',
        {
          lineHeight: '0.938rem',
        },
      ],
      sm: [
        '0.875rem',
        {
          lineHeight: '1.063rem',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '1.188rem',
        },
      ],
      lg: [
        '1.125rem',
        {
          lineHeight: '1.375rem',
        },
      ],
      xl: [
        '1.25rem',
        {
          lineHeight: '1.5rem',
        },
      ],
      '2xl': [
        '1.5rem',
        {
          lineHeight: '1.813rem',
        },
      ],
      '3xl': [
        '3rem',
        {
          lineHeight: '3.625rem',
        },
      ],
      '4xl': [
        '8.75rem',
        {
          lineHeight: '10.563rem',
        },
      ],
    },
    colors: {
      primary: '#FFC93E',
      secondary: '#111D5E',
      gray: {
        DEFAULT: '#617187',
        light: '#CDCDCD',
        thin: '#F9FAFB',
      },
      accent: '#2563EB',
    },
  },
  plugins: [],
};
