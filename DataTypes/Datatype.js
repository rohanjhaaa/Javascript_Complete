let str1 = "Double quoted string";
let str2 = 'Single quoted string';
let str3 = `Template string`;

// backticks is used when you want to use variable and expression in string

let amount = 1000, rate=0.05, duration=3;
let result = `Total Amount Payable:${amount * (1+rate*duration)}`;

// console.log(result);

// let : can be updated but not re-declared
// const : will never updated or re-declared
// var : can be updated & redeclared both

let name = "Rohan";
// name = "Rohit"
// console.log(name);


var firstName = "Rohan";
var lastName = "Jha"
var age = 28;
const address = "Bihar";

console.log("Firstname : "+firstName + "\nLastname : "+lastName+"\nAge : "+age+"\nAddress : "+address);

// Update & Re-Declaration example
var qualification = "Btech";
var qualification = "BTech+MBA"
var qualification = "BTech+MBA+PHD"
console.log("Qualification : "+qualification);
