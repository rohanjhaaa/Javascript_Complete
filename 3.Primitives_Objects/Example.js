//nn bb ss u - primitive type in JS 

let a = null;
let b = 345;
let c = true;
let d = BigInt("123");
let e = "Rohan";
let f = Symbol("This is a Symbol");
let g = undefined;

console.log(a,b,c,d,e,f,g);

console.log(typeof c);

// Non-Primitive datatype Objects in JS

const person = {
    "name":"Rohan",
    "Age":28,
    "Address":"Mumbai",
    "Employeed":true
}
console.log(person);
console.log(person["name"]);
console.log(person.Address);