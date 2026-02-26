# main-content-mf

Micro-frontend de conteúdo principal construído com [Next.js](https://nextjs.org), [Material UI](https://mui.com) e [Module Federation](https://webpack.js.org/concepts/module-federation/). Este repositório é um **remote** na arquitetura de micro-frontends e expõe o componente `MainContent` para ser consumido por uma aplicação host.

## Tecnologias

| Tecnologia | Versão |
|---|---|
| [Next.js](https://nextjs.org) | 15 |
| [React](https://react.dev) | 19 |
| [TypeScript](https://www.typescriptlang.org) | 5 |
| [Material UI](https://mui.com) | 7 |
| [Module Federation](https://github.com/module-federation/nextjs-mf) | 8 |
| [Single-SPA](https://single-spa.js.org) | 6 |
| [Tailwind CSS](https://tailwindcss.com) | 4 |

## Arquitetura

Este projeto implementa dois padrões de micro-frontend:

- **Module Federation** — o componente `MainContent` é exposto via `@module-federation/nextjs-mf` e pode ser carregado dinamicamente por qualquer host que referencie a URL remota.
- **Single-SPA** — o arquivo `src/app/microfrontend.tsx` exporta os lifecycles `bootstrap`, `mount` e `unmount` compatíveis com o orquestrador Single-SPA.

## Estrutura

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz da aplicação
│   ├── page.tsx            # Página standalone (visualização local)
│   ├── microfrontend.tsx   # Lifecycles Single-SPA
│   └── globals.css
└── components/
    └── MainContent.tsx     # Componente principal exportado via Module Federation
```

## Pré-requisitos

- [Node.js](https://nodejs.org) 18+
- [npm](https://www.npmjs.com) 9+

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

A aplicação sobe na porta **3003**: [http://localhost:3003](http://localhost:3003)

## Build

```bash
npm run build
```

## Verificação de tipos

```bash
npm run type-check
```

## Lint

```bash
npm run lint
```

## Deploy

O projeto está configurado para deploy na [Vercel](https://vercel.com). Em produção, o `assetPrefix` é definido como `/main-content-mf` e os headers CORS são habilitados para permitir o carregamento remoto pelo host.

```bash
npm run deploy
```

## Consumindo o remote (Module Federation)

No host, configure o remote apontando para a URL pública deste serviço:

```js
// next.config.js do host
remotes: {
  mainContentMf: 'mainContentMf@https://<url-do-remote>/_next/static/chunks/remoteEntry.js',
}
```

Em seguida, importe o componente de forma dinâmica:

```tsx
import dynamic from 'next/dynamic'

const MainContent = dynamic(() => import('mainContentMf/MainContent'))
```

## Licença

Privada.
