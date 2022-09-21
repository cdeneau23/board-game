import bodyParser = require('body-parser');
import * as express from 'express';
import { ShortUrlRoutes } from './app/v1/routes/shortend-url.routes';
import { connection } from './config/db/db.config';

const app = express();

// Database config

connection.once('open', () => console.log('DB Connected'));
connection.on('error', () => console.log('Error'));
// parse application/json
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to shortend-url-api!' });
});

// app.get('/:code', QrCodesController().shortened)
app.use('/api/v1/short-url', ShortUrlRoutes);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
