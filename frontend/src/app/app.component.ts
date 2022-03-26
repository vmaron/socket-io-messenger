import {Component} from '@angular/core';
import {SocketClient} from "@core/socket/socket-client";
import {Store} from "@ngrx/store";
import {actionFetchRecentMessages} from "@core/message/messages.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'socket-io-messenger';

  constructor(
    private socketClient: SocketClient,
    private store: Store,
  ) {
    this.store.dispatch(actionFetchRecentMessages());
  }
}
