# youtube-cypress

Baixe o projeto no Github:
- `https://github.com/samlucax/youtube-cypress.git`

Passo a passo para executar os testes:

1.Acessar o diretório backend, instalar as dependências e iniciar a api:
  - `cd backend` 
  - depois `npm install`
  - depois `npm start`

2.Acessar o diretório frontend, instalar as dependências e iniciar o site:
  - `cd frontend`
  - depois `npm install`
  - depois `npm start`
  
3.Acessar o diretório root do projeto (que tem a pasta Cypress), instalar as dependências e abrir o Cypress Runner:
  - `npm install`
  - `./node_modules/.bin/cypress open`

  - ou assim
  - PS E:\_Cypress\youtube-cypress\_Samuel_Lucas\youtube-cypress-master\cypress> npx cypress open

No arquivo package.json incluir o scripts
    "cy:open": "cypress open"

No terminal digitar o comando para abrir o Cypress 
    npm rum cy:open

Instalar o allure relatorio
    scoop install allure
    scoop update allure

Adicionar a dependencia conforme site
https://www.npmjs.com/package/@shelex/cypress-allure-plugin

Precisa ter o java instalado na maquina versão 8
java --version

Instalar allure como dependencia de desenvolvimento
    npm i -D @shelex/cypress-allure-plugin

Adicionar o plugin in cypress/plugins/index.js
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = (on, config) => {
    allureWriter(on, config);
    return config;
};

Register commands in cypress/support/index.js file:
import '@shelex/cypress-allure-plugin';
require('@shelex/cypress-allure-plugin');

Executar os testes indicando para gerar o relatorio
npx cypress run --env allure=true


allure open allure-report


Executar os testes:
npx cypress run



  
  Se quiser, apague o projeto do Cypress e tente fazer do zero acompanhando o vídeo. 
  Bons estudos!


## PageObjects

Páginas:
- Logon
- Register (cadastro)
- Profile (perfil da ong)
- NewIncident (cadastro de casos)

Cada pagina, possui: 
- acoes -> index.js
- elementos -> elements.js
