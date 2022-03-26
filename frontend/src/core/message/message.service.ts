import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom, from, Observable} from 'rxjs';
import {Message} from "@core/message/message.model";
import {environment} from "../../environments/environment";


@Injectable()
export class MessageService {

  constructor(private http: HttpClient) {
  }

  getMockedMessages(): Observable<Message[]> {
    const url = `assets/data/notifications.json?v=${environment.version}`;
    return new Observable(observer => {
      return from(firstValueFrom(this.http.get<any>(url))
        .then(res => res.data as Message[])
        .then(data => data)).subscribe(observer);
    });
  }
}
