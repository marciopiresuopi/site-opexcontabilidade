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
3. Em **Custom domain**, digite `www.opexcontabilidade.com.br` e salve (o GitHub cria/mantém o arquivo `public/CNAME`, que já está no projeto).
4. Depois que o DNS propagar (veja abaixo), marque **Enforce HTTPS**.

## Domínio próprio (www.opexcontabilidade.com.br) via Cloudflare

O arquivo `public/CNAME` já está configurado com `www.opexcontabilidade.com.br`, e o `vite.config.ts` já usa `base: '/'` (necessário para domínio próprio).

Na Cloudflare, na zona `opexcontabilidade.com.br`, em **DNS → Records**, adicione:

| Tipo  | Nome | Conteúdo                     | Proxy status |
|-------|------|-------------------------------|--------------|
| CNAME | www  | `<seu-usuario>.github.io`     | DNS only (nuvem cinza) |

> Deixe como **DNS only** (nuvem cinza, não laranja) no início. O GitHub Pages emite o certificado SSL validando o domínio diretamente — se o proxy da Cloudflare (laranja) estiver ativo antes disso, a emissão do certificado pode falhar. Depois que o HTTPS estiver ativo e funcionando no GitHub (Settings → Pages mostrando o certificado emitido), você pode ativar o proxy da Cloudflare (nuvem laranja) se quiser os benefícios de CDN/proteção — nesse caso, ajuste **SSL/TLS → Overview** para **Full** (nunca "Flexible", isso causa loop de redirecionamento com GitHub Pages).

Se também quiser que `opexcontabilidade.com.br` (sem `www`) funcione, redirecionando para o `www`:

1. Adicione registros **A** para a raiz (`@`) apontando para os IPs do GitHub Pages:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
2. Em **Rules → Redirect Rules** na Cloudflare, crie uma regra redirecionando `opexcontabilidade.com.br/*` para `https://www.opexcontabilidade.com.br/$1` (isso exige que o registro da raiz esteja com proxy ativado/nuvem laranja).

Propagação de DNS costuma levar de alguns minutos a algumas horas.

O site ficará disponível em `https://www.opexcontabilidade.com.br`.

## Build de produção manual

```bash
npm run build
```

Gera os arquivos finais em `dist/`.
