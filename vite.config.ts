import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Necessário para publicar em https://<usuario>.github.io/<repositorio>/
  // Se for usar domínio próprio (ex: opexcontabilidade.com.br), troque para '/'
  base: '/opex-contabilidade/',
})
