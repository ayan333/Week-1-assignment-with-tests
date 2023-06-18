const N_LIMIT = 10
let counter = 0;
setInterval(()=>{
    if(counter < N_LIMIT)
    console.log(++counter)
    else{
        return;
    }
}, 1000)