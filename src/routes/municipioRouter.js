const { Router } = require('express');
const {
    getAllHandler,
    getOneByIdHandler,
} = require('../handlers/municipioHandler');

const municipioRouter = Router();

municipioRouter.get('/', getAllHandler);

municipioRouter.get('/:id', getOneByIdHandler);

module.exports = municipioRouter;
