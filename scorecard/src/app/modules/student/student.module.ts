import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { StudentRoutingModule } from './student-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { DisplayComponent } from './components/display/display.component';


@NgModule({
  declarations: [
    LoginComponent,
    SearchComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class StudentModule { }
