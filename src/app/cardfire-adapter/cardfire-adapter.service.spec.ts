import { TestBed } from '@angular/core/testing';

import { CardfireAdapterService } from './cardfire-adapter.service';

describe('CardfireAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardfireAdapterService = TestBed.get(CardfireAdapterService);
    expect(service).toBeTruthy();
  });
});
