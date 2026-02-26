import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/auth/',
  plugins: [react(), tailwindcss()],
  preview: {
    allowedHosts: ['99notes.org', 'www.99notes.org', 'localhost']
  },
  server: {
    host: 'localhost',
    port: 3003
  }
})
