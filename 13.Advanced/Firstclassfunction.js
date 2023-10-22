// First class function
// A language is said to have first class functions when the functions in that language is treated as variables
// you can save them, you can pass them as argument to another functions

// Example

const arithmetics  = {
    add : (a,b) => {
        return `${a} + ${b} = ${a+b}`;
    },
    subtract :(a,b) => {
        return `${a} - ${b} = ${a-b}`;
    },
    multiply :(a,b) => {
        return `${a} x ${b} = ${a*b}`;
    }
}
console.log(arithmetics.add(20,10))
console.log(arithmetics.subtract(20,10))
console.log(arithmetics.multiply(20,10))