import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import {FeatherIconModule} from "../../../core/feather-icon/feather-icon.module";
import {ArchwizardModule} from "angular-archwizard";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgSelectModule} from "@ng-select/ng-select";
import {BonCommandeComponent} from "./bon-commande.component";
import {NouveaucommandeComponent} from "./nouveaucommande/nouveaucommande.component";
import {ListcommandeComponent} from "./listcommande/listcommande.component";




const routes: Routes = [
  {
    path: '',
    component: BonCommandeComponent,
    children: [
      {
        path: '',
        redirectTo: 'List',
        pathMatch: 'full'
      },
      {
        path: 'Nouveau',
        component: NouveaucommandeComponent
      },
      {
        path: 'List',
        component: ListcommandeComponent
      }
    ]
  }
]

@NgModule({
  declarations: [ BonCommandeComponent, NouveaucommandeComponent, ListcommandeComponent],
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
export class BonCommandeModule { }
