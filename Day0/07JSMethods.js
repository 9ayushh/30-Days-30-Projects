// Methods

const heading = document.getElementById('mainHeading');
heading.textContent = 'Greetings, HTML - DOM Methods';
const paragraphs = document.getElementsByClassName('paragraph');
for(const paragraph of paragraphs){
    paragraph.style.color = 'green';
}

heading.addEventListener('click', () => {
    alert('heading Clicked!');
});