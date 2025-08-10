class Vehicle {
  drive() {
    console.log("Vehicle is moving");
  }
}

class Car extends Vehicle {
  drive() {
    console.log("Car is driving on the road");
  }
}

class Boat extends Vehicle {
  drive() {
    console.log("Boat is sailing in water");
  }
}

const vehicles = [new Car(), new Boat()];
vehicles.forEach((v) => v.drive());
// Car is driving on the road
// Boat is sailing in water
