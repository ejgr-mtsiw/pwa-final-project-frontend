# pwa-final-project-frontend
Projeto Final de Programação Web Avançada

O backend em [Node.js](https://nodejs.org/) está disponível aqui:
https://github.com/ejgr-mtsiw/pwa-final-project-api

Esta plataforma permite gerir um conjunto de kits de recolha de dados, que serão
utilizados para analisar as condições atmosféricas (temperatura e humidade
relativa do ar) e do solo (humidade do solo) dos jardins do Agrupamento de
Escolas de Moimenta da Beira.

Esta informação será utilizada para otimizar os horários e os consumos de água
da manutenção dos espaços verdes.

Os kits estão a ser construídos pelos alunos do 3º ano do Curso Profissional de
Técnico de Eletrónica, Automação e Computadores.

Em complemento a esta plataforma foram desenvolvidas aplicações móveis, na
plataforma App Inventor, pelos alunos do 2º ano do Curso, possibilitando o
acompanhamento do estado dos jardins.

O trabalho aqui apresentado serve de plataforma para recolha, tratamento e
administração dos dados fornecidos pelos kits e a sua disponibilização às
aplicações móveis.

Este projeto é constituído pelo frontend desenvolvido em
 [Angular](https://angular.io/), que funciona como alternativa às aplicações
 móveis e como sistema de administração da plataforma.

## Tecnologias utilizadas
1. [Angular](https://angular.io/)
1. [Bootstrap](https://getbootstrap.com/)
1. [FontAwesome](https://fontawesome.com/)
1. [Chartjs](https://www.chartjs.org/)
1. [TypeScript](https://www.typescriptlang.org/)
1. [Sass](https://sass-lang.com/)
1. [FreeBSD](https://www.freebsd.org/)
1. [nginx](https://nginx.org/)
1. [lighttpd](https://www.lighttpd.net/)

## Instalação
1. Clonar o repositório
1. Instalar as dependências: `npm install`
1. Construir o frontend: `npx ng build [--base-href /pwa/]` `base-url` só é
necessária caso a aplicação não esteja a ser servida da raiz do (sub)domínio.
1. Correr o servidor: `npm start`

## Servidor de testes
A aplicação está disponível no endereço https://mtsiw.duckdns.org/pwa/