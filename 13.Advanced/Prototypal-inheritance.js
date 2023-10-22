/* Prototypal inheritance is a mechanism available in JavaScript for objects to inherit properties and methods from other objects. 
Every object in JavaScript has a prototype, which properties and methods are inherited from */


function Person(name, website){
    this.name = name;
    this.website = website;
}

Person.prototype.sayHello = function(){
    console.log(`Hello, my name is ${this.name} and this is my website: ${this.website}`);
}

const paul = new Person("Paul", "https://www.paulsblog.dev");
paul.sayHello();


var Human = {
    name:"Harsh",
    canFly:false,
    canTalk:true,
    willdie:true
}
var jcsStudent = {
    canScoreGoodMarks : true,
    canWinTournment : true,
    canParticipate  : false
}

jcsStudent.__proto__ = Human;

console.log(jcsStudent.canFly);