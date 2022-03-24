export enum SocketEvent {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  CONNECT_ERROR = 'connect_error'
}

export enum SocketCustomEvent {
  ALARM_CREATED = 'alarm.created',
  ALARM_ANSWERED = 'alarm.answered',
  ALARM_ACKNOWLEDGED = 'alarm.acknowledged',
  CALL_HANGUP = 'call.hangup',
  EMAIL_CREATED = 'email.created',
  EMAIL_OPENED = 'email.opened'
}

export interface SocketAlarm {
  eventId: string;
  eventTime: Date;
  correlationId: string;
  data: {
    resourceId: string;
  };
}

export interface SocketEmail {
  eventId: string;
  eventTime: Date;
  correlationId: string;
  data: {
    messageId: string,
    sender: string;
    recipient: string;
    subject: string;
    attachments: Array<string>
  };
}
