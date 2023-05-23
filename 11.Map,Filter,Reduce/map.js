// Map : Create a new array by performing some operation on each array elemment 
// for-each : to perform an operation on existing array element


let arr = [55,32,11,20,18]
let new_arr = arr.map((value) => {
    console.log(value)
    return value;
})
console.log(new_arr);

let num = [101,124,778,1001]
num.map((value,index,array) => {
    console.log(value,index,array)
})