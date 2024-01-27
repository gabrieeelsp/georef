const { Router } = require('express');
const { getAll, getOneById } = require('../controllers/municipioController');

const municipioRouter = Router();

municipioRouter.get('/', (req, res) => getAll(req, res));

municipioRouter.get('/:id', (req, res) => getOneById(req, res));

module.exports = municipioRouter;
