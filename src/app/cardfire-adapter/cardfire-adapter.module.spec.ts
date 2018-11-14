import { CardfireAdapterModule } from './cardfire-adapter.module';

describe('CardfireAdapterModule', () => {
  let cardfireAdapterModule: CardfireAdapterModule;

  beforeEach(() => {
    cardfireAdapterModule = new CardfireAdapterModule();
  });

  it('should create an instance', () => {
    expect(cardfireAdapterModule).toBeTruthy();
  });
});
