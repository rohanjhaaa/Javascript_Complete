console.log("For In Loop\n");
let marks = {
    Rohan:50,
    Sandeep:60,
    Satvik:70,
    Akshay:80
}

for(let m in marks){
    console.log("Marks of "+m+" are "+ marks[m]);
}