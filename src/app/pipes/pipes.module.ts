import { NgModule } from '@angular/core';
import { SafePipe } from '../pipes/safe.pipe';

@NgModule({
  declarations: [SafePipe],
  imports: [],
  exports: [SafePipe],
})
export class SharedPipesModule {}
