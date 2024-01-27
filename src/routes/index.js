const { Router } = require('express');
const provinciaRouter = require('./provinciaRouter');
const municipioRouter = require('./municipioRouter');

const router = Router();

router.use('/provincias', provinciaRouter);
router.use('/municipios', municipioRouter);

module.exports = router;
