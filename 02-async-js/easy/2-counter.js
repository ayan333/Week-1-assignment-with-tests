let counter=0

const inc = ()=>{
    counter += 1
    console.log(counter)
    setTimeout(inc, 1000)
}

setTimeout(inc, 1000)