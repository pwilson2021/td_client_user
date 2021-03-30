import { TestBed } from '@angular/core/testing';

import { MarketdataService } from './services/marketdata.service';

describe('MarketdataService', () => {
  let service: MarketdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
