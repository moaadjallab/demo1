import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
  styleUrls: ['./list-facture.component.scss']
})
export class ListFactureComponent implements OnInit {

  rows = [];
  ColumnMode = ColumnMode;
  loadingIndicator = true;


  constructor() {
    this.fetch((data: any) => {
      this.rows = data;
      setTimeout(() => {
        this.loadingIndicator = false;
      }, 1500);
    });
  }

  ngOnInit(): void {
  }

  fetch(cb: any) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

}
