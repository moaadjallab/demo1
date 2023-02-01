import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {countries} from 'countries-list';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-nouveau-c',
  templateUrl: './nouveau-c.component.html',
  styleUrls: ['./nouveau-c.component.scss']
})
export class NouveauCComponent implements OnInit {

  nomsociete :string;
  type :string;
  adress: string;
  codepostal: string;
  ville: string;
  tele:string;
  gsm:string;
  cnss:string;
  ice:string;
  email:string;
  site:string;
  rc:string;
  idf:string;
  idPatente:string;
  token = sessionStorage.getItem('token');






  countries = Object.values(countries);
  selectedCountry:string;
  simpleItems: any = [];
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.simpleItems = ['Client', 'Fournisseur'];

  }

  onsubmit(form: NgForm){
    console.log(form.value
    )
  }
  cree() {
    let url1 = 'http://localhost:4100/api/clients';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token!
    });const requestOptions = { headers: headers };   this.http.post<any>(url1, {
      type : this.type,
      nomClient : this.nomsociete,
      adresse: this.adress,
      codePostal: this.codepostal,
      ville: this.ville,
      tel: this.tele,
      gsm:this.gsm,
      idCnss:this.cnss,
      idIce:this.ice,
      email:this.email,
      website:this.site,
      idRc:this.rc,
      idf:this.idf,
      pays:this.selectedCountry,
      idPatente:this.idPatente,

    },requestOptions).subscribe(
      data => {
        if(data){
        console.log(data);
        }
        this.router.navigate(['']);
      },
      error => {
        console.error(error);
      }
    );
  }




}

