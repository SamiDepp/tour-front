import { Component, OnInit } from '@angular/core';
import * as Http from 'http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http
  ) { }

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }

  login() {
    const url = 'http://localhost:8082/login';
    const result = this.http.post(url, {
      userName: this.model.username,
      password: this.model.password
    }).map(res => res.json()).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem(
          'token',
          btoa(this.model.username + ':' + this.model.password)
        );
        this.router.navigate(['']);
      } else {
        alert('Authentication failed.');
      }
    });
  }

}
