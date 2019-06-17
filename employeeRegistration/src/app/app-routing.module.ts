import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path: '', component: EmployeeComponent},
  {path: 'employee/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
