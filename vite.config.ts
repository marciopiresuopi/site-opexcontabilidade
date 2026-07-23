import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Domínio próprio configurado (www.opexcontabilidade.com.br) → base fica em '/'
  // Caso volte a usar só o domínio padrão do GitHub Pages, troque para '/site-opexcontabilidade/'
  base: '/',
})
