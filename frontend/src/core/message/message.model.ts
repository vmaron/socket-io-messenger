import {AppState} from '@core/core.state';
import {EntityState} from "@ngrx/entity";

export interface Message {
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


export interface MessageState {
  messages: MessageEntities;
}

export interface State extends AppState {
  mailbox: MessageState;
}

export type MessageEntities = EntityState<Message>;
