import 'reflect-metadata';
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import { routes } from './routes';

import './database';

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error!",
    });
  }
);

const PORT = process.env.PORT || 3333;

app.listen(PORT,() => {
  console.log(`Servidor iniciado na porta: ${PORT}`)
});