import { defineConfig } from 'vite';

export default defineConfig({
  base: '/sonoff_s20/',
  server: {
    port: 3000,
    open: true
  }
});
