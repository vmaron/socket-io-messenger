import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {routerFeatureKey, RouterStateUrl} from './router/router.state';
import {MessageState} from "@core/message/message.model";


import {messageReducer, messageFeatureKey} from './message/message.reducer';



export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  mailbox: messageReducer
};

export const selectRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>(routerFeatureKey);
export const selectMailboxState = createFeatureSelector<MessageState>(messageFeatureKey);


export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  mailbox: MessageState;
}
