import {createAction, props} from "@ngrx/store";
import {Message} from "@core/message/message.model";

export const actionReceiveMessage = createAction('[Message] Receive Message', props<{ payload: Message }>());

export const actionFetchRecentMessages = createAction('[Message] Fetch Recent Messages');

export const actionLoadMessages = createAction(
  '[Message] Load Messages',
  props<{ payload: {messages: Message[]} }>()
);

