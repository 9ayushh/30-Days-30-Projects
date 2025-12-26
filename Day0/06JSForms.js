// Forms

const myForm = document.getElementById('myForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.querySelector('button');

console.log('Form Element: ', myForm);
console.log('username input element: ', usernameInput);
console.log('password input element: ', passwordInput);
console.log('submit button element: ', submitButton);

myForm.addEventListener('submit', function(event){
    event.preventDefault();

    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;

    console.log('username: ', usernameValue);
    console.log('password: ', passwordValue);
});
