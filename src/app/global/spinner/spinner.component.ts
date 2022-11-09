import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'rtc-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  loadingText = '';
  isLoading = false;
  constructor(
    private spinner: SpinnerService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.spinner.currentStatus.subscribe((status) => {
      this.isLoading = status.isLoading;
      if (status.loadingText === '') {
        let loadingText = this.translate.instant('general.loading');
        if (loadingText === 'general.loading') {
          loadingText = 'Loading...';
        }
        this.loadingText = loadingText;
      } else {
        this.loadingText = status.loadingText;
      }
    });
  }
}
