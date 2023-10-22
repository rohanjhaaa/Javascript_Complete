function car(name,type,weight,launchYear){
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.launchYear = launchYear;
    //console.log(`The car ${name} of type ${type} weighing of ${weight}kg launched in year ${launchYear}`);
}

const car1 = new car("Tata","SUV",1028,2015);
const car2 = new car("Huyandai","Hatchback",980,2018);
const car3 = new car("Toyata","SUV",2000,2023);

console.log(car1);
console.log(car2);
console.log(car3);

