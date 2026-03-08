import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.HEIC', '**/*.heic'],
  base: './',
  build: { outDir: 'dist', assetsDir: 'assets' }
});
