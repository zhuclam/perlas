import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'
import alias from '@rollup/plugin-alias'

const aliases = alias({
  resolve: ['.svelte', '.js', '.ts'],
  entries: [
    { find: 'firebase-auth', replacement: 'src/firebase.ts' },
    { find: '@/features', replacement: 'src/features' },
  ],
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), aliases],
})
