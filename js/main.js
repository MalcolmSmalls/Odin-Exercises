// OBJECTS

// Hello, object
// importance: 5
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.


// let user = {
//     name: 'John',
//     surname: 'Smith',
// }

// user.name = "Pete"

// delete user.name


// Check for emptiness
// importance: 5
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// let isEmpty = (obj) => Object.keys(obj).length === 0


// let something = {}

// something.color = 'black'



// Sum object properties
// importance: 5
// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

// let sum = salaries.John + salaries.Ann + salaries.Pete

// console.log(salaries.John + salaries.Ann + salaries.Pete)

// let sum = 0
// for (let key in salaries){
//     sum += salaries[key]
// }

// console.log(sum)

// Multiply numeric property values by 2
// importance: 3
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

// function multiplyNumeric(obj){
//     for (let number in menu){
//         if(typeof(menu[number]) === "number"){
//             menu[number] = menu[number] * 2
//         }
//     }
// }

// multiplyNumeric(menu)




// 08 Calculator.js

const add = function(n1,n2) {
	return n1 + n2
};

const subtract = function(n1, n2) {
	return n1 - n2
};

const sum = function(arr) {
	return arr.reduce((total, curr) => total + curr, 0)
};

const multiply = function(arr) {
  return arr.reduce((total,curr) => total*curr,1)
};

const power = function(num, exp) {
    return num**exp
};

const factorial = function(number) {
  let total = 1
	for(i=1; i<=number; i++){
    total *= i
  }
  return total
};