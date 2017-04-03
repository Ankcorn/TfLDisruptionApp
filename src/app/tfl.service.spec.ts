import { TestBed, inject } from '@angular/core/testing';

import { TflService } from './tfl.service';

describe('TflService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TflService]
    });
  });

  it('should ...', inject([TflService], (service: TflService) => {
    expect(service).toBeTruthy();
  }));
});
