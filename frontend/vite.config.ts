import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/', // Ensures absolute paths for all assets
  plugins: [react()],
  build: {
    outDir: 'dist', // Output folder for production build
    emptyOutDir: true,
    assetsDir: 'assets', // Directory for static assets
    sourcemap: process.env.NODE_ENV === 'development', // Source maps in development for debugging
  },
  
  // CHANGE PORTS FOR DOCKER
  server: {
    port: 3000,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: false,
      },
      '/auth': {
        target: 'http://localhost:5000',
        changeOrigin: false,
      }
    }
  },
  esbuild: {
    drop: ['console', 'debugger'], // Remove logs and debuggers in production
  },
})