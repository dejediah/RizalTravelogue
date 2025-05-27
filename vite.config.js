import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'   // ⟵ NEW

export default defineConfig({
  plugins: [
    tailwindcss(),   // ⟵ MUST be first so it can own the CSS pipeline
    react()
  ]
})
