import {io, Socket} from 'socket.io-client';

import {SocketAlarm, SocketCustomEvent, SocketEmail, SocketEvent} from './socket-client.types';

import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SocketClient {
  private socket: Socket;


  constructor() {

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


    this.socket.on(SocketCustomEvent.ALARM_CREATED, (socketAlarm: SocketAlarm) => {
      console.log(socketAlarm.data);
    });

    this.socket.on(SocketCustomEvent.ALARM_ANSWERED, (resourceId: string) => {
      console.log(resourceId);
    });

    this.socket.on(SocketCustomEvent.ALARM_ACKNOWLEDGED, (resourceId: string) => {
      console.log(resourceId);
    });

    this.socket.on(SocketCustomEvent.CALL_HANGUP, (resourceId: string) => {
      console.log(resourceId);
    });

    this.socket.on(SocketCustomEvent.EMAIL_CREATED, (email: SocketEmail) => {
      console.log(email);
    });
  }

  answerAlarm(resourceId: string) {
    this.socket.emit(SocketCustomEvent.ALARM_ANSWERED, resourceId);
  }

  acknowledgeAlarm(resourceId: string) {
    this.socket.emit(SocketCustomEvent.ALARM_ACKNOWLEDGED, resourceId);
  }

  hangupCall(resourceId: string) {
    this.socket.emit(SocketCustomEvent.CALL_HANGUP, resourceId);
  }
}
