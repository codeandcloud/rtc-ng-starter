import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderMenuService {
  private isCollapsed = new BehaviorSubject<boolean>(true);
  isCollapsed$ = this.isCollapsed.asObservable();

  constructor() {}

  toggleCollapse = (collapsed: boolean) => {
    this.isCollapsed.next(collapsed);
  };
}
