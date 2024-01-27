const server = require('./src/server');
const { conn } = require('./src/db');

const { PORT_APP } = process.env;

conn.sync({ alter: true }).then(() => {
    server.listen(PORT_APP, () => {
        // eslint-disable-next-line no-console
        console.log(`Server listening at ${PORT_APP}`);
    });
});
