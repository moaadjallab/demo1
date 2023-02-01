import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FeatherIconModule } from '../../../core/feather-icon/feather-icon.module';
import {DevisComponent} from "./devis.component";
import {NouveauDevisComponent} from "./nouveau-devis/nouveau-devis.component";
import {ListeDevisComponent} from "./liste-devis/liste-devis.component";

import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TagInputModule} from "ngx-chips";
import {ColorPickerModule} from "ngx-color-picker";
import {DropzoneModule} from "ngx-dropzone-wrapper";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";




const routes: Routes = [
  {
    path: '',
    component: DevisComponent,
    children: [
      {
        path: '',
        redirectTo: 'Liste-Devis',
        pathMatch: 'full'
      },
      {
        path: 'Nouveau-Devis',
        component: NouveauDevisComponent
      },
      {
        path: 'Liste-Devis',
        component: ListeDevisComponent
      }
    ]
  }
]

@NgModule({
  declarations: [ListeDevisComponent,NouveauDevisComponent,DevisComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeatherIconModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    TagInputModule, // Ngx-chips
    ColorPickerModule, // Ngx-color-picker
    DropzoneModule,
    NgbDatepickerModule,
    NgxDatatableModule,
    // Ngx-dropzone-wrapper
  ]

})
export class DevisModule { }
