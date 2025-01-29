

// functions

function sayHello() {
  console.log("Hey satwik");
}

sayHello(); // calling of function
sayHello();
sayHello();
sayHello();

// arguments -> a and b

function add(a, b) {
  console.log(a + b);
}

add(3, 4); //parameters

// ---------------------------------------------

function add(a, b) {
  return a + b;
}

let a = add(1, 4);
console.log(a);

// unlimited arguments accept

function addnumn(a, b) {
  console.log(arguments); // is arguments se saare elements aa jayenge
  let ans = 0;
  for (let i = 0; i < arguments.length; i++) {
    ans = ans + arguments[i];
  }
  return ans;
}
let result = addnumn(1, 2, 4, 5, 7);
console.log(result); // gives the sum of all elements

// ------------------------

//  arrow functions

// 1.Syntax

// normal function
function add(a, b) {
  return a + b;
}

let b = add(1, 4);
console.log(b);

// arrow function

//  const function name =() =>{
// console.log("hey")
// }

const add = () => {
  console.log("hey");
};

// with arguments

const add = (a, b) => {
  return a + b;
};

// short form for one liner

const add = (a, b) => a + b;

// 2. 'arguments' keyword

//  arrow fn m  arguments keyword nhi hota h to ham spread operator use karenge

const addnum = (...nums) => {
  console.log(nums);
};

