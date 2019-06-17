import { TestBed } from '@angular/core/testing';

import { SharedataService } from './sharedata.service';

describe('SharedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedataService = TestBed.get(SharedataService);
    expect(service).toBeTruthy();
  });
});
