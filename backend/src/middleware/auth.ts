import express from 'express';
import winstonLogger from '../startup/logger';

const auth = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (req.headers['x-api-key'] !== process.env.API_KEY) {
    winstonLogger.error('Invalid API key');
    return res.status(403).send({error: 'Invalid API key!'}).end();
  }
  next();
};
export {auth};
