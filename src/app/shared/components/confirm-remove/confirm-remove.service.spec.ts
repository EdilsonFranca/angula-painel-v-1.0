import { TestBed, inject } from '@angular/core/testing';

import { ConfirmRemoveService } from './confirm-remove.service';

describe('ComfirmRemoveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmRemoveService]
    });
  });

  it('should be created', inject([ConfirmRemoveService], (service: ConfirmRemoveService) => {
    expect(service).toBeTruthy();
  }));
});
