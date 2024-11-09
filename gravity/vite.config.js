// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'  // https://vitejs.dev/config

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3001,  // Change the port to 3001
//   },
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,  // Optional: change the port
    proxy: {
      // Proxy all requests to `http://gravityglobalexport.com`
      '/': {
        target: 'http://gravityglobalexport.com', // Target server URL
        changeOrigin: true,  // Needed for virtual hosted sites
        rewrite: (path) => path,  // Keep the path unchanged
      },
    },
  },
});
