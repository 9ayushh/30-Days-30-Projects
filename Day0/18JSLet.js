// Let 

let count = 10;

if(true){
    let count = 20;
    console.log(count);
}
console.log(count);

for(let i=0; i<0; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000);
}