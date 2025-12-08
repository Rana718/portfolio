import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve:{
    alias:{
      "@": path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation': ['framer-motion', 'motion'],
          'icons': ['lucide-react', 'react-icons'],
          'ui-components': ['class-variance-authority', 'clsx', 'tailwind-merge'],
          'utils': ['simplex-noise', 'svg-dotted-map']
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      }
    },
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false
  }
})
