//  Factory design patterns created to unify common logic for customization in nested classes/objects.
//  here you can see factory function implementation

class Track {
    constructor(brand, maxSpeed, isReadyToExploitation) {
        this.brand = brand;
        this.maxSpeed = maxSpeed;
        this.isReadyToExploitation = isReadyToExploitation ?? true;
    }

    getMaxSpeedInfo = function () {
        return `Track from ${this.brand} can accelerate speed to ${this.maxSpeed}`;
    }

    book() {
        if (this.isReadyToExploitation) {
            return {
                booked: true,
                message: `Your track is booked from ${Date.now()}`
            }
        }
    }
}

class Car {
    constructor(brand, maxSpeed, isReadyToExploitation) {
        this.brand = brand;
        this.maxSpeed = maxSpeed;
        this.isReadyToExploitation = isReadyToExploitation ?? true;
    }

    getMaxSpeedInfo = function () {
        return `Car from ${this.brand} can accelerate speed to ${this.maxSpeed}`;
    }

    availableForBoxInstallation() {
        return this.brand !== 'audi';
    }
}

export function TransportFactory(transportType, brand, maxSpeed, purpose) {

}
