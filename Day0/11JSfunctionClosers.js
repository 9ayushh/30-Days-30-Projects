// Function Closure

function outerFunction(){
    const outerVariable = 'i am from outer function';
    
    function innerFunction(){
        console.log(outerFunction);
    }
    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction();

function counter(){
    let count = 0;

    return function(){
        console.log(`count: ${count++}`);
    };
}

const increment = counter();
increment();
increment();