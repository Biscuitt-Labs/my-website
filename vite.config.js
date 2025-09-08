// Vite config: enables React fast refresh + '@' alias to /src.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
})