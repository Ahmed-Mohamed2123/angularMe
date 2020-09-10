import { TestBed } from '@angular/core/testing';

import { GoodelectronicsService } from './goodelectronics.service';

describe('GoodelectronicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoodelectronicsService = TestBed.get(GoodelectronicsService);
    expect(service).toBeTruthy();
  });
});
