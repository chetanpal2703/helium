import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubAdminsComponent } from './sub-admins/sub-admins.component';

const routes: Routes = [
  {path:'',redirectTo: 'subadmin', pathMatch: 'full'},
  {path: 'subadmin', component: SubAdminsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmindashboardRoutingModule { }
