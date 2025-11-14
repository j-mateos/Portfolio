import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    root: './src',
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './setupTests.js'
    }
})
