let arr = [90,23,100,25,40,55]
const initialValue = 2
// let result = arr.reduce((value1, value2) => {
//     return value1 + value2,initialValue
// })
// console.log(result)
let result = arr.reduce((value1, value2) => value1 + value2,initialValue)
console.log(result)

let callBackFun = arr.reduce((callBackF) => callBackF)
console.log("callBackFun : "+ callBackFun)

let num_arr = [1,2,3,4,5,6,7,8]
let num_result = num_arr.reduce((x1,x2)=>{
    return x1*x2
})
console.log(num_result)

const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const countedName =  names.reduce((allName,name) => {
    const currentName = allName[name] ?? 0;
    return {
        ...allName,[name]:currentName+1,
    }
},{})
console.log(countedName)
