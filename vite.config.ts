import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
    svgr()
  ],
})
