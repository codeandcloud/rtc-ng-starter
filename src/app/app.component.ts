import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'rtc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoggedIn: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isLoggedIn = authService.isLoggedIn();
  }

  ngOnInit(): void {}
}
