import { Component } from '@angular/core';
import {SocketClient} from "../core/socket/socket-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'socket-io-messenger';
  showMenu: boolean = false;

  constructor(
    private socketClient: SocketClient) {
  }


  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  closeMenu() {
    this.showMenu = false;
  }
}
