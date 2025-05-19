## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function counter(count){

    setTimeout(()=>{
        console.log(count++)
        counter(count)
    },[1000])

}
counter(1)

(Hint: setTimeout)
