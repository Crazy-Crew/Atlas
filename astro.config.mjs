// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import mdx from '@astrojs/mdx';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.crazycrew.us/',

  redirects: {
      //'/blog/[...slug]': '/articles/[...slug]',
      //'/about': 'https://example.com/about',
      '/discord': {
          status: 302,
          destination: 'https://discord.gg/badbones-s-live-chat-182615261403283459',
      },
      // '/product1/', '/product1' // Note, this is not supported
  },

  output: 'server',
  adapter: cloudflare(),
  integrations: [mdx(), vue()]
});