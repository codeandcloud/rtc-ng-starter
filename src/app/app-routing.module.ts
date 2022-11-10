import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { PageTitleStrategy } from './services/page-title-strategy.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    component: AdminLayoutComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    component: PublicLayoutComponent,
  },
  {
    path: 'demos',
    loadChildren: () =>
      import('./demos/demos.module').then((m) => m.DemosModule),
    component: UserLayoutComponent,
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    component: UserLayoutComponent,
  },
  {
    path: 'p',
    loadChildren: () =>
      import('./static-pages/static-pages.module').then(
        (m) => m.StaticPagesModule
      ),
    component: PublicLayoutComponent,
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    component: UserLayoutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./welcome/welcome.module').then((m) => m.WelcomeModule),
    component: PublicLayoutComponent,
  },
  {
    path: '**',
    redirectTo: 'p/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: PageTitleStrategy }],
})
export class AppRoutingModule {}
