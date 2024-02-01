const { getAll, getOneById } = require('../controllers/provinciaController');

const getAllHandler = async (req, res) => {
    const { name } = req.query;

    try {
        const resp = await getAll({ name });
        res.status(200).json(resp);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getOneByIdHandler = async (req, res) => {
    const { id } = req.params;

    if (Number.isNaN(id))
        return res.status(400).json({ message: 'El id debe ser un Número' });
    try {
        const resp = await getOneById(Number(id));
        if (!resp) return res.status(404).json({ message: 'Not Found' });
        return res.status(200).json(resp);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllHandler,
    getOneByIdHandler,
};
