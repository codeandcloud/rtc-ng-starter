import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'rtc-confirmation-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ConfirmDialogComponent implements OnInit {
  @Input() title!: string;
  @Input() message!: string;
  @Input() btnOkText!: string;
  @Input() btnCancelText!: string;
  @Input() btnCancelClass!: string;
  @Input() btnOkClass!: string;

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
