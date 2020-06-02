const express = require('express');
const swaggerUi = require('swagger-ui-express');

const routes = require('./routes');
const specs = require('./swagger/specs');

const server = express();

server.use(routes);
server.use(
  '/api-docs',
  swaggerUi.serve, swaggerUi.setup(specs)
);

module.exports = server;
