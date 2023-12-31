import { mergeConfig, UserConfig } from 'vite';
import { withNx } from 'qwik-nx/storybook';
import viteConfig from './../vite.config';

const config = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: { name: 'storybook-framework-qwik' },
  async viteFinal(config: UserConfig) {
    const updatedConfig = mergeConfig(config, viteConfig);
    return withNx(updatedConfig);
  },
};

export default config;
