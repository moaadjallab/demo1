import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import {FeatherIconModule} from "../../../core/feather-icon/feather-icon.module";
import {ArchwizardModule} from "angular-archwizard";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgSelectModule} from "@ng-select/ng-select";
import {BonLivraisonComponent} from "./bon-livraison.component";
import {NouveauBonLivraisonComponent} from "./nouveau-bon-livraison/nouveau-bon-livraison.component";
import {LisdtBonLivraisonComponent} from "./lisdt-bon-livraison/lisdt-bon-livraison.component";




const routes: Routes = [
  {
    path: '',
    component: BonLivraisonComponent,
    children: [
      {
        path: '',
        redirectTo: 'List',
        pathMatch: 'full'
      },
      {
        path: 'nouveau',
        component: NouveauBonLivraisonComponent
      },
      {
        path: 'List',
        component: LisdtBonLivraisonComponent
      }
    ]
  }
]

@NgModule({
  declarations: [ BonLivraisonComponent, NouveauBonLivraisonComponent, LisdtBonLivraisonComponent],
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
export class BonLivraisonModule { }
