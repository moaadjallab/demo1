import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import {FeatherIconModule} from "../../../core/feather-icon/feather-icon.module";
import {ArchwizardModule} from "angular-archwizard";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgSelectModule} from "@ng-select/ng-select";
import {NouveaufacturefournisseurComponent} from "./nouveaufacturefournisseur/nouveaufacturefournisseur.component";
import {FactureFournisseurComponent} from "./facture-fournisseur.component";
import {ListfacturefournisseurComponent} from "./listfacturefournisseur/listfacturefournisseur.component";




const routes: Routes = [
  {
    path: '',
    component: FactureFournisseurComponent,
    children: [
      {
        path: '',
        redirectTo: 'List',
        pathMatch: 'full'
      },
      {
        path: 'Nouveau',
        component: NouveaufacturefournisseurComponent
      },
      {
        path: 'List',
        component: ListfacturefournisseurComponent
      }
    ]
  }
]

@NgModule({
  declarations: [ FactureFournisseurComponent, NouveaufacturefournisseurComponent, ListfacturefournisseurComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeatherIconModule,
    ArchwizardModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    FormsModule,
  ]
})
export class FactureFournisseurModule { }
