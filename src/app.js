


const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const router = express.Router();

/*covertendo o conteudo recebido pelo app em json*/
app.use(bodyParser.json());

/*confirando o tamanho da url que eu quero receber da requisição*/
app.use(bodyParser.urlencoded({extended: false}));


/*rota para pegar dados*/
const route = router.get('/',(req,res,next)=>{

    res.status(200).send({
        title:"Node store API",
        version: "0.0.1"
    });
});

/*Rota para enviar dados*/
const create = router.post('/',(req,res,next)=>{

    res.status(201).send(req.body);

});

/*Rota para editar dados no caso eu tenho que passar o id pra ela saber qual eo dado que ela tem que editar
  por isso diferente das outras ela tem um  /:id na url
*/

const put = router.put('/:id',(req,res,next)=>{
     
    const id = req.params.id;

    res.status(200).send({
        id: id,
        item: req.body
    });

});



const del = router.delete('/:id',(req,res,next)=>{
     
    
    res.status(200).send(req.body);
})





app.use('/',route);
app.use('/products',create);
app.use('/products',put);
app.use('/products',del);

module.exports = app;