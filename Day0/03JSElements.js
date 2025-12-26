// JavaScript DOM Elements
const heading = document.getElementById('mainHeading');
heading.textContent = "Greeting, elements";

const paragraphs = document.getElementsByTagName('p');
for(const paragraph of paragraphs){
    paragraph.style.color = 'orange';
}

const introParagraph = document.getElementsByClassName('intro-paragraph')[0];
introParagraph.textContent = 'discover the magic of HTML elements';

const fParagraph = document.querySelector('p');
firstParagraph.style.fontSize = '18px';

heading.setAttribute('class', 'main-title');

const newPara = document.createElement('p');
newPara.textContent = 'A new paragraph has been added';
document.body.appnedChild(newParagraph);