import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import {
  NgbActiveModal,
  NgbModalModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import { SharedPipesModule } from '../pipes/pipes.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    NgbModule,
    NgbModalModule,
    AgGridModule,
    SharedPipesModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    NgbModalModule,
    AgGridModule,
    SharedPipesModule,
  ],
})
export class SharedModule {}
