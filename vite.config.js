import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], 
  server: {
    proxy: {
      '/api': 'https://musiccartbackend-production.up.railway.app/',
    },
    host: '0.0.0.0',
    baseUrl: 'https://musiccartbackend-production.up.railway.app/',
  },
})
