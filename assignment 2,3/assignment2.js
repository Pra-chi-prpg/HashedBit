// Q1. Write code  to display from 1 to 100 but just even numbers.
for(i=2;i<100;i+=2){
    console.log(i)
}


//Q2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        default:
            return 'Invalid operator';
    }
}

console.log(calculate(10, 5, '+')); // Addition
console.log(calculate(10, 5, '-')); // Subtraction
console.log(calculate(10, 5, '*')); // Multiplication
console.log(calculate(10, 5, '/')); // Division


/*Q3.
You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

if 500000 >= salary > 0 then 0% tax on the entire salary.
If 1000000 >= salary > 500000 then 10% tax on the entire salary.
If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
If the salary > 1500000 then 30% tax on the entire salary.*/
function findTax(salary) {
    switch (true) {
        case salary > 0 && salary <= 500000:
            return 0;
        case salary > 500000 && salary <= 1000000:
            return salary * 0.1;
        case salary > 1000000 && salary <= 1500000:
            return salary * 0.2;
        case salary > 1500000:
            return salary * 0.3;
        default:
            return 'Invalid salary';
    }
}

console.log(findTax(400000)); // 0
console.log(findTax(750000)); // 75000
console.log(findTax(1200000)); // 240000
console.log(findTax(2000000)); // 600000


//Q4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.
function sumOfProducts(n1, n2) {
    let str1 = n1.toString().split('').reverse();
    let str2 = n2.toString().split('').reverse();
    let length = Math.max(str1.length, str2.length);
    let sum = 0;

    for (let i = 0; i < length; i++) {
        let digit1 = i < str1.length ? parseInt(str1[i]) : 0;
        let digit2 = i < str2.length ? parseInt(str2[i]) : 0;
        sum += digit1 * digit2;
    }

    return sum;
}

console.log(sumOfProducts(6, 34)); // 24