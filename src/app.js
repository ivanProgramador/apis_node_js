
'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//carregando as rotas

const indexRoute   = require('./routes/index');
const productRoute = require('./routes/product-route');

/*covertendo o conteudo recebido pelo app em json*/
app.use(bodyParser.json());

/*confirando o tamanho da url que eu quero receber da requisição*/
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;