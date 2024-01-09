import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { UserModule } from '../user/user.module';

const routes: Routes = [
  {path:'',redirectTo: 'sigin', pathMatch: 'full'},
  {path:'sigin', component: SigninComponent},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
