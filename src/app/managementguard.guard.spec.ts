import { TestBed } from '@angular/core/testing';

import { ManagementguardGuard } from './managementguard.guard';

describe('ManagementguardGuard', () => {
  let guard: ManagementguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ManagementguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
