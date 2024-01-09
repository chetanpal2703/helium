import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmindashboardRoutingModule } from './admindashboard-routing.module';
import { SubAdminsComponent } from './sub-admins/sub-admins.component';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';


@NgModule({
  declarations: [
    SubAdminsComponent
  ],
  imports: [
    CommonModule,
    AdmindashboardRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule
    
  ]
})
export class AdmindashboardModule { }
