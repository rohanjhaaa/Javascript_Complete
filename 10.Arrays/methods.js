let num = [1, 2, 3, 4, 5]
console.log("To String : " + num.toString())

let join_str = num.join("_")
console.log("Join : "+ join_str)

// POP method

console.log("POP length: "+num.pop())
console.log("After POP : "+num)

console.log("Push length: " + num.push(11))
console.log("After Push : "+ num)

console.log("Shift : "+ num.shift())
console.log("After shift : "+ num)

console.log("Unshift : "+ num.unshift(8))
console.log("After unshift : "+num)

// Delete will not affect num length
console.log("Delete : "+ delete num[1])
console.log("After delete : "+ num)

let num1 = [11,12,13,14]
let num2 = [15,16,17,18]
let num3 = [19,20,22,21]


console.log(num1.concat(num2))
console.log(num1.concat(num2,num3))
console.log("After sort : "+ num1.concat(num2,num3).sort())

// Sort -> It sort by alphebatically  

let num4 = [333,555,10000,22000,38]
console.log("Sort : "+num4.sort())

// Sort using compare method

let ascending = (a,b) => {
    return a-b
}
let descending = (a,b) => {
    return b-a
}
console.log("Sort ascending order : "+num4.sort(ascending))
console.log("Sort descending order : "+num4.sort(descending))

console.log("Reverse : "+ num4.reverse())

// Splice & slice

console.log("Splice : "+num4.splice(1,1,444,666,777))
console.log("After Splice : "+ num4)

console.log("Slice : "+ num4.slice(2,4))
