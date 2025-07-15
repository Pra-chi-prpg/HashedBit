// 1.Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?
function scopeDemo() {
    var a = 'I am var';       // Function-scoped
    let b = 'I am let';       // Block-scoped
    const c = 'I am const';   // Block-scoped and cannot be reassigned
  
    console.log(a, b, c);
  }
  
  scopeDemo();
  

// 2.Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.
const fruits = ['Apple', 'Banana', 'Cherry', 'Mango', 'Grapes'];

function getSecondFruit() {
  return fruits[1];
}

console.log(getSecondFruit()); // Output: Banana


//3.  Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.
function modifyArray(arr) {
    arr.push('New Element');
    arr.pop(); // removes the element just added
    return arr;
  }
  
  console.log(modifyArray([1, 2, 3]));
  

// 4. Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.
const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
  return arr.map(num => num * num);
}

console.log(squareNumbers(numbers)); // [1, 4, 9, 16, 25]


// 5. Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
  }
  
  console.log(filterOddNumbers([1, 2, 3, 4, 5, 6])); // [1, 3, 5]

  
// 6. Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.
const person = {
    name: 'Alexa',
    age: 25,
    occupation: 'teacher'
  };
  
  function greetPerson(p) {
    console.log(`Hello, my name is ${p.name}, I am ${p.age} years old and I work as a ${p.occupation}.`);
  }
  
  greetPerson(person);
  

//7.  Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).
function getArea(rect) {
  return rect.width * rect.height;
}

console.log(getArea({ width: 5, height: 10 })); // 50


// 8. Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().
function getObjectKeys(obj) {
    return Object.keys(obj);
  }
  
  console.log(getObjectKeys({ name: 'Bob', age: 30, city: 'Paris' }));
  // ['name', 'age', 'city']

  
// 9. Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
  }
  
  console.log(mergeObjects({ a: 1 }, { b: 2 }));
  // { a: 1, b: 2 }
  

// 10. Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.
const nums = [10, 20, 30, 40];

function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray(nums)); // 100


