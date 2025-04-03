import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@material-tailwind/react'], // Externalize the @material-tailwind/react module
    },
    chunkSizeWarningLimit: 2000, // Increase the chunk size warning limit to 2MB
  },
})
