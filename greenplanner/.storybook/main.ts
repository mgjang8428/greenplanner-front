import type { StorybookConfig } from '@storybook/react-vite';

import tsconfigPath from 'vite-tsconfig-paths';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },

  // tsconfig.app.json 에서 절대 경로 가져오기
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [tsconfigPath()],
    })
  },
};
export default config;