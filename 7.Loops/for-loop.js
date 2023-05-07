console.log("Tables")
for(let i=1; i<11; i++)
{
    console.log("2 X "+i+" = "+(14*i));
}
console.log("Even number");
for(let i=0; i<11; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
console.log("Odd Number");
for(let i=0; i<11; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}
console.log("Factorial Number");
let num = 1;
for(let i=1; i<6; i++){
    num = num * i;
}
console.log(num);

