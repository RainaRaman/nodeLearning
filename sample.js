console.log('First Module with single quote');
console.log("First module with double quote");
console.log(`Hey, Super module`);

function myFunc(a,b,c){
    d=a+b+c
    return d
}

var result = myFunc(1,2,3)

console.log("Sum of all the number defined inside function is:", + result)
console.log("Sum of all the number defined inside function is without comma:" + result)
console.log(result)

module.exports = myFunc;