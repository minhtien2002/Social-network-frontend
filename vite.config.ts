import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
  base: "/",
  plugins: [svgr(),react() ],
  preview: { 
    port: 8080,
    strictPort: true,
  },
  server: {
    port: parseInt(env.PORT),
    host: true,
    origin: "localhost:8080",
  },
}
})


