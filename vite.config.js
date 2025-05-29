import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Use swc plugin as per your devDependencies

export default defineConfig({
  plugins: [react()],
  base: './', 
  build: {
    outDir: 'dist', 
  },
});