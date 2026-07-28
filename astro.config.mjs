// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeExternalLinks from 'rehype-external-links';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://learn.econschool.in',
  base: '/',

  markdown: {
    // Math in Markdown: $...$ and $$...$$ render at build time via KaTeX.
    // (Caveat: a lone $ in prose starts a math span — write \$ for a literal dollar.)
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeKatex,
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
          // Only web links count as "external" — mailto: and tel: stay in-tab.
          protocols: ['http', 'https'],
          // This site is learn.econschool.in only. Everything else — the main
          // .in site, forum.econschool.in, econschool.org — is somewhere else
          // and opens in a new tab. Hostname-matched, so a lookalike domain
          // like learn.econschool.in.example.com won't pass as internal.
          test: (node) => {
            const href = String(node.properties?.href ?? '');
            try {
              return new URL(href).hostname !== 'learn.econschool.in';
            } catch {
              return true;
            }
          },
        },
      ],
    ],
  },

  integrations: [sitemap()],
});