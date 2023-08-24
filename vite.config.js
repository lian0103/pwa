import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  base: '/pwa/',
  plugins: [
    // vue()
    createVuePlugin(),
    VitePWA({ registerType: 'autoUpdate' })
  ],
  build:{
    outDir:'./docs'
  }
});


