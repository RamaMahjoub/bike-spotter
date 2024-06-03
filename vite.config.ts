import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/',
    build: {
        outDir: 'dist'
    },
    server: {
        host: true,
        strictPort: true,
        port: 10000,
    },
    resolve: {
        alias: {
            '@api': `${path.resolve(__dirname, './src/@api/')}`,

            '@core/hooks': `${path.resolve(__dirname, './src/@core/hooks')}`,

            '@core/theme': `${path.resolve(__dirname, './src/@core/theme')}`,

            '@core/utils': `${path.resolve(__dirname, './src/@core/utils')}`,

            '@core/styles': `${path.resolve(__dirname, './src/@core/styles/')}`,

            'main/app': `${path.resolve(__dirname, './src/main/app/')}`,

            'main/configs': `${path.resolve(__dirname, './src/main/configs/')}`,

            'main/store': `${path.resolve(__dirname, './src/main/store/')}`,

            'main/types': `${path.resolve(__dirname, './src/main/types/')}`
        }
    }
})
