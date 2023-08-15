import type { StorybookConfig } from '@storybook/nextjs';
const path = require('path');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js'),
    },
  },
  webpackFinal: async (config, { configType }) => {
    if (config && config.resolve)
      config.resolve.alias = {
        ...config.resolve.alias,
        '@components': path.resolve(__dirname, '../src/components'),
        '@src': path.resolve(__dirname, '../src'),
      };
    return config;
  },
  docs: {
    autodocs: false,
  },
};

export default config;
