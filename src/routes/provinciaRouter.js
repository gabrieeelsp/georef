const { Router } = require('express');
const {
    getAll,
    getOneByNombre,
} = require('../controllers/provinciaController');

const provinciaRouter = Router();

provinciaRouter.get('/', (req, res) => getAll(req, res));

provinciaRouter.get('/:name', (req, res) => getOneByNombre(req, res));

module.exports = provinciaRouter;
