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
