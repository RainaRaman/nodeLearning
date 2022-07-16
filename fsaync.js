const {readFile,writeFile} = require('fs')

readFile('./file1.txt','utf8',(error1,result)=>{
    if(error1){
        console.log(error1)
        return
    }
    console.log(result)
})
