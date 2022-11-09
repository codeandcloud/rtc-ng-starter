import { TestBed } from '@angular/core/testing';

import { HttpBackendClientService } from './http-backend-client.service';

describe('HttpBackendClientService', () => {
  let service: HttpBackendClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpBackendClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
