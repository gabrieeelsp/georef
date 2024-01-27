const Sequelize = require('sequelize');
const load = require('../load_db');
const { Provincia } = require('../db');

const getAll = async (req, res) => {
    if ((await Provincia.count()) === 0) {
        await load();
    }

    const items = await Provincia.findAll();

    res.status(200).json(items);
};

const getOneByNombre = async (req, res) => {
    const { name } = req.params;

    if ((await Provincia.count()) === 0) {
        await load();
    }

    const items = await Provincia.findAll({
        where: Sequelize.where(
            Sequelize.fn('lower', Sequelize.col('Provincia.name')),
            'like',
            `%${name.toLowerCase()}%`,
        ),
    });

    res.status(200).json(items);
};

module.exports = {
    getAll,
    getOneByNombre,
};
