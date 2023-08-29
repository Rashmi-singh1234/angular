import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApiserviceService} from './apiservice.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    
    

  ],
  providers: [ApiserviceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
