# main-content-mf

Microfrontend (Next.js) responsável pelo conteúdo principal da aplicação.

## Requisitos

- **Node.js** versão LTS (recomendada)
- Gerenciador de pacotes **npm** (incluso com o Node.js)

## Como executar (desenvolvimento)

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse [http://localhost:3003](http://localhost:3003) no navegador para visualizar a aplicação.

## Scripts úteis

| Script | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run start` | Inicia o servidor em modo produção |
| `npm run lint` | Executa o linter (se configurado) |

## Estrutura do projeto

```
app/
└── page.tsx   # Página principal da aplicação
```

## Deploy

Para gerar o build de produção e iniciar o servidor:

```bash
npm run build
npm run start
```

O projeto pode ser implantado na [Vercel](https://vercel.com) como opção de hospedagem.
