import { TestBed } from '@angular/core/testing';

import { TurnResourceService } from './turn-resource.service';

describe('TurnResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TurnResourceService = TestBed.get(TurnResourceService);
    expect(service).toBeTruthy();
  });
});
