import {createAction, props} from "@ngrx/store";
import {Message} from "@core/message/message.model";

export const actionReceiveMessage = createAction('[Message] Receive Message', props<{ payload: Message }>());

