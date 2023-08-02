let red =() ==> console.log("wow");

let person = {
    
    name:"mildred",
    age: 12;


function factorial(userNumber){
    if (userNumber==0){
        return 1;
    }
    console.log("Current number", userNumber)
    return userNumber * factorial(userNumber-1)
}

console.log(factorial(8))

module.exports = {
    red,
    person,
     factorial,
}