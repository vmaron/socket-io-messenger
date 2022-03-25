import {createSelector} from '@ngrx/store';
import {selectMailboxState} from '../core.state';
import {MessageState} from "@core/message/message.model";
import {messageEntityAdapter} from "@core/message/message.reducer";

export const selectMessageEntities = createSelector(
  selectMailboxState,
  (state: MessageState) => state.messages
);

export const selectAllMessages = createSelector(selectMessageEntities, messageEntityAdapter.getSelectors().selectAll);
