import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'student' ,loadChildren:()=> import('./modules/student/student.module')
  .then((mod)=>mod.StudentModule)},
  {path:'teacher' ,loadChildren:()=> import('./modules/teacher/teacher.module')
  .then((mod)=>mod.TeacherModule)},



 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
