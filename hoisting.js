/*// Hoisting

// Variable hoisting

// console.log(a)
// let a = 10          //Reference error Cannot access 'a' befor initialization

console.log(a)
var a = 10     //undefined*/

//Functional hoisting
konguClg()   //ReferenceError: konguClg is not defined at Object
function konguClg(a, b){
    for(i = a; i < b;i++){
        if (i % 2 ==0){
            console.log("The number "+i+"is even")
        }
        else{
            console.log("The number "+i+"is odd")
        }
    }
}
