import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '5173-i9rvqkltb6t8dyzw68qyx-e5c323ab.us2.manus.computer',
      'localhost',
      '127.0.0.1',
      '169.254.0.21'
    ]
  }
})
