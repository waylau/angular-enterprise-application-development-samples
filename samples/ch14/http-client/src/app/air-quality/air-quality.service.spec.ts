import { TestBed } from '@angular/core/testing';

import { AirQualityService } from './air-quality.service';

describe('AirQualityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AirQualityService = TestBed.get(AirQualityService);
    expect(service).toBeTruthy();
  });
});
