//Importação das bibliotecas
const express = require('express');
// const crypto = require('crypto');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');




//Criando o Router
const routes = express.Router();

routes.post('/' , (req , res) =>  {
    res.json({
        evento: 'Semana Omnistack',
        aluno: 'Romullo o Ousado'
    })
})

//Rotas Session
    routes.post('/sessions' , SessionController.create)

//Rotas ONG
    routes.get('/ongs' , OngController.index);
    routes.post('/ongs' , OngController.create)

//Rotas Casos/Incidents
    routes.get('/incidents' , IncidentController.index)
    routes.post('/incidents' , IncidentController.create)
    routes.delete('/incidents/:id' , IncidentController.delete)

//Rotas Profile
    routes.get('/profile', ProfileController.index)


module.exports = routes