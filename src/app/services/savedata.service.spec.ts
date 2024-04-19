import { TestBed } from '@angular/core/testing';

import { SavedataService } from './savedata.service';

describe('SavedataService', () => {
  let service: SavedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
