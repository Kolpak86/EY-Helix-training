import { TestBed } from '@angular/core/testing';

import { PortalBridgeService } from './portal-bridge.service';

describe('PortalBridgeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortalBridgeService = TestBed.get(PortalBridgeService);
    expect(service).toBeTruthy();
  });
});
