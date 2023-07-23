const Product = class {
  // *********** creating a class ***********

  #private = 0; //this is a private variable( ko access karne ke liya get method ka use kar sakte hai)
  public = 0; //this is a public variable

  constructor(name, price, discount, brand) {
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.brand = brand;
  }
  // class in gating
  get getDiscountValue() {
    return this.discount;
  }
  // class in setting
  set setDiscountValue(value) {
    this.discount = value;
  }
  //  this is a function
  getDiscount() {
    return (this.discount * this.price) / 100;
  }
};

const pencil = new Product("pencil", 50, 10, "natraj"); // this is instance of class
console.log(pencil);

console.log(pencil.getDiscountValue); // discount value gating using get method

console.log((pencil.setDiscountValue = 5)); // discount value change using set method

console.log(`${pencil.getDiscount()}%`); //function calling

// **************** Class Extend **********************
const Car = class {
  constructor(brand) {
    this.carName = brand;
  }
  present() {
    return "I have a " + this.carName;
  }
};

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

myCar = new Model("Ford", "Mustang");
console.log(myCar);
