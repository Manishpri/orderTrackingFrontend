import { TestBed } from '@angular/core/testing';

import { OrderguardGuard } from './orderguard.guard';

describe('OrderguardGuard', () => {
  let guard: OrderguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OrderguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
