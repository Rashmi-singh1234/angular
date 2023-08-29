import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import {ReadComponent} from './components/read/read.component'
import {CreateComponent} from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
const routes: Routes = [
{
  path:'login', component:LoginComponent 
  
},
{path:'login/details',component:ReadComponent},
{path:'login/details/adddetails',component:CreateComponent},
{path:'login/details/edit',component:EditComponent}

];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
