# NLW-proffy
<p align="justify"> Proffy - Uma plataforma de estudos, desenvolvida na segunda Next Level Week da Rocketseat </p>

<div style="display: flex; justify-content: center">
  <img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT"/>
  <img src="https://img.shields.io/static/v1?label=NodeJs&message=Backend&color=green&style=for-the-badge&logo=NODE"/>
</div>

> Status do Projeto: Em desenvolvimento :warning:

## Mobile :iphone:
<div style="display: flex">
  <img width="270px" height="480px" src="https://github.com/luizcnn/Proffy-NLW/blob/master/mobile/src/assets/images/gifs/WhatsApp-Video-2020-08-26-at-15.32.18.gif" />
  <img width="270px" height="480px" src="https://github.com/luizcnn/Proffy-NLW/blob/master/mobile/src/assets/images/gifs/WhatsApp-Video-2020-08-26-at-15.31.29.gif" />
</div>

## Busca de Professores:
<img width="640px" height="360px" src="https://github.com/luizcnn/Proffy-NLW/blob/master/web/src/assets/images/1.jpeg" />

## Busca de Professores (Responsivo): 
<img width="270px" height="480px" src="https://github.com/luizcnn/Proffy-NLW/blob/master/web/src/assets/images/2.jpeg" />

## Cadastro de aulas:
<img width="270px" height="480px" src="https://github.com/luizcnn/Proffy-NLW/blob/master/web/src/assets/images/3.jpeg" />

## Funcionalidades :trophy:
- Busca de professores cadastrados
  - Busca utilizando filtros como matéria, dia da semana e horário para aula.
  - Na versão mobile, pode-se favoritar seus professores mais queridos :hearts:
- Cadastro de aulas

## Como rodar a aplicação (Versão web) :arrow_forward:

No terminal, clone o projeto: 

```
git clone https://github.com/luizcnn/Proffy-NLW
```
Entre na pasta do projeto:

```
cd Proffy-NLW
```
Entre na pasta da versão web:

```
cd web
```

Instale as dependências via yarn ou npm:

```
yarn install
```
ou

```
npm install
```

Execute a aplicação via npm ou yarn

```
yarn start
```
ou

```
npm start
```
Agora é só acessar a aplicação através da url http://localhost:3000/.

Para verificar as funcionalidades de cadastro, você deve rodar o servidor do backend. Para isso, entre na pasta do <a href="https://github.com/luizcnn/Proffy-NLW/tree/master/backend"><span>Backend</span></a>, instale as dependências e execute a aplicação com os dois últimos passos indicados acima.

## Linguagens e Libs utilizadas :books:

### Versão Web:
- [React](https://reactjs.org/)
- [React Router Dom](https://reactrouter.com/web/guides/quick-start)
- [Axios](https://github.com/axios/axios)
- [TypeScript](https://www.typescriptlang.org/)

### Versão Mobile:
- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Axios](https://github.com/axios/axios)
- [TypeScript](https://www.typescriptlang.org/)

### Backend:
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [Knex](http://knexjs.org/)
- [Cors](https://expressjs.com/en/resources/middleware/cors.html)
- [SQLite](https://www.sqlite.org/index.html)


## Funcionalidades a serem implementadas:
 - Upload de imagem para avatar de usuário;
 - Cadastro de usuários
  - Autenticação de usuários no sistema, com tokens e senha criptografada.
