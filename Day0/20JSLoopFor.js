// For Loop

for(let i=0; i<5; i++){
    console.log(`iteration ${i+1}`);
}

const fruits = ["apple", "banana", "orange", "grapes"];
for(let i=0; i<fruits.length; i++){
    console.log(`fruit: ${fruits[i]}`);
}

for(let i=0; i<10; i++){
    if(i%2 == 0){
        continue;
    }
    console.log(`odd number: ${i}`);
}