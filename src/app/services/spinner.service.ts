import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpinnerModel, Spinner } from '../models/spinner.model';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private loaderSource = new BehaviorSubject<SpinnerModel>(new Spinner());
  currentStatus = this.loaderSource.asObservable();

  constructor() {}

  private changeSpinner(loader: SpinnerModel) {
    this.loaderSource.next(loader);
  }

  show(loadingText = '') {
    const loader: SpinnerModel = { isLoading: true, loadingText: loadingText };
    this.changeSpinner(loader);
  }

  hide() {
    const loader: SpinnerModel = { isLoading: false, loadingText: '' };
    this.changeSpinner(loader);
  }
}
