/* Pure Functions: This function always returns the same output as given the same input parameters. 
Pure functions only depend on their input parameters and don’t affect the state of the application or other parts of the code. */

// Example

function funcPure(val1){
    return 100+val1;
}
console.log(funcPure(20));


/* Impure Functions: Impure functions are functions that can modify the state of the application or have side effects.
In other words, impure functions can have unpredictable behavior and do affect other parts of the application. */

// In below example Math.random() will return different number each time we call it 
function funcImpure(val1){
    return (Math.random() + val1);
}
console.log(funcImpure(10))

let