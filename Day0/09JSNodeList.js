// DOM Node List

const listItems = document.querySelectorAll('#myList li');
console.log('list items node list: ', listItems);

listItems.forEach((item,index) => {
    console.log(` item ${index + 1} : ${item.textContent}`);
});

listItems.forEach(item => {
    item.style.color = 'green';
});

listItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        alert(`Item ${index + 1} clicked!`);
    });
});
