export enum SocketEvent {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  CONNECT_ERROR = 'connect_error'
}

export enum SocketCustomEvent {
  MSG_CREATED = 'msg.created',
  MSG_ANSWERED = 'msg.answered',
  MSG_ACKNOWLEDGED = 'msg.acknowledged',
}

export interface SocketMessage {
  id: string;
  from: string;
  recipients: Array<string>;
  subject: string;
  body: string;
  importance: string;
  sentDateTime: Date;
  conversationId: string;
  conversationIndex: string;
  isRead: boolean;
  isDeliveryReceiptRequested: boolean;
  isReadReceiptRequested: boolean;
  receivedDateTime: Date;
}
