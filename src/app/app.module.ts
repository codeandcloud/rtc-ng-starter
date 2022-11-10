import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {
  NgbModule,
  NgbCollapseModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { httpLoaderFactory } from './language-configs/http-loader-factory';
import { RequestInterceptor } from './interceptors/request-interceptor.service';

import { SharedPipesModule } from './pipes/pipes.module';

import { AppComponent } from './app.component';

import { SpinnerComponent } from './global/spinner/spinner.component';
import { ToastsContainerComponent } from './global/toasts-container/toasts-container.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { AdminHeaderComponent } from './headers/admin-header/admin-header.component';
import { PublicHeaderComponent } from './headers/public-header/public-header.component';
import { UserHeaderComponent } from './headers/user-header/user-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    ToastsContainerComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
    PublicLayoutComponent,
    AdminHeaderComponent,
    PublicHeaderComponent,
    UserHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbCollapseModule,
    NgbDropdownModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    SharedPipesModule,
  ],
  providers: [
    Title,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
