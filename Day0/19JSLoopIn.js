// Loop For In

const car = {
    brand: 'toyata',
    model: 'camry',
    year: 2022
};

for(let key in car){
    console.log(`${key } : ${car[key]}`);
}

for(let key in car){
    if(key == 'model'){
        console.log(`breaking at key: ${key}`);
        break;
    }
    console.log(`${key}: ${car[key]}`);
}