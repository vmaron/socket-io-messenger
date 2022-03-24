export enum SocketEvent {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect'
}

export enum SocketCustomEvent {
  ALARM_CREATED = 'alarm.created',
  ALARM_ANSWERED = 'alarm.answered',
  ALARM_ACKNOWLEDGED = 'alarm.acknowledged',
  CALL_HANGUP = 'call.hangup',
  EMAIL_CREATED = 'email.created',
  EMAIL_OPENED = 'email.opened'
}

export enum Singleton {
  SOCKET_SERVICE = 'socketService',
}
