let sentance1 = "Javascript is \"awesome\"";
console.log("String length : "+sentance1.length);
console.log("String Uppercase : "+sentance1.toUpperCase());
console.log("String Loweecase : "+sentance1.toLowerCase());
console.log("String index : "+sentance1.indexOf("J"))
console.log("String slice : "+sentance1.slice(2,4))
console.log("String replace : "+sentance1.replace("awesome","GOAT"))
console.log("String concat : "+ sentance1.concat(" of all time"))
let sentance2 = "       ROHAN         ";
console.log("String trim : "+ sentance2.trim())

for(let i=0; i<sentance1.length;i++){
    console.log(sentance1[i])
}