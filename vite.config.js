import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Добавьте алиасы, если необходимо
    },
  },
  css: {
    modules: {
      // Если вы используете CSS модули, настройте их здесь
    },
  },
  // Дополнительные настройки
  server: {
        host: true,
        port: 8000, // This is the port which we will use in docker
    }
});
