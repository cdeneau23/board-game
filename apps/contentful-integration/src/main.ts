/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import cors = require('cors');
import * as express from 'express';
import { client } from './app/contentful-loader/conteful-loader';
import { ContfulContext } from './app/contentful-mapper/contentful-context';
import { CardController } from './app/controllers/card.controller';

const app = express();
app.use(cors());
app.use('/api/cards/:id', async (req, res) =>
  CardController(ContfulContext(client)).getCardById(req, res)
);

app.use('/api/cards', async (req, res) =>
  CardController(ContfulContext(client)).getAllCard(req, res)
);

const port = process.env.PORT || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
