// DOM Functions

function greet(name){
    console.log("Hello, "+ name + "!");
}
greet('Alice');

function square(number){
    return number * number;
}
let result = square(4);
console.log("Square: ", result);

let divide = (a,b) => a/b;

let quotient = divide(10,2);
console.log('quotient: ', quotient);