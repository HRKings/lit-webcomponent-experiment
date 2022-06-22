import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'Lit-WC',
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})
