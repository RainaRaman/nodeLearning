console.log("callback finction details")

const students = [
    {name: "harry", subject: "javascript"},
    {name: "raman", subject: "nodejs"}
]


function enrollStudents(student){
    setTimeout(function(){
        students.push(student);
    }, 3000);
}

function getStudents(){
    setTimeout(function(){
        console.log("inside getStudent")
        
    }, 3000);
}
   