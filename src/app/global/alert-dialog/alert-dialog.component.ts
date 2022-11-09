import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'rtc-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AlertDialogComponent implements OnInit {
  @Input() title!: string;
  @Input() message!: string;
  @Input() btnOkText!: string;
  @Input() btnCancelText!: string;
  @Input() isButtonShown: boolean = false;

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit() {}

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }
}
