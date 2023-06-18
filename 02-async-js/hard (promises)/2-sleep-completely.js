/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    const start_time = new Date()
    let now_time = new Date()
    while(now_time.getTime() - start_time.getTime() <= seconds*1000){
        now_time = new Date()
    }
}
console.log("Step 1")
console.log("Step 2")
console.log("Step 3")
console.log("Step 4")
console.log("Step 5")
sleep(10)
console.log("Step 6")
console.log("Step 7")
console.log("Step 8")