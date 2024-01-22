// SET: Collection of unique data or values
// syntax: VariableName = new set()
// To add new elements: Variablename.add(Value)

// MAP: It is a key value pair
// syntax: VariableName = new map()
// To add new element: Variablename.add("id","101")

// Sets
setExample = new Set("aiadmk","bjp","congress")
console.log(setExample)   //Output:  Set(5) { 'a', 'i', 'd', 'm', 'k' }

setExample = new Set(["aiadmk","bjp","congress"])
console.log(setExample)    //Output:  Set(3) { 'aiadmk', 'bjp', 'congress' }

setExample.add("dmk")
setExample.add("aiadmk")
console.log(setExample)

for (value of setExample) {
    console.log(value)
}

for (key in setExample) {
    console.log(key,setExample[key])   //No output
}

//Maps
// mapEg = new Map("id","21ECR161") //No key value pair present
// console.log(mapEg)

// mapEg = new Map([
//     "id","21ECR161"        //It will not recognise proper key to store or to iterate the map
// ])
// console.log(mapEg)

mapEg = new Map([
    ["id","val"],
    ["name","val1"],
    ["age","val3"],
])
console.log(mapEg)

for (value of mapEg) {
    console.log(value)
}

for (const key in mapEg) {
    console.log(key)
}

console.log(mapEg.has["name"])

mapex = new Map([
    ["name","Raks"],
    ["id","21ECR161"],
    ["age","19"]
])
console.log(mapex)
mapex.set("ph.no","987643210")
console.log(mapex)
mapex.delete("ph.no")
console.log(mapex)