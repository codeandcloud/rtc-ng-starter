import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';
import { DemoUtilitiesComponent } from './utilities/utilities.component';
import { DemoAgGridComponent } from './ag-grid/ag-grid.component';
import { DemoNgBootstrapComponent } from './ng-bootstrap/ng-bootstrap.component';

@NgModule({
  declarations: [
    DemosComponent,
    DemoUtilitiesComponent,
    DemoAgGridComponent,
    DemoNgBootstrapComponent,
  ],
  imports: [CommonModule, DemosRoutingModule],
})
export class DemosModule {}
