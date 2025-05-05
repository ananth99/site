import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nebula Sans", "system-ui", "sans-serif"],
        mono: ["Nebula Sans", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "Nebula Sans, sans-serif",
            h1: {
              fontWeight: 700,
            },
            h2: {
              fontWeight: 600,
            },
            h3: {
              fontWeight: 600,
            },
            strong: {
              fontWeight: 600,
            },
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;