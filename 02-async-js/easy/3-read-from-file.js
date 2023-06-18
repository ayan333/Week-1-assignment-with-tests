const fs = require('fs')

const data = fs.readFile(".\\3-input.txt",'utf-8',(err,data)=>{console.log(data)})

console.log(data)

for(let i=0; i<100;i++){
    console.log(i)
}


