import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/https://github.com/infix123/e-plantShopping.git",
  plugins: [react()],
})
