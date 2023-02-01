import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import {ClientComponent} from "./client.component";
import { NouveauCComponent } from './nouveau-c/nouveau-c.component';
import { ListCComponent } from './list-c/list-c.component';
import {FeatherIconModule} from "../../../core/feather-icon/feather-icon.module";
import {ArchwizardModule} from "angular-archwizard";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgSelectModule} from "@ng-select/ng-select";




const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        redirectTo: 'NouveauComponent',
        pathMatch: 'full'
      },
      {
        path: 'NouveauComponent',
        component: NouveauCComponent
      },
      {
        path: 'List-client',
        component: ListCComponent
      }
    ]
  }
]

@NgModule({
  declarations: [ ClientComponent, NouveauCComponent, ListCComponent],
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
export class ClientModule { }
