import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiConfiguration, ApiConfigurationParams} from "./http/api-configuration";
import {AppState, reducers, selectRouterState} from './core.state';
import {StoreModule} from '@ngrx/store';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {CustomSerializer} from './router/custom-serializer';
import {environment} from "../environments/environment";
import {EffectsModule} from "@ngrx/effects";
import {MessageEffects} from "@core/message/message.effects";


export {
  AppState,
  selectRouterState
};

@NgModule({
  declarations: [],
  providers: [{provide: RouterStateSerializer, useClass: CustomSerializer}],
  imports: [
    CommonModule,
    // ngrx
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([
      MessageEffects
    ]),
    StoreRouterConnectingModule.forRoot(),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
        name: 'Socket.io Messenger NgRx Store'
      })
  ]
})
export class CoreModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor(
    @Optional()
    @SkipSelf()
      parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
