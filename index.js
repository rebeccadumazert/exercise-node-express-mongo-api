const express = require('express');
const routes = require('./routes');
const middlewares = require('./middlewares');
const { initialize } = require('./scripts/init');

const app = express();

middlewares(app);
routes(app);

PORT = process.env.PORT || 5000;

app.listen(PORT);
