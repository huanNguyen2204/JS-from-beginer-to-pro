// statement
let rain = true;

if (rain) {
  console.log("It's rain");
} else {
  console.log("It isnt");
}

let age = 10;
let cost = 0;
let message;

if (age < 3) {
  cost = 0;
  message = "Access is free under three.";
} else if (age >= 3 && age < 12) {
  cost = 5;
  message = "With the child discount, the fee is 5 dollars";
} else if (age >= 12 && age < 65) {
  cost = 10;
  message = "A regular ticket cost 10 dollars";
} else {
  cost = 7;
  message = "A ticket is 7 dollars";
}

// while loops
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;

while (notFound && someArray.length > 0) {
  if (someArray[0] === "Louiza") {
    console.log("Found her!");
    notFound = false;
  } else {
    someArray.shift();
  }
}

// for loops
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

let car = {
  model: "Golf",
  make: "Volswagen",
  year: 1999,
  color: "black"
}

for (let prop in car) {
  console.log(car[prop]);
}

let arrKeys = Object.keys(car);
console.log(arrKeys);

let cars = [
  {
    model: "Golf",
    make: "Volkswagens",
    year: 1999,
    color: "black"
  },
  {
    model: "Picanto",
    make: "Kia",
    year: 2020,
    color: "red"
  },
  {
    model: "Peugeot",
    make: "208",
    year: 2021,
    color: "black"
  },
  {
    model: "Fiat",
    make: "Punto",
    year: 2020,
    color: "black"
  },
]

for (let i = 0; i < cars.length; i++) {
  if (cars[i].year >= 2020) {
    if (cars[i].color === "black") {
      console.log("I have found my new car: ", cars[i]);
      break;
    }
  }
}