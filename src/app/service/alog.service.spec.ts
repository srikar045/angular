import { TestBed } from '@angular/core/testing';

import { AlogService } from './alog.service';

describe('AlogService', () => {
  let service: AlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
