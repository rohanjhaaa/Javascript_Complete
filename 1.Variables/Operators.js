//Nullish coalescing

const fruitName = "Mango"
//const fruitName = null
const fruit = fruitName ?? 'Default Fruit name';
console.log(fruit)

//Ternary operator
const fruitTernary = fruitName=="Mango"?"Favrourite fruit : "+fruitName:"Random Fruit Name"
console.log(fruitTernary)

// in operator
// The in operator returns true if the specified property is in the specified object or its prototype chain.
const car = { make: 'Honda', model: 'Accord', year: 1998 };
console.log('model' in car)

// instanceof

function Car(make,model,car){
    this.make=make
    this.model=model
    this.car=car
}
const auto = new Car('Honda','Accord',1998)
console.log(auto instanceof Car)
console.log(auto instanceof Object)

let randomNumber = Math.random() * (10 - 1)+1
randomNumber = randomNumber.toPrecision(1)
console.log("RandomNumber : "+randomNumber)

let num1 = "2"
let num2 = 2
let num3 = 2
console.log("== : "+(num1 == num2))
console.log("=== : "+(num1 === num2))
console.log("=== : "+(num2 === num3))