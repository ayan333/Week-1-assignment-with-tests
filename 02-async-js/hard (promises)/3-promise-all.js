/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve)=>{
        setTimeout(resolve, 1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve)=>{
        setTimeout(resolve, 2000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve)=>{
        setTimeout(resolve, 3000)
    })
}

function calculateTime() {
    const t1 = new Date().getTime()
    const p1 = waitOneSecond()
    const p2 = waitTwoSecond()
    const p3 = waitThreeSecond()

    
   
    Promise.all([p1, p2, p3]).then(() => {
    const t2 = new Date().getTime();
    const duration = (t2 - t1) / 1000;
    console.log(`All promises resolved in ${duration} seconds.`);
   });
}

calculateTime()
/*
waitOneSecond()
.then(()=>{console.log("reoslved.")})
waitTwoSecond()
.then(()=>{console.log('resolved2')})
waitThreeSecond()
.then(()=>{console.log('resolved3')})
*/