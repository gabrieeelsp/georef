const { getAll, getOneById } = require('../controllers/municipioController');

const getAllHandler = async (req, res) => {
    const { name, provinciaId } = req.query;

    try {
        const resp = await getAll({ name, provinciaId });
        return res.status(200).json(resp);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getOneByIdHandler = async (req, res) => {
    const { id } = req.params;

    if (Number.isNaN(id))
        return res.status(400).json({ message: 'El id debe ser un número' });

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
