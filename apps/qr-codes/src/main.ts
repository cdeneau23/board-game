
import * as express from 'express';
import { QrCodeRoutes } from './app/v1/routes/qr-codes';

const app = express();
const port = process.env.port || 3333;


app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to qr-codes!' });
});

app.use("/api/v1/qr-codes", QrCodeRoutes);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
