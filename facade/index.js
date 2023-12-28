/**
 * Паттер "Фасад", представляет собой простую класс/функцию для обращения к одной и более подсистемам (функциям, классам) */

class Facade {
    #subSystem1;
    #subSystem2;
    #subSystem3;

    constructor(subSystem1, subSystem2, subSystem3) {
        this.#subSystem1 = subSystem1 || new subSystem1() || new SubSystem1();
        this.#subSystem2 = subSystem2 || new subSystem2() || new SubSystem2();
        this.#subSystem3 = subSystem3 || new subSystem3() || new SubSystem3();
    }

    buyProduct() {
        this.#subSystem1.getContainer();
        this.#subSystem2.deliverProduct();
        this.#subSystem1.putInContainer();
        this.#subSystem3.sale();
    }
}

class SubSystem1 {
    getContainer() {
        console.log('Container is created');
    }

    putInContainer() {
        console.log('Product is put in container');
    }
}

class SubSystem2 {
    deliverProduct() {
        console.log('Product delivered to storehouse');
    }
}

class SubSystem3 {
    sale() {
        console.log('Product is sold to customer');
    }
}

const product = new Facade(new SubSystem1(), new SubSystem2(), new SubSystem3());

product.buyProduct();
