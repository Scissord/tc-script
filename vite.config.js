import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '192.168.0.136',
    port: 5173,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components/lib',
      '@utils': '/src/utils/lib',
      '@hooks': '/src/hooks/lib',
      '@store': '/src/store/lib',
      '@plugins': '/src/plugin/lib',
      '@api': '/src/api/lib',
    },
    extensions: ['.js', '.vue', '.json'],
  }
})
