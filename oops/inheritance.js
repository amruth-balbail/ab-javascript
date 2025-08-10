class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    console.log(`${this.brand} is starting...`);
  }
}

class Car extends Vehicle {
  drive() {
    console.log(`${this.brand} is driving...`);
  }
}

const myCar = new Car("Toyota");
myCar.start(); // from Vehicle (inherited)
myCar.drive(); // from Car (its own method)
