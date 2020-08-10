import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
//GET: buscar ou listar uma info
//POST: criar uma nova info
//PUT: atualizar uma info existente
//DELETE: deletar uma info existente

//corpo (request body): dados para criacao ou atualizacao de um registro
//route params: idendificar qual recurso eu quero atualizar ou deletar
//query params: paginacao, filtros, ordenacao



app.listen(3333);

