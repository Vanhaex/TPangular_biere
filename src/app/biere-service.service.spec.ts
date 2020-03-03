import { TestBed } from '@angular/core/testing';

import { BiereServiceService } from './biere-service.service';

describe('BiereServiceService', () => {
  let service: BiereServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiereServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
