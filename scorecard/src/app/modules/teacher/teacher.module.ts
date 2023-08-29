import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';


@NgModule({
  declarations: [
    LoginComponent,
    ReadComponent,
    CreateComponent,
    EditComponent 
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // HomeComponent
  ]
})
export class TeacherModule { }
