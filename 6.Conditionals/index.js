// Conditionals Examples
//const prompt = require('prompt-sync')();

let age = prompt("Enter your age : ");
age = Number.parseInt(age);
console.log(age);
console.log(typeof age);
if(isNaN(age)){
    alert("Please enter the age in number");
}else if(age>18){
    alert("You are Adult");
}else{
    alert("You are Minor");
}

// Switch Statement

let fruit = prompt("Please enter you favourite fruit : ");
if(!isNaN(fruit)){
    alert("Please enter the name of fruit");
}
switch(fruit){
    case 'Orange':
        alert("I love orange");
        break;
    case 'Mango':
        alert("I love Mango");
        break;
    case 'Cherry':
        alert("I love Cherry");
        break;
    default:
        alert("I love "+fruit);
}