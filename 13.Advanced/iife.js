// iife : immediately invoked function expression
// initialization syntax of jquery is also an eample of iife

const test = (function(){
 let num1 = 20;
 let num2 = 30;
 return num1+num2;
})();
//console.log(num1);
//console.log(name2);
//console.log(test);

var ans = (function (){
    var privateVar = 10;
    return {
        getter: function(){
            console.log(privateVar);
        },
        setter:function(val){
            privateVar = val;
        }
    }
})();
console.log(ans.setter(12232))
console.log(ans.getter())