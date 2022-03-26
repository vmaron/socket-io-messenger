import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {first} from "rxjs";
import {Store} from "@ngrx/store";
import {actionFetchRecentMessages, actionLoadMessages} from "@core/message/messages.action";
import {MessageService} from "@core/message/message.service";
import {Message, State} from "@core/message/message.model";

@Injectable()
export class MessageEffects {
  constructor(
    private messageService: MessageService,
    private actions$: Actions,
    private store: Store<State>
  ) {
  }

  loadRecentMessages$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionFetchRecentMessages),
        tap((action) => {
            this.messageService.getMockedMessages()
              .pipe(first())
              .subscribe({
                next: (messages: Message[]) => {
                  this.store.dispatch(actionLoadMessages({
                    payload: {messages: messages}
                  }))
                },
                error: error => {
                  console.log(error);
                }
              });
          }
        )
      ),
    {dispatch: false}
  );


}
