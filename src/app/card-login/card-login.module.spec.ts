import { CardLoginModule } from './card-login.module';

describe('CardLoginModule', () => {
  let cardLoginModule: CardLoginModule;

  beforeEach(() => {
    cardLoginModule = new CardLoginModule();
  });

  it('should create an instance', () => {
    expect(cardLoginModule).toBeTruthy();
  });
});
