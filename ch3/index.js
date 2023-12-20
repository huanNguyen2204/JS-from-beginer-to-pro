// Array
arr1 = new Array("puple", "green", "yellow");
arr2 = ["black", "white", "red"];

console.log(arr1);
console.log(arr2);

arr3 = ["hi there", 5, true];

console.log(typeof arr3[0]);
console.log(typeof arr3[1]);
console.log(typeof arr3[2]);

// Built-in length property
color = ["black", "orange", "pink"];
booleans = [true, false, false, true];
emptyArray = [];

console.log(typeof color);
console.log(typeof booleans);
console.log(typeof emptyArray);

array8 = [2, 6, 7, 8];
let findValue = array8.find(function (e) {
  return e === 6;
});
let findValue2 = array8.find((e) => e === 10);

console.log(findValue, findValue2);

// Sorting
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
console.log(names.sort());

// object
let array = [0, 1, 2];
console.log(typeof array);

let dog = {
  dogName: "Javascript",
  weigth: 2.4,
  color: "brown",
  breed: "chihuahua",
  age: 3,
  burglarBiter: true
};

console.log(dog);