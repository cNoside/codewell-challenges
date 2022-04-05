import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

const svgrPluginConfig = {
  svgrOptions: {
    icons: true
  }
};

export default defineConfig({
  plugins: [react(), svgrPlugin(svgrPluginConfig)],
  server: {
    port: 8000,
    host: true
  },
  base: '/hosterr-waitlist-page/'
});
