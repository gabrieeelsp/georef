const { Provincia, Municipio } = require('./db');

const dataProvincias = require('../json/provincias.json');
const dataMunicipios = require('../json/municipios.json');

const load = async () => {
    await Provincia.bulkCreate(
        dataProvincias.provincias.map((item) => {
            return { id: Number(item.id), name: item.nombre };
        }),
    );

    await Municipio.bulkCreate(
        dataMunicipios.municipios.map((item) => {
            return {
                id: Number(item.id),
                name: item.nombre,
                ProvinciumId: Number(item.provincia.id),
            };
        }),
    );
};

module.exports = load;
