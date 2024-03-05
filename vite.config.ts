import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  base: '/test-pwa/', // change if you're deploying to github pages
  resolve: {
    preserveSymlinks: true // necessary for yarn link to work
  }
})
