import { TestBed } from '@angular/core/testing';

import { NewsDetailService } from './news-detail.service';

describe('NewsDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsDetailService = TestBed.get(NewsDetailService);
    expect(service).toBeTruthy();
  });
});
