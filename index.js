const server = require('./src/server');
const { conn } = require('./src/db.js');

const { PORT_APP } = process.env;

conn.sync({ alter: true }).then(() => {
    server.listen(PORT_APP, () => {
      console.log(`Server listening at ${PORT_APP}`);
    });
  });