import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import {FeatherIconModule} from "../../../core/feather-icon/feather-icon.module";
import {ArchwizardModule} from "angular-archwizard";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgSelectModule} from "@ng-select/ng-select";
import {FactureClientComponent} from "./facture-client.component";
import {NouveauFactureComponent} from "./nouveau-facture/nouveau-facture.component";
import {ListFactureComponent} from "./list-facture/list-facture.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";




const routes: Routes = [
  {
    path: '',
    component: FactureClientComponent,
    children: [
      {
        path: '',
        redirectTo: 'Nouveau',
        pathMatch: 'full'
      },
      {
        path: 'Nouveau',
        component: NouveauFactureComponent
      },
      {
        path: 'List',
        component: ListFactureComponent
      }
    ]
  }
]

@NgModule({
  declarations: [ NouveauFactureComponent, ListFactureComponent, FactureClientComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeatherIconModule,
    ArchwizardModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    FormsModule,
    NgbModule,
  ]
})
export class factureClientModule { }
