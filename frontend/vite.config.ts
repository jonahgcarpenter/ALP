import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Backend development server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'), // Adjust as needed
      },
    },
  },
  build: {
    outDir: 'dist', // Ensure build output is in the 'dist' directory
  },
});