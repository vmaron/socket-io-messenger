import {Server, Socket} from 'socket.io';
import https from 'https';
import {SocketCustomEvent, SocketEvent} from '../constants';

export default class SocketService {
  private io: Server;

  constructor(httpServer: https.Server) {
    this.io = new Server(httpServer, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST']
      }
    });

    this.io.use((socket, next) => {
      const token = socket.handshake.auth.token;
      if (token === process.env.API_KEY) {
        next();
      } else {
        next(new Error('Not authorized!'));
      }
    });

    this.io.on(SocketEvent.CONNECT, (socket: Socket) => {
      console.log(`connect ${socket.id}`);

      socket.on(SocketCustomEvent.MSG_ANSWERED, (messageId: string) => {
        this.io.emit(SocketCustomEvent.MSG_ANSWERED, messageId);
      });

      socket.on(SocketEvent.DISCONNECT, () => {
        console.log(`disconnect ${socket.id}`);
      });
    });
  }

  emit(event:string, body: any) {
    if(body)
      this.io.emit(event, body);
  }
}
