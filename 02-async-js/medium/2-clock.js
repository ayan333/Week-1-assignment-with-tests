const d = new Date()
let hour = d.getHours()
let minute = d.getMinutes()
let second = d.getSeconds()

const displayTime = ()=>{
    if(second < 59){
        second++;
    }
    else if(second==59){
        second = 0;
        if(minute < 59){
            minute++;
        }
        else if(minute == 59){
            minute = 0;
            if(hour < 23){
                hour++;
            }
            else if(hour == 23){
                hour = 0;
            }
        }
    }
    const hour_str24 = (hour>9)?hour:"0"+hour
    const am_pm = (hour>=12)?"PM":"AM"
    let hour_str = (hour > 12)?hour-12:hour
    hour_str = (hour_str>9)?hour_str:"0"+hour_str
    const min_str = (minute>9)?minute:"0"+minute
    const sec_str = (second>9)?second:"0"+second
    console.log(`${hour_str24}:${min_str}::${sec_str} || ${hour_str}:${min_str}::${sec_str} ${am_pm}`)
}
setInterval(displayTime, 1000)