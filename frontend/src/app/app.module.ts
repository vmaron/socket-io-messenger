import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "../core/core.module";
import {SocketClient} from "../core/services";
import {environment} from "../environments/environment";
import {ClickOutsideDirective} from "../directives/click-outside.directive";
import {ClickStopPropagation} from "../directives/click-stop-propagation.directive";
import {HeaderComponent} from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent, ClickOutsideDirective, ClickStopPropagation, HeaderComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot({rootUrl: environment.api}),
    AppRoutingModule
  ],
  providers: [SocketClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
