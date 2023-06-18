/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    const d1 = new Date()
    const time_start = d1.getTime()
    let sum = 0
    for(let i=1; i<=n; i++){
        sum+=i
    }
    const d2 = new Date()
    const time_end = d2.getTime()
    console.log(time_end - time_start)
    return sum;
}

calculateTime(100)
calculateTime(100000)
calculateTime(1000000000)
calculateTime(100000000000)