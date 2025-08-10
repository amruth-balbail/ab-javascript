class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    this.#checkBattery();
    this.#checkFuel();
    console.log(`${this.brand} started!`);
  }

  #checkBattery() {
    console.log("Battery OK");
  }

  #checkFuel() {
    console.log("Fuel OK");
  }
}

const myCar = new Vehicle("Toyota");
myCar.start(); // User doesn’t need to know the battery/fuel checks
