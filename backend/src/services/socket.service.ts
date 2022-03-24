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

      socket.on(SocketCustomEvent.ALARM_ANSWERED, (resourceId: string) => {
        this.io.emit(SocketCustomEvent.ALARM_ANSWERED, resourceId);
      });

      socket.on(SocketCustomEvent.ALARM_ACKNOWLEDGED, (resourceId: string) => {
        this.io.emit(SocketCustomEvent.ALARM_ACKNOWLEDGED, resourceId);
      });

      socket.on(SocketCustomEvent.CALL_HANGUP, (resourceId: string) => {
        this.io.emit(SocketCustomEvent.CALL_HANGUP, resourceId);
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
