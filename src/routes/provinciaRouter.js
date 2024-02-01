const { Router } = require('express');
const {
    getAllHandler,
    getOneByIdHandler,
} = require('../handlers/provinciaHandler');

const provinciaRouter = Router();

provinciaRouter.get('/', getAllHandler);

provinciaRouter.get('/:id', getOneByIdHandler);

module.exports = provinciaRouter;
