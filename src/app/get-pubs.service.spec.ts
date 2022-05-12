import { TestBed } from '@angular/core/testing';

import { GetPubsService } from './get-pubs.service';

describe('GetPubsService', () => {
  let service: GetPubsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPubsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
