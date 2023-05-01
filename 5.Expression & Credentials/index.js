console.log("Operators in JS");
// Arithmetic operators
let num1 = 40;
let num2 = 10;

console.log(num1+"+"+num2+" = "+(num1+num2));
console.log(num1+"-"+num2+" = "+(num1-num2));
console.log(num1+"*"+num2+" = "+(num1*num2));
console.log(num1+"/"+num2+" = "+(num1/num2));
console.log(num1+"%"+num2+" = "+(num1%num2));

console.log("++ num1 : "+(++num1)); //41
console.log("num1 ++ : "+(num1++)); //41
console.log("-- num1 : "+(--num1)); //41
console.log("num1 -- : "+(num1--)); //41
console.log("num1    : "+(num1));   //40
console.log("num1 -- : "+(num1--)); //40

//Assignment operators
let a = 10;
let b = 20;
console.log("Result : "+ (b += a));

// Comparison Operators
let x = 50;
let y = 30;

console.log("x == y :"+(x == y));
console.log("x === y :"+(x === y));
console.log("x != y :"+(x != y));

// Logical Operators

let n = 5;
let m = 6;
console.log("m<n && m==n : "+ (m>n && m==n));

// Ternary operators

let age = 19;
console.log(age>18?"You can drive the car":"You are kid");
