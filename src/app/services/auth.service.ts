import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpBackendClient } from './http-backend-client.service';
import { LoginRequest } from '../models/login-request.model';
import { SiteUser, User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  constructor(
    private bypassedHttp: HttpBackendClient,
    private http: HttpClient
  ) {}

  authStatus(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  login(request: LoginRequest): Observable<User> {
    let user: User = new SiteUser('John', 'Doe', ['user'], 'random-token-user');
    if (request.username.toLocaleLowerCase().includes('admin')) {
      user = new SiteUser(
        'Site',
        'Administrator',
        ['admin', 'user'],
        'random-token-admin'
      );
    }
    return of(user);
  }

  toggleAuthStatus = (auth: boolean) => {
    this.isLoginSubject.next(auth);
  };

  logout(): void {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
