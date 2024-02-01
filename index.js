const server = require('./src/server');
const { conn } = require('./src/db');
const load = require('./src/load_db');

const { PORT_APP } = process.env;

conn.sync({ alter: true }).then(() => {
    load();
    server.listen(PORT_APP, () => {
        // eslint-disable-next-line no-console
        console.log(`Server listening at ${PORT_APP}`);
    });
});
