// this keyword
// global scope => window
// function scope => window
// method scope => object
// example:
// Define : this keyword is always refer to parent object
// if we try to implement an arrow function to it as an object method, we won't be able to access the object through the this keyword
// When using strict-mode, calling this within a function will return undefined.
var var1 = "Global";
console.log(this);  //window

function fun1(){
    var var2 = "function";
    console.log(this) //window
}

var obj = {
    method1 : function(){
        console.log(this); // obj
    }
}
console.log(obj.method1());

var objNew = {
    method2 : () => {
        console.log(this); // undefined
    }
}
console.log(objNew.method2());

// this in an Event Listener
// in below example, this is refer to button,
// in below simillar cases `this` keyword will refer to anything before `.event` action

// document.getElementById('testBtn').addEventListener('click', function() {
//     console.log('this in a event', this);
// })

// call, apply, bind
// ############# Call ##################
console.log("============ Call example started... ==============")
const person = {
    fullName: function(e1,e2,e3) {
            console.log(this.firstName + " " + this.lastName);
    }
  }
  const person1 = {
    firstName:["Rohan"],
    lastName: "Jha"
  }
  const person2 = {
    firstName:"Sandeep",
    lastName: "Kuril"
  }
person.fullName.call(person1);

console.log("============ apply example started... ==============")

const number = {
    oddNumber : function(arra){
        for(let i=0; i<arra.length;i++){
            console.log("Initiated by "+this.name);
            console.log(`2 x ${i} = ${2*i}`);
        }
    }
}
var pName1 = {
    name : "Rohan Jha"
}

var pName2 = {
    name : "Sandeep Kuril"
}
number.oddNumber.apply(pName1,[[1,2,3,4]])


console.log("============ bind example started... ==============")


const employee = {
    company : "Cognizant",
    empName : function () 
            {
                console.log("bounded by name : "+this.fullName)
            },
    address:"Airoli"
}
var ename = {
    fullName : "Rohan Jha"
}

var emp1 = employee.empName.bind(ename);
emp1();