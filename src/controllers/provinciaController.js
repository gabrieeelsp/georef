const Sequelize = require('sequelize');
// const load = require('../load_db');
const { Provincia } = require('../db');

const getFiltersList = (filters) => {
    const filtersList = {};

    if (filters.name) {
        filtersList.name = Sequelize.where(
            Sequelize.fn('lower', Sequelize.col('Provincia.name')),
            'like',
            `%${filters.name.toLowerCase()}%`,
        );
    }

    return filtersList;
};

const getAll = async (filters) => {
    // if ((await Provincia.count()) === 0) {
    //     await load();
    // }

    try {
        const items = await Provincia.findAll({
            where: getFiltersList(filters),
        });

        return items;
    } catch (error) {
        throw new Error('Se produjo un problema al obtener los datos');
    }
};

const getOneById = async (id) => {
    // if ((await Provincia.count()) === 0) {
    //     await load();
    // }

    try {
        const item = await Provincia.findByPk(id);

        return item;
    } catch (error) {
        throw new Error('Se produjo un problema al obtener los datos');
    }
};

module.exports = {
    getAll,
    getOneById,
};
