import { TestBed } from '@angular/core/testing';

import { CorreioserviceService } from './correioservice.service';

describe('CorreioserviceService', () => {
  let service: CorreioserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorreioserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
