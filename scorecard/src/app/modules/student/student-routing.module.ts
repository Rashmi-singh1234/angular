import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './components/display/display.component';
import {LoginComponent} from './components/login/login.component'
import { SearchComponent } from './components/search/search.component';
const routes: Routes = [

  {
    path:'login',component:LoginComponent
  },
  {
    path:'search',component:SearchComponent
  },
  {
    path:'search/display',component:DisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
  