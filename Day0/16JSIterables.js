// Iterables 

const iterableArray = [1,2,3,4,5];
const iterator = iterableArray[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const stringIterable = "Hello JS";
const setIterable = new Set([1,2,3,4,5]);

for (const char of stringIterable){
    console.log(char);
}

for (const num of setIterable){
    console.log(num);
}