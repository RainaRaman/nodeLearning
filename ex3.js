var f2=require("./sample.js");
var emp=require("./ex2.js");

console.log("inside module3")
//var Employee = require("./ex2.js")

var obj=new emp(101,"Hi",1000000000000)
obj.display();

console.log("Result=",f2(10,10,10))