import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'rtc-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss'],
})
export class PublicLayoutComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject();
  headerType = 'public';

  constructor(
    private authService: AuthService,
    private roleService: RoleService
  ) {}

  ngOnInit(): void {
    this.setHeaderType();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  setHeaderType = () => {
    this.authService
      .authStatus()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (authStatus) => {
          if (authStatus) {
            this.headerType = this.roleService.isAdmin() ? 'admin' : 'user';
          }
        },
        error: (err) => {},
      });
  };
}
