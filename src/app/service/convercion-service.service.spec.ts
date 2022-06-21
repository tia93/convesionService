import { TestBed } from '@angular/core/testing';

import { ConvercionServiceService } from './convercion-service.service';

describe('ConvercionServiceService', () => {
  let service: ConvercionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvercionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
