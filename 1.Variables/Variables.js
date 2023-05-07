// Javascript is case sensitive
// Multi line comment shortcut Windows => Shift + Alt + A
/* The general rules for constructing names for variables (unique identifiers) are:
Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ (but we will not use it in this tutorial).
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.
 */

var a = "Alphabet a";
var A = "Alphabet A"
console.log(a);
console.log(A);

var undefined = undefined;
console.log(undefined);

var b = true;
console.log(b);

var num1 = 10;
var num2 = 20;
console.log("result : "+ (num1+num2));

// The var keyword is used in all JavaScript code from 1995 to 2015.
// The let and const keywords were added to JavaScript in 2015.
// If you want your code to run in older browsers, you must use var