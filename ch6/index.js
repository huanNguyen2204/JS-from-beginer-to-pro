// // function sayHello() {
// //   let you = prompt("What's your name? ");
// //   console.log("Hello ", you + "!");
// // }

// // sayHello();

// const array = ["squirrel", "alpaca", "buddy"];
// array.forEach(e => console.log(e));

// let result = addTwoNumbers(4, 5);
// console.log(result);

function doingStuff() {
  if (true) {
    var x = "local";
  }
  console.log(x);
}

doingStuff();

// const scope
let globalVar = "Accessible everywhere!";
console.log("Outside function: ", globalVar);

function createNewScope(x) {
  console.log("Acess to global vars inside function. ", globalVar);
}

createNewScope("some parameter");
console.log("Still avaiable: ", globalVar);

// nested function
function doOuterFunctionStuff(nr) {
  console.log("Outer function");
  
  doInnerFunctionStuff(nr);

  function doInnerFunctionStuff(x) {
    console.log(x + 7);
    console.log("I can access outer variables: ", nr);
  }
}

doOuterFunctionStuff(2);