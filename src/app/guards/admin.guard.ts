import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { first, map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { RoleService } from '../services/role.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private roleService: RoleService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.authStatus().pipe(
      map((auth) => {
        if (auth) {
          return this.roleService.isAdmin();
        }
        this.router.navigateByUrl('/auth/login');
        return false;
      })
    );
  }
}
