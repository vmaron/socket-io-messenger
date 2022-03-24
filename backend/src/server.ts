import {app} from './app';
import https from 'https';
import fs from 'fs';
import {Request, Response} from 'express';
import winstonLogger from './startup/logger';
import SocketService from './services/socket.service';
import {Singleton} from './constants';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 8443;

const options = {
  key: fs.readFileSync(__dirname + '/ssl/private-key.pem'),
  cert: fs.readFileSync(__dirname + '/ssl/public-cert.pem'),
  credentials: true
};

const httpServer: https.Server = https.createServer(options, app);
app.set(Singleton.SOCKET_SERVICE, new SocketService(httpServer));

app.get('/', (req: Request, res: Response) => {
  res.json({'greet': 'hello'});
});

httpServer.listen(PORT);
httpServer.on('listening', () => {
  winstonLogger.info(`${process.env.NODE_ENV || 'dev'} server up listening on PORT ${PORT}`);
});
