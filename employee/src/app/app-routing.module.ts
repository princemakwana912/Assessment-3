import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';

const routes: Routes = [
  // { path: 'employees', loadChildren: () => import('../app/employees/employees.module').then(lists => lists.EmployeesModule) },
  {path: 'list', component: EmployeeListComponent},
  {path: 'addemp', component: AddEmployeeComponent},
  { path: '',   redirectTo: '/addemp', pathMatch: 'full' },
  {path: 'addemployee',component: AddEmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
