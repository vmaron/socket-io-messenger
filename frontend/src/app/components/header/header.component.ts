import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {Message, State} from "@core/message/message.model";
import {select, Store} from "@ngrx/store";
import {selectAllMessages} from "@core/message/messages.selectors";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  showMenu: boolean = false;
  messages: Message[] = [];
  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.store.pipe(select(selectAllMessages))
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (messages) => {
          this.messages = messages;
        }
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(0);
    this.ngUnsubscribe.complete();
  }

  toggleMenu() {
    if (this.messages.length === 0) {
      if (this.showMenu)
        this.showMenu = false;
      return;
    }
    this.showMenu = !this.showMenu;
  }

  closeMenu() {
    this.showMenu = false;
  }
}
