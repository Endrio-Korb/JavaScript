const express = require('express')
const routes = express.Router()

// Rotas para controller pessoas
const pessoasController = require('./controlleres/PessoasController')
routes.get('/pessoas/list', pessoasController.list)
routes.post('/pessoas/insert', pessoasController.insert)
routes.put('/pessoas/update', pessoasController.update)
routes.delete('/pessoas/delete', pessoasController.delete)

module.exports = routes