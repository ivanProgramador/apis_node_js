
'use strict';

const express = require('express');

const router = express.Router();


/*Rota para enviar dados*/
const create = router.post('/',(req,res,next)=>{

    res.status(201).send(req.body);

});



/*Rota pra pegar dados*/
router.get('/',(req,res,next)=>{

    res.status(200).send({
        title:"Node store API",
        version: "0.0.1"
    });
});

/*Rota para editar dados no caso eu tenho que passar o id pra ela saber qual eo dado que ela tem que editar
  por isso diferente das outras ela tem um  /:id na url
*/

router.put('/:id',(req,res,next)=>{
     
    const id = req.params.id;

    res.status(200).send({
        id: id,
        item: req.body
    });

});



router.delete('/:id',(req,res,next)=>{
     
    
    res.status(200).send(req.body);
});



module.exports = router; 