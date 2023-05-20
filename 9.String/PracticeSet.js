let str = "Rohan \"JHA\""
console.log(str)

let sentance = "The quick brown fox jumps over the lazy dog.";
const word = "lion";
console.log(sentance.includes(word))
console.log(`The word "${word}" ${sentance.includes(word)? 'is':'is not'} in the sentance`)

console.log('Startswidth : '+ sentance.startsWith("h"))

console.log("lowecase : "+sentance.toLocaleLowerCase())

let str2 = "The amount is Rs 1000";
let amount = Number.parseInt(str2.slice("The amount is Rs".length).trim())
console.log(amount)

let friend = "Sandeep"
let result = friend.replace(friend[3],"T")
console.log(result)