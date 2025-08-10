class Vehicle {
  #engineNumber; // private field

  constructor(brand, engineNumber) {
    this.brand = brand; // public property
    this.#engineNumber = engineNumber; // private property
  }

  getEngineNumber() {
    // method to control access
    return `Engine number is confidential`;
  }
}

const myCar = new Vehicle("Toyota", "ENG123");

console.log(myCar.brand); // ✅ "Toyota" (public, accessible)
console.log(myCar.getEngineNumber()); // ✅ "Engine number is confidential"
// console.log(myCar.#engineNumber); // ❌ Error: private field, can't access
