
/* function function1(){
    const name = "Rohan";
    console.log("This is test function1 with name : "+name);
}
function function2(){
    console.log("This is test function2 with name : "+name);
}
let testValue1 = function1();
let testValue2 = function2();
console.log(testValue1);
console.log(testValue2); //ReferenceError: name is not defined 
*/

// Now to resolve the above issue of "function2" where we are not able to get "name" value due to out of scope
// we will use "Closures"

function function1(){
    const name = "Rohan";
    console.log("This is test function1 with name : "+name);
    function function2(){
        console.log("This is test function2 with name : "+name);
    }
    return function2;
}

const funValue = function1();
funValue();
