// Example 1 => function without argument and without return type
function fun1(){
    console.log("Function Sample Example")
}
fun1()

// Example2 => function with argument and without return type
function fun2(a,b){
    for(i = a;i < b;i++){
        if (i % 2 == 0){
            console.log("The number",i,"is even.")
        }
        else{
            console.log("The number",i,"is odd.")
        }
    }
}
fun2(5,10)

// Example3 => function with return type and with argument
function fun3(num){
    
    if (num%2 == 0){
        return true
    }
    else{
        return false
    }
}
for(i = 5;i< 10;i++){
    a = fun3(i)
    if(a==true){
        console.log("The number",i,"is even.")
    }
    else{
        console.log("The number",i,"is odd.")
    }
}
