# main-content-mf

Micro-frontend de conteúdo principal construído com [Next.js](https://nextjs.org), [Material UI](https://mui.com) e [Module Federation](https://webpack.js.org/concepts/module-federation/). Este repositório é um **remote** na arquitetura de micro-frontends e expõe o componente `MainContent` para ser consumido dinamicamente por um shell/host.

## Visão Geral

| Característica | Detalhe |
|---|---|
| Framework | Next.js 15 |
| Linguagem | TypeScript |
| UI | Material UI (MUI) v7 + Tailwind CSS v4 |
| Micro-frontend | Single-SPA + Module Federation (`@module-federation/nextjs-mf`) |
| Porta padrão | `3003` |
| Deploy | Vercel |

## Arquitetura

Este projeto atua como um **microfrontend remoto**. O componente `MainContent` é exposto via Module Federation e pode ser carregado dinamicamente por qualquer host compatível em tempo de execução — sem necessidade de redeployar o host ao atualizar este remote.

```
Host / Shell Application
    └── Module Federation
            └── main-content-mf (este repositório)
                    └── MainContent component
```

## Instalação

```bash
npm install
```

## Desenvolvimento

Inicie o servidor de desenvolvimento na porta `3003`:

```bash
npm run dev
```

Acesse [http://localhost:3003](http://localhost:3003) no navegador para visualizar a aplicação.

## Scripts Disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento na porta 3003 |
| `npm run build` | Gera o build de produção |
| `npm run start` | Inicia o servidor de produção na porta 3003 |
| `npm run lint` | Executa o ESLint |
| `npm run type-check` | Verifica os tipos TypeScript sem emitir arquivos |
| `npm run deploy` | Realiza o deploy na Vercel em modo produção |

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz da aplicação
│   ├── page.tsx            # Página principal (MainContentMicroFrontend)
│   ├── microfrontend.tsx   # Ciclos de vida do Single-SPA (bootstrap/mount/unmount)
│   └── globals.css         # Estilos globais
└── components/
    └── MainContent.tsx     # Componente principal exposto via Module Federation
```

## Module Federation

O componente `MainContent` é exposto como um **remote** via `@module-federation/nextjs-mf`. Para consumi-lo em um host, configure o `next.config` do host apontando para a URL deste remote:

```js
// next.config.js do Host
new NextFederationPlugin({
  remotes: {
    // Desenvolvimento: 'mainContentMf@http://localhost:3003/_next/static/chunks/remoteEntry.js'
    // Produção:        'mainContentMf@https://seu-remote.vercel.app/_next/static/chunks/remoteEntry.js'
    mainContentMf: 'mainContentMf@<URL_DO_REMOTE>/_next/static/chunks/remoteEntry.js',
  },
})
```

Em seguida, importe o componente remotamente:

```tsx
import dynamic from 'next/dynamic'

const MainContent = dynamic(() => import('mainContentMf/MainContent'), { ssr: false })
```

## CORS

A aplicação está configurada para aceitar requisições de qualquer origem (`Access-Control-Allow-Origin: *`), necessário para o carregamento remoto via Module Federation.

## Deploy

O deploy é feito na [Vercel](https://vercel.com). Para fazer deploy manualmente:

```bash
npm run deploy
```

Em produção, o `assetPrefix` é configurado automaticamente para `/main-content-mf` em `next.config.ts`. Isso garante que os assets do Module Federation sejam servidos com o prefixo correto pelo CDN da Vercel.

## Tecnologias

- [Next.js](https://nextjs.org/docs) — Framework React com suporte a SSR e App Router
- [React](https://react.dev) — Biblioteca de UI
- [TypeScript](https://www.typescriptlang.org) — Tipagem estática
- [Material UI](https://mui.com) — Componentes de UI
- [Tailwind CSS](https://tailwindcss.com) — Utilitários de CSS
- [Single-SPA](https://single-spa.js.org) — Orquestração de micro-frontends
- [Module Federation](https://webpack.js.org/concepts/module-federation/) — Compartilhamento de módulos em tempo de execução
