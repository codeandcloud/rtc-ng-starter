import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoAgGridComponent } from './ag-grid/ag-grid.component';
import { DemoNgBootstrapComponent } from './ng-bootstrap/ng-bootstrap.component';
import { DemoUtilitiesComponent } from './utilities/utilities.component';

const routes: Routes = [
  { path: 'ag-grid', component: DemoAgGridComponent, title: 'AG-Grid' },
  {
    path: 'ng-bootstrap',
    component: DemoNgBootstrapComponent,
    title: 'ng-bootstrap',
  },
  {
    path: 'utilities',
    component: DemoUtilitiesComponent,
    title: 'Utilities',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemosRoutingModule {}
