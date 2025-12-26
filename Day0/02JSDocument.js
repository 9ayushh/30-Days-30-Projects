// JavaScript Document
const documentObject = document;
console.log(documentObject);

document.title = 'New Title';
document.getElementById('mainHeading').textContent = 'Greeting, Document';

const newParagraph = document.createElement('p');
newParagraph.textContent = 'A new paragraph has been added';
document.body.appendChild(newParagraph);

EventListener
const firstParagraph = document.querySelector('p');
firstParagraph.style.color = 'blue';

document.getElementById('mainHeading').addEventListener('click', () => {
    alert('Heading Clicked');
});
