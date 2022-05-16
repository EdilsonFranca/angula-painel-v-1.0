import { ComfirmRemoveModule } from './comfirm-remove.module';

describe('ComfirmRemoveModule', () => {
  let comfirmRemoveModule: ComfirmRemoveModule;

  beforeEach(() => {
    comfirmRemoveModule = new ComfirmRemoveModule();
  });

  it('should create an instance', () => {
    expect(comfirmRemoveModule).toBeTruthy();
  });
});
