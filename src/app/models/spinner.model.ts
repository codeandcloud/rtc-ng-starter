export interface SpinnerModel {
  isLoading: boolean;
  loadingText: string;
}

export class Spinner implements SpinnerModel {
  isLoading = false;
  loadingText = '';
}
