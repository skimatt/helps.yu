import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Pastikan ini ada
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Tambahkan plugin react di sini
    tailwindcss(),
  ],
  // Base '/' memastikan routing dimulai dari root domain
  base: '/', 
})