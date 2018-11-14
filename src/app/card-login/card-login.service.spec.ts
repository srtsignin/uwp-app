import { TestBed } from '@angular/core/testing';

import { CardLoginService } from './card-login.service';

describe('CardLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardLoginService = TestBed.get(CardLoginService);
    expect(service).toBeTruthy();
  });
});
