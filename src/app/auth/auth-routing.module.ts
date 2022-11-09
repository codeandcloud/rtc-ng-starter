import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    title: 'Forgot Password',
  },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'signup', component: SignupComponent, title: 'Signup' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
