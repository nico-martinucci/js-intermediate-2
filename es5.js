// 1. ES5 String Concatenation
const fname = 'Michelle';
const favoriteColor = 'purple';
const city = 'San Francisco';

console.log(
  `${fname} lives in ${city} and their favorite color is ${favoriteColor}.`
);

// 1. Refactor to ES2015 Template Literals:



// 2. ES5 Global Constants
const PI = 3.14;
// PI = 42; // stop me from doing this!

// 2. Refactor to ES2015 Global Constants



// 3. ES5 Assigning Variables to Object Properties
const foods = {
  fruits: {
    apple: "red",
    banana: "yellow",
  }
};

const {apple, banana} = foods;

// 3. Refactor to ES2015 Object Destructuring



// 4. ES5 Map Callback
function double(nums) {
  return nums.map(num => num * 2);
}

// 4. Refactor to ES2015 Arrow Functions Shorthand



// 5. ES5 Default Arguments
function add(a = 10, b = 10) {
  return a + b;
}

// 5. Refactor to ES2015 Default Arguments



// 6. ES5 Function that takes a variable number of arguments
function onlyEvens(...nums) {
  return nums.filter(num => num % 2 === 0);
}

// 6. Refactor to ES2015


