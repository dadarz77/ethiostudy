import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'EthioStudy — Grade 9–12',
        short_name: 'EthioStudy',
        description: 'Ethiopian new-curriculum study app: lessons, quizzes, AI tutor. Offline-ready.',
        theme_color: '#0b1020',
        background_color: '#0b1020',
        display: 'standalone',
        icons: [
          { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2,json}'],
        // 3MB of lesson JSON must be precached for true offline use
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
      },
    }),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: [],
    include: ['src/**/*.test.{ts,tsx}'],
    // Run the suite in the users' timezone, not the runner's. The app derives
    // streaks from local calendar days; a UTC runner would silently pass
    // timezone bugs that reset a student's streak at 01:30 local time.
    env: { TZ: 'Africa/Addis_Ababa' },
    // curriculum.test.ts loads 216 lesson JSON files (~3 MB). 5s was never a
    // realistic budget — but if this ever needs more than 30s, the fixture
    // loader is the problem, not the timeout.
    testTimeout: 30_000,
    hookTimeout: 30_000,
    // Use forked child processes instead of worker_threads. On Windows,
    // worker_threads share the V8 heap and time-out when multiple tests
    // simultaneously load the large JSON fixtures (nat-exams, curriculum…).
    pool: 'forks',
    // Modules are read-only in tests, so sharing the module cache
    // across files within the same fork is safe and cuts cold-start time.
    isolate: false,
    maxWorkers: 1,
  },
});
