/* Destructuring Assignment is a JavaScript expression that allows to unpack values from arrays, or properties from objects,
into distinct variables data can be extracted from arrays, objects, nested objects and assigning to variables.
In Destructuring Assignment on the left-hand side defined that which value should be unpacked from the sourced variable.  */ 

var names = ["Rohan","Sandeep","Satvik","Akshay"];

//In general we're using below way

console.log(names[0]);
console.log(names[1]);

// Destructing way
console.log('================.... Destructiong Example .....=========='
)
var[firstName,secondName,thirdName] = names;
console.log(firstName);
console.log(secondName);
console.log("=============================");
var[first,second,...last] = names;
console.log(first)
console.log(last);


console.log("=============================");
console.log("Before Swapping .... ");
var[x,y] = [10,20];
console.log(x);
console.log(y);
console.log("After Swapping .... ");
[x,y] = [y,x];
console.log(x);
console.log(y);