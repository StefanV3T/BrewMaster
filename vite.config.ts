import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { plugin as markdownPlugin, Mode } from 'vite-plugin-markdown'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), markdownPlugin({
    mode: [Mode.HTML],
  })],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
