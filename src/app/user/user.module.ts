import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserSettingsComponent } from './settings/settings.component';
import { UserProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [UserComponent, UserSettingsComponent, UserProfileComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
