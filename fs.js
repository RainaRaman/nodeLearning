// Learn more on the fs module
const {readFileSync,writeFileSync}=require('fs');


const first=readFileSync('./file1.txt','utf8')

const seconed=readFileSync('./file2.txt','utf8')


console.log(first,seconed)


writeFileSync('./fileWrite.txt',
`Here is the result, : ${first},${seconed}`,{flag:'a'})