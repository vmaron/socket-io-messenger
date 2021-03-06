import {io, Socket} from 'socket.io-client';

import { SocketCustomEvent,SocketEvent, SocketMessage} from './socket-client.types';

import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {Store} from "@ngrx/store";
import {State} from "@core/message/message.model";
import {actionReceiveMessage} from "@core/message/messages.action";

@Injectable()
export class SocketClient {
  private socket: Socket;


  constructor(private store: Store<State>) {

    this.socket = io(environment.webSocketHost, {
      auth: {
        token: environment.apiKey
      }
    });

    this.socket.on(SocketEvent.CONNECT, () => {
      console.log(`connect ${this.socket.id}`);
    });

    this.socket.on(SocketEvent.CONNECT_ERROR, (err) => {
      console.log(err.message);
    });

    this.socket.on(SocketEvent.DISCONNECT, () => {
      console.log('disconnect');
    });


    this.socket.on(SocketCustomEvent.MSG_CREATED, (socketMsg: SocketMessage) => {
      this.store.dispatch(actionReceiveMessage({payload: socketMsg}));
    });

    this.socket.on(SocketCustomEvent.MSG_ANSWERED, (messageId: string) => {
      console.log(messageId);
    });

    this.socket.on(SocketCustomEvent.MSG_ACKNOWLEDGED, (messageId: string) => {
      console.log(messageId);
    });
  }

  answerMessage(messageId: string) {
    this.socket.emit(SocketCustomEvent.MSG_ANSWERED, messageId);
  }

  acknowledgeMessage(eventId: string) {
    this.socket.emit(SocketCustomEvent.MSG_ACKNOWLEDGED, eventId);
  }
}
