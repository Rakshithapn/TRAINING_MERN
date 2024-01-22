// Objects

// Declaration of objects:   3 methods
// 1:
var CustomerDetails = {
    "Name" : "Raksh",
    "Age" : 30,
    "P.No" : "9876543210" //When ending an object "," is optional  
}
console.log(CustomerDetails)
CustomerDetails["id"] = "21ECR161"
console.log(CustomerDetails)
// 2 nd method:
var CustomerDetails = {}
CustomerDetails["name"] = "Nadish"
CustomerDetails["age"] = "30"
CustomerDetails["id"] = "21ECR013"
console.log(CustomerDetails)
// 3rd method:
var kongu = new Object()
kongu["fees"] = "100000"
kongu["accomodation"] = "Excellent"
kongu["food"] = "Pretty Decent"
kongu["hostelCount"] = 10
console.log(kongu)
console.log(kongu.fees)
console.log(kongu["hostelCount"])
