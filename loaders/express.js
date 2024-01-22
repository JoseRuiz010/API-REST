import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import { router } from '../api/index.js';


export default async ({ app }) => {
  app.use(cors());
  app.use(morgan('dev'));
  app.use('/api', router);
  app.use(express.json());

  return app;
}
