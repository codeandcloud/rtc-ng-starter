import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private userService: UserService) {}

  getRoles = (): string[] => {
    const user = this.userService.getUser();
    return user ? user.roles : [];
  };

  hasRole = (role: string): boolean => {
    const roles = this.getRoles();
    return roles && roles.length !== 0 && roles.includes(role);
  };

  isAdmin = (): boolean => {
    return this.hasRole('admin');
  };

  isUser = (): boolean => {
    return !this.isAdmin && this.hasRole('user');
  };
}
