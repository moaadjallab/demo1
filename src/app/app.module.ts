import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './views/layout/layout.module';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RequestInterceptor} from "./request.interceptor";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
