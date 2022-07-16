var f2=require("./sample.js")

var resultM=f2(2,3,4);
console.log("Result in ex2 is:", +resultM);


class Employee
{
    constructor(empId,empName,salary)
    {
        this.empId=empId;
        this.empName = empName;
        this.salary=salary;
    }
    display()
    {
        console.log("EmpID",+this.empId)
        console.log("Emp Name is:", +this.empName)
        console.log("EmpID Salary",+this.salary)
    }
}

module.exports=Employee

// All the require statement are cached by default so it won't print twice any module