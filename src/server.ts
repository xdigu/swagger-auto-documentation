import express from 'express';
import { serve, setup } from 'swagger-ui-express';

import routes from './routes';
import specs from './swagger/specs';

const server = express();

server.use(routes);
server.use('/api-docs', serve, setup(specs));

export default server;
