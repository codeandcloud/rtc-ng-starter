import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LoginRequest } from 'src/app/models/login-request.model';
import { AuthService } from 'src/app/services/auth.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'rtc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject();
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private notifier: NotifierService
  ) {}

  ngOnInit(): void {
    this.buildLoginForm();
    this.notifier.showSuccessNotification('Hello World');
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onSubmit() {
    const loginRequest: LoginRequest = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
    this.authService
      .login(loginRequest)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (user) => {
          this.userService.saveUser(user);
          this.userService.saveToken(user.token);
          this.authService.toggleAuthStatus(true);
          this.router.navigateByUrl('/home');
        },
        error: (err) =>
          this.notifier.showErrorNotification('Error Occured: ', err),
      });
  }

  buildLoginForm = () => {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  };
}
