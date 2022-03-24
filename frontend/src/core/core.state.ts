import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {routerFeatureKey, RouterStateUrl} from './router/router.state';


export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export const selectRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>(routerFeatureKey);


export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
}
