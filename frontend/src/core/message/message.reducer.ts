import {Action, createReducer, on} from '@ngrx/store';
import {Message, MessageState} from "@core/message/message.model";
import {actionLoadMessages, actionReceiveMessage} from "@core/message/messages.action";
import {createEntityAdapter, EntityAdapter} from "@ngrx/entity";

export const messageFeatureKey = 'mailbox';

export const messageEntityAdapter: EntityAdapter<Message> = createEntityAdapter<Message>({
  sortComparer: (a: Message, b: Message) => new Date(a.sentDateTime).getTime() - new Date(b.sentDateTime).getTime()
});

export const initialState: MessageState = {
  messages: messageEntityAdapter.getInitialState({
    entities: {}
  }),
};

const reducer = createReducer(
  initialState,
  on(actionReceiveMessage, (state, {payload}) => {
    return ({...state, messages: messageEntityAdapter.upsertOne(payload, state.messages)});
  }),
  on(actionLoadMessages, (state, {payload}) => {
    return ({...state, messages: messageEntityAdapter.upsertMany(payload.messages, state.messages)});
  }),
);

export function messageReducer(
  state: MessageState | undefined,
  action: Action
) {
  return reducer(state, action);
}
