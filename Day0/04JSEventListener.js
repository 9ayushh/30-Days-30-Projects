// Event Listener

const clickMeButton = document.getElementById('clickMe');

clickMeButton.addEventListener('click', function() {
    alert('Button Clicked!');
});

const dynamicList = document.getElementById('dynamicList');

dynamicList.addEventListener('click', function(event){
    if(event.target.tagName === 'li'){
        console.log('Clicked on List Item: ', event.target.textContent);
    }
});
