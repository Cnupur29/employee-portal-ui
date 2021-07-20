import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: AddEmployeeComponent
  },
  {
    path: 'employee/view/:id',
    component: ViewEmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listEmployees', // add back the path "listEmployees" if doesnot work
    component: EmployeesListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
