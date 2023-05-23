
let flag = true
do{
    let randomNumber = Math.random() * (10 - 1) + 1
    randomNumber  = randomNumber.toPrecision(1)
    let p = prompt("Guess number between 1 to 10 : ")
    p = Number.parseInt(p)
    if(p < randomNumber){
        console.log("Your Number "+p+" is smaller then "+randomNumber)
    }else if(p==randomNumber){
        console.log("Your Number "+p+" is equal to "+randomNumber)
        console.log("You guess the right number !!!")
        break;
    }else if(p>randomNumber){
        console.log("Your Number "+p+" is greater then "+randomNumber)
    }
    let ask = prompt("Do you want to guess the number again (Y/N) ? : ")
    if(ask.toLowerCase() == "y"){
        flag = true
    }else{
        flag = false
        console.log("Thanks for guessing the number !!")
    }
}while(flag);
