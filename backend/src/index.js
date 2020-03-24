const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json());

app.use(routes);

//Rotas
    //Metodos HTTP

    // '/' -> Recurso

    //GET: Buscar/Listar informação no back-end
    //POST: Criar uma informação no back-end
    //PUT: Alterar uma informação no back-end
    //DELETE: Deletar uma informação no back-end

    /**
     * Tipos de Paramentros
     * 
     * Query Params: Parametros Nomeados Enviados nas rota apos '?' (filtros , paginação)
     * Route Params: Paramentrps utilizados para identificar recursos
     * Request Body: Corpo da requisição , utilizado para criar ou alterar recursos
     */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('').where('');
     */

    


const port = 3333
app.listen(port , () => {
    console.log('Servidor Rodando na PORTA: ' + port);
    
})
