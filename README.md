# 🧪 Automação de Testes com Cypress + GitHub Actions

Este repositório contém um projeto de testes automatizados utilizando o [Cypress](https://www.cypress.io/) e integração contínua via [GitHub Actions](https://docs.github.com/pt/actions).

O objetivo é permitir que, a cada push ou pull request na branch `main`, os testes sejam executados automaticamente, garantindo a qualidade da aplicação de forma contínua.

---

## 📁 Estrutura do Projeto

```
├── cypress/
│   ├── e2e/               # Testes end-to-end
│   ├── fixtures/          # Dados de teste
│   ├── support/           # Configurações e comandos customizados
├── .github/
│   └── workflows/
│       └── ci.yml         # Pipeline de testes no GitHub Actions
├── cypress.config.js      # Configurações principais do Cypress
├── package.json           # Dependências e scripts do projeto
```

---

## 🚀 Como executar os testes localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (recomendado: versão 18+)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes)
- [Cypress](https://www.cypress.io/) instalado como dependência do projeto

### Passos

```bash
# 1. Instale as dependências
npm install

# 2. Rode o Cypress em modo interativo (UI)
npx cypress open

# ou, para rodar em background (modo headless):
npx cypress run
```

---

## 🤖 Execução automática com GitHub Actions

Toda vez que você fizer um **push** ou abrir um **pull request** para a branch `main`, o GitHub Actions irá:

1. Clonar o repositório.
2. Instalar as dependências.
3. Subir um servidor local com `npx serve`.
4. Executar os testes automatizados com Cypress.

### Arquivo do workflow (`.github/workflows/ci.yml`)

```yaml
name: Pipeline de Testes Cypress

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: 📦 Clonar o repositório
        uses: actions/checkout@v3

      - name: 🟢 Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: 📦 Instalar dependências
        run: npm install

      - name: 🚀 Rodar servidor local
        run: npx serve . -l 3000 &

      - name: 🧪 Rodar Cypress
        run: npx cypress run
```

---

## 📌 Dicas importantes

- Os testes Cypress ficam em `cypress/e2e/`. Você pode criar seus arquivos de teste com a extensão `.cy.js` ou `.cy.ts`.
- O comando `npx serve . -l 3000 &` serve para simular o frontend localmente durante os testes.
- O símbolo `&` no final do comando faz com que o servidor rode em segundo plano.
- O workflow está configurado para rodar apenas na branch `main`, mas isso pode ser alterado facilmente.

---

## 🙋‍♂️ Contribuindo

1. Faça um fork do repositório
2. Crie sua branch: `git checkout -b feature/sua-nova-feature`
3. Faça o commit: `git commit -m 'feat: adiciona nova feature'`
4. Dê push na sua branch: `git push origin feature/sua-nova-feature`
5. Crie um Pull Request

---

## 🛠️ Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) – Framework de testes E2E
- [GitHub Actions](https://github.com/features/actions) – CI/CD
- [Node.js](https://nodejs.org/) – Ambiente de execução JavaScript
- [Serve](https://www.npmjs.com/package/serve) – Servidor local simples

---

## 📬 Contato

Se tiver dúvidas, sugestões ou quiser contribuir com melhorias, fique à vontade para abrir uma issue ou entrar em contato!