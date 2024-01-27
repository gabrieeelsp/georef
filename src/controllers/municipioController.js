const Sequelize = require('sequelize');
const load = require('../load_db');
const { Provincia, Municipio } = require('../db');

const getAll = async (req, res) => {
    if ((await Municipio.count()) === 0) {
        await load();
    }

    const name = req.query.name ? req.query.name : '';
    const provinciaId = req.query.provincia_id
        ? Number(req.query.provincia_id)
        : null;

    if (!name && !provinciaId) {
        const items = await Municipio.findAll({
            attributes: ['id', 'name'],
            include: [
                {
                    model: Provincia,
                },
            ],
            order: [['name', 'ASC']],
        });

        res.status(200).json(items);
    }

    if (!name && provinciaId) {
        const items = await Municipio.findAll({
            where: {
                ProvinciumId: provinciaId,
            },
            attributes: ['id', 'name'],
            include: [
                {
                    model: Provincia,
                },
            ],
            order: [['name', 'ASC']],
        });

        res.status(200).json(items);
    }

    if (name && !provinciaId) {
        const items = await Municipio.findAll({
            where: Sequelize.where(
                Sequelize.fn(
                    'unaccent',
                    Sequelize.fn('lower', Sequelize.col('Municipio.name')),
                ),
                'like',
                `%${name.toLowerCase()}%`,
            ),
            attributes: ['id', 'name'],
            include: [
                {
                    model: Provincia,
                },
            ],
            order: [['name', 'ASC']],
        });

        res.status(200).json(items);
    }

    if (name && provinciaId) {
        const items = await Municipio.findAll({
            where: Sequelize.where(
                Sequelize.fn(
                    'unaccent',
                    Sequelize.fn('lower', Sequelize.col('Municipio.name')),
                ),
                'like',
                `%${name.toLowerCase()}%`,
            ),
            attributes: ['id', 'name'],
            include: [
                {
                    model: Provincia,
                },
            ],
            order: [['name', 'ASC']],
        });

        res.status(200).json(
            items.filter((item) => item.Provincium.id === provinciaId),
        );
    }
};

const getOneById = async (req, res) => {
    const { id } = req.params;

    if (Number.isNaN(id))
        return res
            .status(500)
            .json({ message: 'Debe ingresar in Número como Id' });

    if ((await Municipio.count()) === 0) {
        await load();
    }

    const item = await Municipio.findByPk(id, {
        attributes: ['id', 'name'],
        include: [
            {
                model: Provincia,
            },
        ],
        order: [['name', 'ASC']],
    });

    if (!item)
        return res
            .status(404)
            .json({ message: 'No se encontro un municipio con el Id' });

    return res.status(200).json(item);
};

module.exports = {
    getAll,
    getOneById,
};
