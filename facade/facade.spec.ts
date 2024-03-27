import {Facade, SubSystem1, SubSystem2, SubSystem3} from './';

describe('facade patterns', function () {
  it('Subsystem 3', () => {
    expect(new SubSystem3().sale()).toEqual('Product is sold to customer')
  });
});
