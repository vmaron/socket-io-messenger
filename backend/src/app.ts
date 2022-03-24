import express, { Application } from 'express';
import 'express-async-errors';

import winstonLogger from './startup/logger';
import { routes } from './startup/routes';

const app: Application = express();
routes(app);

process.on('uncaughtException', (ex) => {
	winstonLogger.error(ex.message, ex);
});
process.on('unhandledRejection', (ex) => {
	throw ex;
});

export { app };
