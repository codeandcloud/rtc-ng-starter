import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../environments/environment';
import { IDropDownListItem } from '../interfaces/IDropdownListItem';

@Injectable({ providedIn: 'root' })
export class SiteLanguageService {
  private readonly siteLanguages: IDropDownListItem[] = [
    { value: 'en', text: 'English' },
    { value: 'de', text: 'Deutsche' },
  ];

  constructor(public translate: TranslateService) {}

  public getSiteLanguages = (): IDropDownListItem[] => {
    return this.siteLanguages;
  };

  public getSiteLanguageKeys = (): string[] => {
    return this.siteLanguages.map(({ value }) => value);
  };

  public getSiteLanguage = (): string => {
    let language = localStorage.getItem('siteLanguage') || '';
    if (!localStorage.getItem('siteLanguage')) {
      language = environment.siteLanguage;
      localStorage.setItem('siteLanguage', language);
    }
    return language;
  };

  public changeSiteLanguage = (siteLanguage: string): void => {
    localStorage.setItem('siteLanguage', siteLanguage);
    this.translate.use(siteLanguage);
  };
}
