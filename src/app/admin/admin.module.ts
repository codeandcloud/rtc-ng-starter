import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { AdminHomeComponent } from './home/home.component';

@NgModule({
  declarations: [AdminComponent, AdminDashboardComponent, AdminHomeComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
