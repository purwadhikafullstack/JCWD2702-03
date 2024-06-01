import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './api/routers';
import bodyParser from 'body-parser';

import { PORT } from './config';
const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(bodyParser.json());

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.status || 500;
  const statusMessage = err.message || 'Error';

  res.status(statusCode).send({
    error: true,
    message: statusMessage,
    data: null,
  });
});

app.listen(PORT, () => {
  console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
});
