import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  model: any = {};
  sessionId: any = "";

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  login() {
    let url = 'http://localhost:4100/api/users/login';
    this.http.post<any>(url, {
      username: this.model.username,
      password: this.model.password
    }).subscribe(res => {
      if (res) {
        this.sessionId = res.token;
        console.log(this.sessionId)

        sessionStorage.setItem(
          'token',
          this.sessionId
        );
        this.router.navigate(['']);
      } else {
        alert("Authentication failed.")
      }
    });
  }

}
