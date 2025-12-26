function greet(name){
    console.log(`hello, ${name} my fvrt language is ${this.language}`);
}
const developer = {name: 'john', language: 'javascript'};
const boundGreet = greet.bind(developer);
boundGreet('alice');

function introduce(name, role){
    console.log(`hello, ${name}, a ${role} i work with ${this.language}`);
}
const developerIntro = introduce.bind(developer, 'alice', 'web developer');
developerIntro();
