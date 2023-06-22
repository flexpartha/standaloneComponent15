import { TestBed } from '@angular/core/testing';

import { AdminrouteguardGuard } from './adminrouteguard.guard';

describe('AdminrouteguardGuard', () => {
  let guard: AdminrouteguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminrouteguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
