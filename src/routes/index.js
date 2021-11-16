const { Router } = require('express');

const DevController = require('../controller/DevController');

const routes = Router()

routes.get('/users', DevController.index)
routes.post('/users', DevController.store)


module.exports = routes;
