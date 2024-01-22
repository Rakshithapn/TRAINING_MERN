// // Scope
// // Global scope
// var sum = 0
// for (var i = 0;i < 10; i++)
// {
//     sum += i
// }
// console.log(sum)

// i = 0
// while(i<10)
// {
//     sum += i
//     i++
// }
// console.log(sum)

// i=0
// // do while
// do{
//     sum += i
//     i++
// }while(i<10)
// console.log(sum)

// // Local scope =>  Limited to the specific function or block in which the variable is declared.
// for(let i = 0;i < 5;i++){
//     console.log(i)
// }
// // console.log(i)  //This provides error as it is local ie.. "let" does not holds the accessbility outside the block

// Block scope
for(var i = 0;i < 5;i++){
    console.log(i)
}
console.log(i) // "var" provides accessbility outside the block
// => Example 2:
var a = 10
console.log(a) // Output: 10
{
    let b = 5
    let a = 5
    console.log(a) // output: 5
    console.log(b) // output: 5
}
console.log(a) // Output: 10
//console.log(b) // Reference error

