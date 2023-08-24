import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  base: '/pwa/',
  plugins: [
    // vue()
    createVuePlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Vite PWA',
        short_name: 'My PWA',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa/img/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa/img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        apple: {
          icon: '/pwa/img/icons/apple-touch-icon.png',
          statusBarStyle: 'black-translucent', 
        },
      },
    }),
  ],
  build: {
    outDir: './docs',
  },
});
