const express = require('express');

const { PORT_APP } = process.env;

const server = express();

server.use('/', (req, res) => res.send('Estoy en la ruta GET /'))

server.listen(PORT_APP, () => {
    console.log(`Server running on port ${PORT_APP}`);
})