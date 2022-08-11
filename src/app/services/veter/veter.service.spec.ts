import { TestBed } from '@angular/core/testing';

import { VeterService } from './veter.service';

describe('VeterService', () => {
  let service: VeterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
