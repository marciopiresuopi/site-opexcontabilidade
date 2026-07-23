# Site — OPEX Contabilidade

Site institucional da OPEX Contabilidade, construído com React + Vite + TypeScript + Tailwind CSS.

## Estrutura

```
src/
  components/    # Cada seção do site (Header, Hero, About, Solutions, CTA, Footer)
  data/colors.ts # Cores da marca — altere aqui para atualizar em todo o site
  index.css      # Fontes e tema Tailwind
  App.tsx        # Composição das seções da página
```

## Rodando localmente

Pré-requisito: Node.js 20+ instalado.

```bash
npm install
npm run dev
```

Abra http://localhost:5173 no navegador. A página atualiza automaticamente ao salvar um arquivo.

## Editando o conteúdo

- **Textos e seções**: edite os arquivos em `src/components/`.
- **Cores da marca**: edite `src/data/colors.ts`.
- **Contato/endereço**: `src/components/Footer.tsx`.

## Publicando no GitHub Pages

Este projeto já vem com um workflow (`.github/workflows/deploy.yml`) que publica o site automaticamente a cada push na branch `main`.

Passos únicos de configuração, depois do primeiro push:

1. No GitHub, vá em **Settings → Pages**.
2. Em "Build and deployment", selecione **Source: GitHub Actions**.
3. Pronto — a cada alteração enviada para `main`, o site é reconstruído e publicado automaticamente.

O site ficará disponível em `https://<seu-usuario>.github.io/opex-contabilidade/`.

> Se o repositório tiver outro nome, ajuste a linha `base` em `vite.config.ts` para `/nome-do-repositorio/`. Se usar um domínio próprio (ex: opexcontabilidade.com.br), troque `base` para `/` e configure o domínio em Settings → Pages → Custom domain.

## Build de produção manual

```bash
npm run build
```

Gera os arquivos finais em `dist/`.
