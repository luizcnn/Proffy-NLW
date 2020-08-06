import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
// O express normalmente não entende o formato json. Devemos fazer esta chamada abaixo para que 
// ele passe a converter os dados das requisições para json.
app.use(express.json());
app.use(routes)
app.use(cors)

//localhost:3333
app.listen(3333);