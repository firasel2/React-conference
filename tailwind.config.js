/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
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
        '3.75rem',
        {
          lineHeight: '4.5rem',
        },
      ],
      '5xl': [
        '6.75rem',
        {
          lineHeight: '8rem',
        },
      ],
      '6xl': [
        '8.75rem',
        {
          lineHeight: '10.563rem',
        },
      ],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: { DEFAULT: '#FFC93E', thin: '#FFFCF6' },
      secondary: '#111D5E',
      black: '#0A142F',
      gray: {
        DEFAULT: '#617187',
        light: '#CDCDCD',
        thin: '#F9FAFB',
      },
      white: '#FFFFFF',
      accent: '#2563EB',
    },
    boxShadow: {
      1: '0px 10px 20px 0px rgba(161, 161, 161, 0.25)',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      },
    },
  },
  plugins: [],
};
