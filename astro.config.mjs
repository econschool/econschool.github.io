// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://econschool.org',
  base: '/',
  markdown: {
    // Math in Markdown: $...$ and $$...$$ render at build time via KaTeX.
    // (Caveat: a lone $ in prose starts a math span — write \$ for a literal dollar.)
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
