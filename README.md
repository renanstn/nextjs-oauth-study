## Objetivo

Entender como funciona um fluxo de oauth através do GitHub e do Google.

Tentar implementar testes end-to-end passando por estes meios de auth.

## Passos

- Inicializar um projeto next.js
  - `npx create-next-app@latest`
- Implementar testes com Cypress neste template basico
  - `npm install cypress --save-dev`
  - `npx cypress open`
- Instalar o next-auth
  - `npm install next-auth`

## ENV file

`.env.local`

```
NEXTAUTH_SECRET=secret!!!

GITHUB_SECRET=""
GITHUB_ID=""
```

## Tutorial seguido

- https://dev.to/andrews1022/integrate-github-oauth-with-nextauthjs-in-nextjs-13-with-custom-sign-in-out-pages-38mm

- https://docs.cypress.io/guides/end-to-end-testing/google-authentication

## Executando o Cypress

- Precisa estar com o app base rodando
- Abrir o Cypress com o comando `npm run test:e2e:open`
- Executar os testes

## Exemplo de configuração do Github oAuth

![github](screenshot.png)
