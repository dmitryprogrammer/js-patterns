/**
 * Паттер "Фасад", представляет собой простую класс/функцию для обращения к одной и более подсистемам (функциям, классам) */

export class Facade {
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

    return `${this.#subSystem1.getContainer()}\n${this.#subSystem2.deliverProduct()}\n${this.#subSystem1.putInContainer()}\n${this.#subSystem3.sale()}`;
  }
}

export class SubSystem1 {
  getContainer() {
    const message = "Container is created";
    console.log(message);
    return message;
  }

  putInContainer() {
    const message = "Product is put in container";
    console.log(message);
    return message;
  }
}

export class SubSystem2 {
  deliverProduct() {
    const message = "Product delivered to storehouse";
    console.log(message);
    return message;
  }
}

export class SubSystem3 {
  sale() {
    const message = "Product is sold to customer";
    console.log(message);
    return message;
  }
}

const product = new Facade(new SubSystem1(), new SubSystem2(), new SubSystem3());

product.buyProduct();
