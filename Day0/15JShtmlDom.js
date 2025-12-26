// DOM HTML

const heading = document.getElementById('mainHeading');
const paragraphs = document.getElementsByClassName('paragraph');
const allParagraphs = document.querySelectorAll('p');
const firstParagraph = document.querySelector('p');

const newParagraph = document.createElement('p');
newParagraph.textContent = 'A new paragraph has been added!';
document.body.appendChild(newParagraph);
