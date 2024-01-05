import {describe, test, expect} from '@jest/globals';

import {Facade, SubSystem1, SubSystem2, SubSystem3} from './index';

describe('Facade pattern specs', function () {
  const productFacade = new Facade(new SubSystem1(), new SubSystem2(), new SubSystem3());
    test('check final results', () => {
      expect(productFacade.buyProduct()).toBe()
  })
});
