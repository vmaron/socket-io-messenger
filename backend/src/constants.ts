export enum SocketEvent {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect'
}

export enum SocketCustomEvent {
  MSG_CREATED = 'msg.created',
  MSG_ANSWERED = 'msg.answered',
  MSG_ACKNOWLEDGED = 'msg.acknowledged',
}

export enum Singleton {
  SOCKET_SERVICE = 'socketService',
}
