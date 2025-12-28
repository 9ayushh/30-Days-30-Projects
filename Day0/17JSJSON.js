// JSON

const personJSON = `{"name": "John", "age": 30, "city": "New York"}`;
const personObject = JSON.parse(personJSON);
console.log(personObject.name);

const bookObject = {
    title: 'the hitchhiker\'s guide to the galaxy',
    author: 'Douglas Adams',
    year: 1976
};
const bookJSON = JSON.stringify(bookObject);
console.log(bookJSON);
