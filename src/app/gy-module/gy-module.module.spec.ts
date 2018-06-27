import { GyModuleModule } from './gy-module.module';

describe('GyModuleModule', () => {
  let gyModuleModule: GyModuleModule;

  beforeEach(() => {
    gyModuleModule = new GyModuleModule();
  });

  it('should create an instance', () => {
    expect(gyModuleModule).toBeTruthy();
  });
});
