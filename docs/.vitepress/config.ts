const pkg = require('../../package.json')
import { defineConfig } from 'vitepress'
import fs from 'fs'

const functionsNames = fs
  .readdirSync('src')
  .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
  .map((file) => file.replace('.ts', ''))

export default defineConfig({
  title: 'rhodash',
  description: pkg.description,
  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/KoichiKiyokawa/rhodash' }],
    sidebar: [
      {
        text: 'Functions',
        items: functionsNames.map((fn) => ({ text: fn, link: `/${fn}` })),
      },
    ],
  },
})
