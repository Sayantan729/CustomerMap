import { TestBed } from '@angular/core/testing';

import { SpotsUpdateService } from './spots-update.service';

describe('SpotsUpdateService', () => {
  let service: SpotsUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotsUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
