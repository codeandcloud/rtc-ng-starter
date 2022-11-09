import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HeaderMenuService } from 'src/app/services/header-menu.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'rtc-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss'],
})
export class AuthHeaderComponent implements OnInit {
  isMenuCollapsed = true;
  constructor(
    private router: Router,
    private authService: AuthService,
    private headerMenu: HeaderMenuService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  goToRoute = (route: string) => {
    this.router.navigateByUrl(route);
    this.collapseMenu();
  };

  logout = () => {
    this.userService.removeUser();
    this.userService.removeToken();
    this.authService.toggleAuthStatus(false);
    this.router.navigateByUrl('/welcome');
  };

  toggleCollapseMenu = (): void => {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this.headerMenu.toggleCollapse(this.isMenuCollapsed);
  };

  collapseMenu = (): void => {
    this.isMenuCollapsed = true;
    this.headerMenu.toggleCollapse(true);
  };
}
