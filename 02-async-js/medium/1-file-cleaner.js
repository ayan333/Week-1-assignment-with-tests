const fs = require('fs')

var new_str = ''

clean = (err, data) =>{
    if(err){
        console.log(err)
    }
    else{
        let prev_c = ''
        for(let i=0; i<data.length; i++){
            const c = data[i]
            if(c==' ' && prev_c==' '){
                continue
            }
            else{
                new_str += c
                prev_c = c
            }

        }
    }
    fs.writeFile(".//dirty-file.txt",new_str,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("File cleaned.")
        }
    })
}
var data = fs.readFile(".//dirty-file.txt",'utf-8', clean)

