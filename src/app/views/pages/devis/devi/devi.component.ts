import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-devi',
  templateUrl: './devi.component.html',
})
export class DeviComponent implements OnInit {
  token = sessionStorage.getItem('token');
  id = this.route.snapshot.paramMap.get('id');
  id1 = this.id!.replace(/[^0-9]/g,'');
  devis : any;

  constructor(
    private route: ActivatedRoute,
    private http:HttpClient
  ) {}

  ngOnInit(): void {
    let url = "http://localhost:4100/api/devises/"+ this.id1 ;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token!
    });const requestOptions = { headers: headers };
    this.http.get <any>(url,requestOptions).subscribe(data =>{
      console.log(data)
    }
  )
  }

}
