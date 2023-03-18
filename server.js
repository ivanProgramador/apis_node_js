'use strict'

const http = require('http');
const debug = require('debug')('node_api:sever');
const express = require('express');

const app = express();

const port = normalizePort(process.env.port || '3000');

app.set(port, port);

const server = http.createServer(app);


const router = express.Router();

const route = router.get('/',(req,res,next)=>{

    res.status(200).send({
        title:"Node store API",
        version: "0.0.1"
    });
});

app.use('/',route);

server.listen(port);
server.on('error' , onError);
server.on('listening' , onListening);

console.log('API rodando na porta' + port);


/*função para normalizar a porta*/

function normalizePort(val){

    const port = parseInt(val , 10);

    if(isNaN(port)){
        return val;
    }
    if(port >= 0){
        return port;
    }
    return false;
}

/*funçao para identificar os tipos de erro */

function onError(error){

    if(error.syscall !== 'listen'){
        throw error;
    }
    
    const bind = typeof port === 'string' ?
    'Pipe' + port:
    'Port' + port;

    switch(error.code){

        case 'EACCESS':

            console.error(bind + 'Você precisa de mais previlegio');
            process.exit(1);

        break;

        case 'EADDRINUSE':

            console.error(bind + 'Porta já esta em uso');
            process.exit(1);

        break;

        default:

          throw error;

    }
     
}

/*Função que usa o debug*/
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
          ?'Pipe' + addr 
          :'port' + addr.port;
    debug('Listening on' + bind);

}



