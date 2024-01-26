const express = require('express');

const server = express();

server.use('/', (req, res) => res.send('Estoy en la ruta GET /'))

module.exports = server;