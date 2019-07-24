import { TestBed } from '@angular/core/testing';

import { PayloadsService } from './payloads.service';

describe('PayloadsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PayloadsService = TestBed.get(PayloadsService);
    expect(service).toBeTruthy();
  });
});
