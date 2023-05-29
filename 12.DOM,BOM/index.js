// Window : Window object represent browser window and provides methods to control
        // It is a global object
console.log(window)

// DOM(Document Object Model) : dom represent the page content as html
// BOM(Browser Object Model) : represent additional objects provided by the browser for working with everything except the doc
//  alert/confirm/prompt are also a part of the BOM
console.log(document)
console.log(document.body)
console.log(document.body.getElementsByTagName("a"))

let redirect = confirm("Do you want to redirect to another page ? ")
if(redirect){
    location.href = "https:www.youtube.com"
}else{
    let isColor = confirm("Do you want to change color of page ? ")
    if(isColor){
        let color = prompt("Enter color name : ")
        document.body.style.background = color
    }
}