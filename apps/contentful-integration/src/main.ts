/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { client } from './app/contentful-loader/conteful-loader';
import { ContentfulFetcher } from './app/contentful-mapper/contentful-mapper';
import { ContentfulTypeMapper } from './app/model-mappers';
import { Card, CardEntry } from './app/types/card';

const app = express();

app.get('/api', async (req, res) => {
  const entry = await ContentfulFetcher(client).getAllEntriesByType<CardEntry, Card>(
    'card',
    ContentfulTypeMapper.cardMapper
  );
  res.send(entry);
});

const port = process.env.PORT || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
