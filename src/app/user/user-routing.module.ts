import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './profile/profile.component';
import { UserSettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'profile', component: UserProfileComponent, title: 'User Profile' },
  { path: 'settings', component: UserSettingsComponent, title: 'Settings' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
