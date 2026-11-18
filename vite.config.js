
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'SKILL PRO 2K27',
        short_name: 'SKILL PRO',
        description: 'SKILL PRO 2K27 Event',
        theme_color: '#111111',
        background_color: '#111111',
        display: 'standalone',
        start_url: '/',

        icons: [
          {
            src: '/pwa-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },

      workbox: {
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg,woff2}'
        ]
      }
    })
  ],

  server: {
    port: 3000,
    open: true
  }
});
