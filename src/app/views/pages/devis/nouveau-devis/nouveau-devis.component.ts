import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-nouveau-devis',
  templateUrl: './nouveau-devis.component.html',
  styleUrls: ['./nouveau-devis.component.scss']
})
export class NouveauDevisComponent implements OnInit {
  selectedPersonId: string = '';
  text='test';
  dureedevalidite : number;

  Underpayment: any []=[];
  UnderpaymentSelected : string ='';
  Conditions:string;
  methode: string;
  delai:number;
  var1:any;

  currentDate: NgbDateStruct;
  client: any [] = [];
  token = sessionStorage.getItem('token');

  constructor(
    private calendar: NgbCalendar,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.currentDate = this.calendar.getToday();
    this.Underpayment = ['Carte bancaire','Chéque','Espéce','Ordre de prélèvement','Virment bancaire'];
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token!
    });const requestOptions = { headers: headers };
    this.http.get <any>("http://localhost:4100/api/clients",requestOptions).subscribe(data =>{
     console.log(data)
      this.client = data._embedded.clients
      console.log(this.client)
      }

    )
  }
  public getdata(vale:any){
    console.warn(this.selectedPersonId)
  }
  onsubmit(form: NgForm){
      console.log(form.value
      )
  }
  public change(value: any){
    console.log(value)
}
  cree() {
    let url1 = 'http://localhost:4100/api/devises';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token!
    });
    const requestOptions = {headers: headers};
    this.http.post<any>(url1, {
      conditionReglement:this.Conditions,
      dateLivraison:this.delai,
      delaiLivraison:this.delai,
      duree:this.dureedevalidite,
      modeReglement:this.UnderpaymentSelected,
    }, requestOptions).subscribe(
      data => {
        if (data) {
          this.var1 = data.id;
          console.log(data.id);
          this.router.navigate(['devis/Liste-Devis/:'+this.var1]);
        }
      },
      error => {
        console.error(error);
      }
    );

  }
}
