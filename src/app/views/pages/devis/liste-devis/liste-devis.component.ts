import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-liste-devis',
  templateUrl: './liste-devis.component.html',
  styleUrls: ['./liste-devis.component.scss']
})
export class ListeDevisComponent implements OnInit {

  rows = [];
  loadingIndicator = true;
  reorderable = true;
  ColumnMode = ColumnMode;

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
