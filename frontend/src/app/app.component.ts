import {Component, OnDestroy, OnInit} from '@angular/core';
import {SocketClient} from "@core/socket/socket-client";
import {select, Store} from "@ngrx/store";
import {Message, MessageState, State} from "@core/message/message.model";
import {selectMailboxState} from "@core/core.state";
import {Subject, takeUntil} from "rxjs";
import {selectAllMessages} from "@core/message/messages.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'socket-io-messenger';
  showMenu: boolean = false;
  ngUnsubscribe: Subject<any> = new Subject();
  private messages: Message[] | undefined;



  constructor(
    private socketClient: SocketClient,
    private store: Store<State>) {
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(0);
    this.ngUnsubscribe.complete();
    }


  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  closeMenu() {
    this.showMenu = false;
  }

  ngOnInit(): void {
    this.store.pipe(select(selectAllMessages)).pipe(takeUntil(this.ngUnsubscribe)).subscribe((messages) => {
     this.messages = messages;
     console.log(this.messages);
    }, (err) => {
      console.log(err);
    });
  }
}
