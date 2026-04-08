import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/catalogue/',
  server: {
    // Serve index.html for all routes so the embedded studio can self-route
    historyApiFallback: true,
  },
})
