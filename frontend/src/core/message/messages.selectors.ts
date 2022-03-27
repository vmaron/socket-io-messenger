import {createSelector} from '@ngrx/store';
import {selectMailboxState} from '../core.state';
import {MessageState} from "@core/message/message.model";
import {messageEntityAdapter} from "@core/message/message.reducer";

export const selectMessageEntities = createSelector(
  selectMailboxState,
  (state: MessageState) => state.messages
);

export const selectAllMessages = createSelector(selectMessageEntities, messageEntityAdapter.getSelectors().selectAll);

export const selectReceivedMessages = createSelector(selectAllMessages, (messages) => messages.sort((a, b) => {
  return new Date(b.sentDateTime) > new Date(a.sentDateTime) ? 1 : -1;
}));
