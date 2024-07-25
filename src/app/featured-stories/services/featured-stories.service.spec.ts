import { TestBed } from '@angular/core/testing';

import { FeaturedStoriesService } from './featured-stories.service';

describe('FeaturedStoriesService', () => {
  let service: FeaturedStoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedStoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
