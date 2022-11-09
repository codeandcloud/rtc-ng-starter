import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from '../services/toast.service';
import { AlertDialogComponent } from '../global/alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from '../global/confirm-dialog/confirm-dialog.component';
@Injectable({ providedIn: 'root' })
export class NotifierService {
  constructor(
    private toastService: ToastService,
    private translate: TranslateService,
    private modalService: NgbModal
  ) {}
  public showSuccessNotificationTranslated(
    jsonKeyForBody: string = 'messages.operationSuccessful',
    delay = 3000
  ): void {
    this.showNotification('success', 'general.success', jsonKeyForBody, delay);
  }

  public showErrorNotificationTranslated(
    jsonKeyForBody: string = 'messages.errorOccurred',
    delay = 3000
  ): void {
    this.showNotification('danger', 'general.error', jsonKeyForBody, delay);
  }

  public showInfoNotificationTranslated(
    jsonKeyForBody: string,
    delay = 3000
  ): void {
    this.showNotification('info', 'general.info', jsonKeyForBody, delay);
  }

  public showWarningNotificationTranslated(
    jsonKeyForBody: string,
    delay = 3000
  ): void {
    this.showNotification('warning', 'general.warning', jsonKeyForBody, delay);
  }

  public showNotificationTranslated(
    messageType: 'success' | 'error' | 'info' | 'warning' | 'danger',
    jsonKeyForTitle: string,
    jsonKeyForBody: string,
    delay = 3000
  ): void {
    this.showNotification(messageType, jsonKeyForTitle, jsonKeyForBody, delay);
  }

  public showSuccessNotification(
    jsonKeyForBody: string = 'messages.operationSuccessful',
    delay = 3000
  ): void {
    this.showNotification('success', 'general.success', jsonKeyForBody, delay);
  }

  public showErrorNotification(
    jsonKeyForBody: string = 'messages.errorOccurred',
    delay = 3000
  ): void {
    this.showNotification('danger', 'general.error', jsonKeyForBody, delay);
  }

  public showInfoNotification(jsonKeyForBody: string, delay = 3000): void {
    this.showNotification('info', 'general.info', jsonKeyForBody, delay);
  }

  public showWarningNotification(jsonKeyForBody: string, delay = 3000): void {
    this.showNotification('warning', 'general.warning', jsonKeyForBody, delay);
  }

  public showNotification(
    messageType: 'success' | 'error' | 'info' | 'warning' | 'danger',
    jsonKeyForTitle: string,
    jsonKeyForBody: string,
    delay = 3000
  ): void {
    if (messageType === 'error') {
      messageType = 'danger';
    }
    this.translate
      .get([jsonKeyForTitle, jsonKeyForBody])
      .subscribe((translations: any) => {
        const title = translations[jsonKeyForTitle];
        const body = translations[jsonKeyForBody];
        const message = `<h5>${title}</h5><p>${body}</p>`;
        const toastClass = `bg-${messageType} text-light`;
        this.toastService.show(message, {
          classname: toastClass,
          delay,
        });
      });
  }

  public alert(
    titleKey: string,
    messageKey: string,
    btnOkTextKey: string = 'general.ok',
    dialogSize: 'sm' | 'md' | 'lg' = 'md',
    delay: number = 0,
    isButtonShown: boolean = true
  ): Promise<boolean> {
    const title = this.translate.instant(titleKey);
    const message = this.translate.instant(messageKey);
    const btnOkText = this.translate.instant(btnOkTextKey);

    let modalOptions = {};
    if (dialogSize === 'sm' || dialogSize === 'lg') {
      modalOptions = { size: dialogSize, backdrop: 'static', keyboard: false };
    } else {
      modalOptions = {
        windowClass: 'md-class',
        backdrop: 'static',
        keyboard: false,
      };
    }
    const modalRef = this.modalService.open(AlertDialogComponent, modalOptions);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.isButtonShown = isButtonShown;
    if (delay) {
      window.setTimeout(() => modalRef.dismiss(), delay);
    }
    return modalRef.result;
  }

  public largeAlert(
    titleKey: string,
    messageKey: string,
    btnOkTextKey: string = 'general.ok',
    dialogSize: 'sm' | 'md' | 'lg' = 'md',
    delay: number = 0,
    isButtonShown: boolean = true
  ): Promise<boolean> {
    const title = this.translate.instant(titleKey);
    const message = this.translate.instant(messageKey);
    const btnOkText = this.translate.instant(btnOkTextKey);
    let modalOptions = {};
    if (dialogSize === 'sm' || dialogSize === 'lg') {
      modalOptions = { size: dialogSize, backdrop: 'static', keyboard: false };
    } else {
      modalOptions = {
        windowClass: 'md-class',
        backdrop: 'static',
        keyboard: false,
      };
    }
    modalOptions = {
      windowClass: 'lgModal',
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    };
    const modalRef = this.modalService.open(AlertDialogComponent, modalOptions);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.isButtonShown = isButtonShown;
    if (delay) {
      window.setTimeout(() => modalRef.dismiss(), delay);
    }
    return modalRef.result;
  }
  public confirm(
    titleKey: string,
    messageKey: string,
    btnOkTextKey: string = 'general.ok',
    btnCancelTextKey: string = 'general.cancel',
    dialogSize: 'sm' | 'md' | 'lg' | 'xl' = 'md',
    btnCancelClass: string = 'btn btn-danger'
  ): Promise<boolean> {
    const title = this.translate.instant(titleKey);
    const message = this.translate.instant(messageKey);
    const btnOkText = this.translate.instant(btnOkTextKey);
    const btnCancelText = this.translate.instant(btnCancelTextKey);
    let modalOptions = {};
    if (dialogSize === 'sm' || dialogSize === 'lg') {
      modalOptions = { size: dialogSize };
    } else {
      modalOptions = { windowClass: 'md-class' };
    }
    const modalRef = this.modalService.open(
      ConfirmDialogComponent,
      modalOptions
    );
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;
    modalRef.componentInstance.btnCancelClass = btnCancelClass;
    return modalRef.result;
  }
}
