import {Component} from '@angular/core';
import {SocketClient} from "@core/socket/socket-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'socket-io-messenger';

  constructor(
    private socketClient: SocketClient
  ) {
  }
}
