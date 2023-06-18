const fs = require("fs")

const data = "TESTING"

fs.writeFile(".//3-input.txt",data,(err)=>{console.log("file written")})

for(let i=0; i<100; i++){
    console.log(i)
}