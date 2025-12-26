function greet(name){
    console.log(`hello, ${name}!`);
}
greet('Jeny');

const greetExpression = function(name) {
    console.log(`hello, ${name}!`);
};
greetExpression('Alice');

const greetArrow = (name) => {
    console.log(`hello, ${name}!`);
};
greetArrow('Bob');