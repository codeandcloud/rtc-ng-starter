import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { AdminHomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: AdminHomeComponent },
  { path: 'dashboard', component: AdminDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
