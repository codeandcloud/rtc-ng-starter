import { TestBed } from '@angular/core/testing';

import { SiteLanguageService } from './site-language.service';

describe('SiteLanguageService', () => {
  let service: SiteLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
