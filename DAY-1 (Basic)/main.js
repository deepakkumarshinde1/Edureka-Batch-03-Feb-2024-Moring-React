// ES6 features
// ES1 ES2 ES3 ES5 ES5.1 ES6
// ECMA Script

// variables , conditions statements, functions , array [] , js Object {}, basics of DOM,
// basic promises (async await)

function timeOut() {
  console.log("timeout");
} // function definition

//timeOut(); // function call

// function () {}
// () => {}

setTimeout(() => {
  console.log("timeout");
}, 2000); // 1s === 1000ms

// callback function ==>
// arrow function

// spread operator
// javascript for array or for js object
// we can create 2 type of copy
// shallow copy
// let arrayOne = [10, 20, 30, 40];
// let arrayTwo = arrayOne;

// arrayOne[1] = 200;
// console.log(arrayOne);
// console.log(arrayTwo);

// deep copy

let arrayOne = [10, 20, 30, 40]; // 0x11
let arrayTwo = [...arrayOne]; // 0x12

arrayOne[1] = 200;
console.log(arrayOne);
console.log(arrayTwo);

let restaurant = {
  name: "KFC",
};

let restaurantOne = { ...restaurant };

// let const and var

// create a variable
// can create same variable 2 time
// assign a new value to var variable
var student;

let rollNo;

const marks = 20;

console.log(student, rollNo, marks);

// Web api ==> DOM , setTimeout , setInterval , clearTimeout , clearInterval ,
// promises , async await , xhr , fetch

console.log(window);

// destructing

// array
let arrayThree = [300, 400, 500, 600];
//let numberOne = arrayThree[0];// 300
// let numberTwo = arrayOne[1];// 400

let [numberOne, numberTwo] = arrayThree;

console.log(numberOne, numberTwo);

let restaurantTwo = {
  city: "Nashik",
  name: "KFC",
  price: 400,
};

let { price, name } = restaurantTwo;

// let newPrice = restaurantTwo.price;
// let restName = restaurantTwo.name
// console.log(price, restName);

// primitive ==> string number boolean
// let nameOne = "deepak";
// let nameTwo = nameOne;
// nameOne = 'Neha'
// array object

// template string
let fName = "Deepakkumar";
let lName = "Shinde";

// let statement = "Name of candidate is " + fName + " " + lName;
let statement = `Name of candidate is ${fName} ${lName}`;

console.log(statement);

// object literals
let numberOfUnit = 50;
let jobName = "Laptop";

let jobDone = {
  numberOfUnit,
  jobName,
};

console.log(jobDone);

// Installing react, react-dom, and react-scripts with cra-template.
