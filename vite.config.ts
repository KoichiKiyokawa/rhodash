/// <reference types="vitest" />
import { defineConfig } from 'vite'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('./package.json')

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: pkg.name,
      formats: ['cjs', 'es', 'iife'],
      fileName: (format) => {
        switch (format) {
          case 'cjs':
            return 'index.cjs'
          case 'es':
            return 'index.js'
          case 'iife':
            return 'index.min.js'
        }
        return ''
      },
    },
  },
  test: {
    coverage: { reporter: 'lcov' },
  },
})
