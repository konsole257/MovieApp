import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    base: '/MovieApp/', 
    plugins: [react()],
    build: {
      ssr: path.resolve(__dirname, 'src/entry-server.tsx'),
      outDir: 'dist/server',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
})
