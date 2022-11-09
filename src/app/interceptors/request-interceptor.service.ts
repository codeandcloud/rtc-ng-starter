import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class RequestInterceptor implements HttpInterceptor {
  constructor(private user: UserService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.user.getToken();
    const setHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    request = request.clone({ setHeaders });
    return next.handle(request);
  }
}
