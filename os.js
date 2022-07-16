const os = require('os')

const user=os.userInfo()
//console.log(user)


const ot=os.type()

//console.log(`OS type of this mac is : ${ot}`)


const osDetails={
    name: os.type(),
   // cpu: os.cpus(),
  //  mem: os.mem(),
    freemem:  os.freemem()
}

//console.log(`OS Details :" +${osDetails}`)

console.log(osDetails)