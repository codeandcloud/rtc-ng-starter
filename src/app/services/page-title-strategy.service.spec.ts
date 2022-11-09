import { TestBed } from '@angular/core/testing';

import { PageTitleStrategy } from './page-title-strategy.service';

describe('PageTitleStrategy', () => {
  let service: PageTitleStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageTitleStrategy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
