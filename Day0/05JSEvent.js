// Events

const clickMeButton = document.getElementById('clickMe');

clickMeButton.addEventListener('click', function(){
    alert('Button Clicked');
});

document.addEventListener('keypress', function(event){
    console.log('key pressed: ', event.key);
});

clickMeButton.addEventListener('mouseover', function(){
    console.log('mouse over button');
});

clickMeButton.addEventListener('mouseout', function(){
    console.log('mouse left button');
});
