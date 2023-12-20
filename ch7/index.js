let dog = {
  dogName: "Javascript",
  weight: 2.4,
  color: "brown",
  breed: "chihuahua"
}

class ClassName {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }
}

let obj = new ClassName("arg1", "arg2");
console.log(obj);

// methods
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log("Hi there! I'm ", this.firstname);
  }

  compliment(name, object) {
    return "That's a wonderful " + object + ", " + name;
  }
}

console.log("Nguyen Cao Huan");
console.log("What are you doing");

class Person {
  constructor() {

  }
}