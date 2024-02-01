const { Sequelize } = require('sequelize');
// const load = require('sequelize');
const { Municipio } = require('../db');

const getFiltersList = (filters) => {
    const filtersList = {};

    if (filters.name) {
        filtersList.name = Sequelize.where(
            Sequelize.fn('lower', Sequelize.col('Municipio.name')),
            'like',
            `%${filters.name.toLowerCase()}%`,
        );
    }

    if (filters.provinciaId) {
        filtersList.provinciaId = filters.provinciaId;
    }

    return filtersList;
};

const getAll = async (filters) => {
    // if ((await Municipio.count()) === 0) {
    //     await load();
    // }

    try {
        const items = await Municipio.findAll({
            where: getFiltersList(filters),
            include: ['provincia'],
        });

        return items;
    } catch (error) {
        // throw new Error('Se produjo un problema al obtener los datos');
        throw new Error(error.message);
    }
};

const getOneById = async (id) => {
    // if ((await Municipio.count()) === 0) await load();

    try {
        const item = await Municipio.findByPk(id);

        return item;
    } catch (error) {
        throw new Error('Se producjo un problema al obtener los datos');
    }
};

module.exports = {
    getAll,
    getOneById,
};
