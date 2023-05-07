// let a = 20.6;
// let b = 30.33;

// function caluclateAverage(x,y){
//     return "Average of "+x+" and "+y+" : "+(x+y)/2;
// }

// console.log(caluclateAverage(a,b));

// // Another way to create function using arrow

// const sum = (a,b) =>{
//     return "Sum of "+a+" & "+b+" : "+(a+b);
// }
// console.log(sum(a,b));



let num1;
let num2;

function getNumber(){
    num1 = prompt("Enter number 1 : ");
    num1 = parseInt(num1);
    num2 = prompt("Enter number 2 : ");
    num2 = parseInt(num2);
    console.log(this.calculate(num1,num2));
    console.log("done");
}
function calculate(num1,num2){
    return num1+num2;
}
console.log(getNumber());