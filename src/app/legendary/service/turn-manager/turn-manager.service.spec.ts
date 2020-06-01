import { TestBed } from '@angular/core/testing';

import { TurnManagerService } from './turn-manager.service';

describe('TurnManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TurnManagerService = TestBed.get(TurnManagerService);
    expect(service).toBeTruthy();
  });
});
