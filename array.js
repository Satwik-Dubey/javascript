//  we can have heterogenous elents also

const array = [1, true, "satwik"];

// array.push(sat)  // add from last

console.log(array.indexOf("satwik")); // search for element  give index

// array.pop(1) //remove last element

array.reverse(); // reverse array

---------------------------------------------------------------------------------------------------

const students = ["Satwik", "jhon"];

//forEach-
// tum for each ke andar print function ko paas kar sakte h aur ye print fn tumare jitne bhi arrays ki value h usko print kar degA

// ye forEach fn kya karta h ki ye array ke ek ek element ko leta h and ye tumare is function ko as argument paas kar deta h and tum us argument ka kkuch bhi kar sakte ho

students.forEach((val) => console.log(val));

// First iteration: val = "Alice" → console.log("Alice");

// .map function

students.map((val) => console.log(val));

//  diff b/w map and forEach
//map ek naya array return karta h lekin forEachkuch return  nahi karta h


const num = [1, 2, 3, 4, 5, 6];

function double(n) {
  return n * 2;
}

// in arrow format -> const double = (n) => n * 2;
let newarr = num.map(double);
console.log(newarr);
console.log(num); // [1, 2, 3, 4, 5, 6]

// gives new array [2, 4, 6, 8, 10]

const number = [1, 23, 4, 6, 8, 9];

// ye har no ke upar jaata h aur ye tume har baar ek number deta h aur us no ko tum process kar ke kuch bhi kar sakte ho
//  isse ham koi bhi  element ko find kar sakte h array ke andar
let ans = number.find((num) => num === 2 * 3);

console.log(ans); // gives o/p as 6

let ans = number.findIndex((num) => num === 2 * 3); //gives index

const number = [1, 23, 4, 6, 8, 9];

const narr = number.filter((num) => num % 2); // filter even elements

console.log(narr); // gives a narr =[1.23.9]


const number = [1, 2, 3, 4, 5, 6, 7];

// slice let say i want from 2 to 5
let narr = number.slice(1, 5); // not include end index
console.log(narr); // [2, 3, 4, 5]


