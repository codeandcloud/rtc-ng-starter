import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUser = (): User | null => {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson) as User;
      return user;
    }
    return null;
  };

  saveUser = (user: User): boolean => {
    if (!user) {
      return false;
    }
    const userJson = JSON.stringify(user);
    localStorage.setItem('user', userJson);
    return true;
  };

  removeUser = () => {
    localStorage.removeItem('user');
  };

  getToken = (): string => {
    const token = localStorage.getItem('token') || '';
    return token;
  };

  saveToken = (token: string): boolean => {
    if (!token) {
      return false;
    }
    localStorage.setItem('token', token);
    return true;
  };

  removeToken = () => {
    localStorage.removeItem('token');
  };
}
