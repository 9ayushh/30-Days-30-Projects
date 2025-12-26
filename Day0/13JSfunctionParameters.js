function greetDefault(name = 'Guest'){
    console.log(`hello, ${name}!`);
}

greetDefault();
greetDefault('Eve');

function greetAll(...names){
    for(const name of names){
        console.log(`Hello, ${name}!`);
    }
}
greetAll('Tom', 'Jerry', 'Spike');