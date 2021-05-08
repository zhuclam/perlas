import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@/firebase',
        replacement: path.resolve(__dirname, 'src', 'firebase.ts'),
      },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
    optimizeDeps: {
      include: ['javascript-time-ago/locale/es'],
    },
  },
  plugins: [svelte()],
})
