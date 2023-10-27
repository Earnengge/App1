import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Web3-work',
  server: {
    // ...
    // Remove or modify Permissions-Policy as needed
    headers: {
      'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
    },
  },
})
