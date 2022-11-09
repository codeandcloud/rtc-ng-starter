import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderMenuService } from 'src/app/services/header-menu.service';

@Component({
  selector: 'rtc-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss'],
})
export class PublicHeaderComponent implements OnInit {
  isMenuCollapsed = true;
  constructor(private router: Router, private headerMenu: HeaderMenuService) {}

  ngOnInit(): void {}

  goToRoute = (route: string) => {
    this.router.navigateByUrl(route);
    this.collapseMenu();
  };

  toggleCollapseMenu = (): void => {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this.headerMenu.toggleCollapse(this.isMenuCollapsed);
  };

  collapseMenu = (): void => {
    this.isMenuCollapsed = true;
    this.headerMenu.toggleCollapse(true);
  };

  onLogin = () => {
    this.router.navigateByUrl('/auth/login');
  };

  onSignup = () => {
    this.router.navigateByUrl('/auth/signup');
  };
}
