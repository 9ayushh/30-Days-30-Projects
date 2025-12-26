// DOM Navigation

const container = document.getElementById('container');
console.log('container element: ', container);

const listItems = document.getElementsByTagName('li');
console.log('list items: ', listItems);

const contentDivs = document.getElementsByClassName('content');
console.log('content divs: ', contentDivs);

const welcomeParagraph = document.querySelector('#container .content p');
console.log('welcome paragraph: ', welcomeParagraph);

const containerDivs = document.getElementById('container');
const list = containerDivs.getElementsByTagName('ul')[0];
const secondListItem = list.getElementsByTagName('li')[1];
console.log('second list item: ', secondListItem.textContent);