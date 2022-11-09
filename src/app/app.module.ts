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

import { SharedPipesModule } from './pipes/pipes.module';

import { AppComponent } from './app.component';
import { AuthHeaderComponent } from './headers/auth-header/auth-header.component';
import { PublicHeaderComponent } from './headers/public-header/public-header.component';
import { SpinnerComponent } from './global/spinner/spinner.component';
import { ToastsContainerComponent } from './global/toasts-container/toasts-container.component';
import { RequestInterceptor } from './interceptors/request-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthHeaderComponent,
    PublicHeaderComponent,
    SpinnerComponent,
    ToastsContainerComponent,
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
