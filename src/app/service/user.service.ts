import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';
import {User} from "../compo/model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = {
    id: 0,
    login: 'user',
    mdp: 'user'

  };

  constructor(private http: HttpClient) { }
  get(id: number): Observable<User> {
    // return this.http.get<User>(GEt_USER + uid);
    return of(this.user);
  }
}
