import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from '../user/user.routing.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { AdminsubComponent } from './user-management/adminsub/adminsub.component';






@NgModule({
  declarations: [
    DashboardComponent, AdminsubComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule

  ]
})
export class UserModule { }
