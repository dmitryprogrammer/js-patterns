import {Facade, SubSystem1, SubSystem2, SubSystem3} from './';

describe('facade patterns', function () {
    it('Subsystem 1, "getContainer" method', () => {
        expect(new SubSystem1().getContainer()).toEqual('Container is created');
    });

    it('Subsystem 1, "putInContainer" method', () => {
        expect(new SubSystem1().putInContainer()).toEqual('Product is put in container');
    });

    it('Subsystem 2, "deliverProduct" method', () => {
        expect(new SubSystem2().deliverProduct()).toEqual('Product delivered to storehouse');
    });

    it('Subsystem 3, "sale" method', () => {
        expect(new SubSystem3().sale()).toEqual('Product is sold to customer')
    });

    it('Facade, "buyProduct" method', () => {
        expect(new Facade(new SubSystem1(), new SubSystem2(), new SubSystem3()).buyProduct()).toEqual('Container is created\nProduct delivered to storehouse\nProduct is put in container\nProduct is sold to customer');
    });
});
