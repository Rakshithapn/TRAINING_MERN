// For loop
var sum = 0
for (var i = 0;i < 10; i++)
{
    sum += i
}
console.log(sum)

// While loop
sum = 0
i = 0
while(i<10)
{
    sum += i
    i++
}
console.log(sum)

i=0
sum=0
// do while
do{
    sum += i
    i++
}while(i<10)
console.log(sum)

arr = [10,20,30]  //Valid
console.log(arr.length)
for (var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

arr = [10,20,30]  //Valid
console.log(arr.length)
for (var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}
// for-in loop
arr = [10,"String","Kongu",20,true]
for (const index in arr) {
    console.log("The elemnt in index ",index,"is",arr[index])
}
// To access element directly we have for-of and for-each

// for-of loop
arr = [10,"String","Kongu",20,true]
for (const value of arr) {
    console.log(value)
}
// for-each loop
arr.forEach(value => {
    console.log(value)
});

// -> example
var kongu = new Object()
kongu["fees"] = "100000"
kongu["accomodation"] = "Excellent"
kongu["food"] = "Pretty Decent"
kongu["hostelCount"] = 10
console.log(kongu)

for (const key in kongu) {
    console.log(key,kongu[key])
}

for (const value of kongu) {
    console.log(value)
}

array.forEach(element => {
    
});