//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

interface Car {
  manufacturer: string;
  modelName: string;
  [key: string]: any;
}

function createCar(manufacturer: string, modelName: string, ...properties: [string, any][]): any {
  let car: Car = {
    manufacturer,
    modelName,
  };

  properties.forEach(([key, value]) => {
    car[key] = value;
  });

  return car;
}

// Example usage:
const myCar = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2023]);

console.log(myCar);

