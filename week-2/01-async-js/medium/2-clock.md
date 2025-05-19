Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

- HH:MM::SS (Eg. 13:45:23)
  let hours = 12;
  let minutes = 59;
  let seconds = 58;
  let time = "PM"

console.log(hours , " " , minutes , " " , seconds );
setInterval(()=>{
seconds++;
if(seconds === 60 ){
minutes ++;
seconds = 0;
}
if(minutes === 60 ){
hours++;
minutes = 0;
}

    console.log(hours.padStart(2,"0"),minutes,seconds )

},1000)

- HH:MM::SS AM/PM (Eg 01:45:23 PM)
  let hours = 12;
  let minutes = 59;
  let seconds = 58;
  let time = "PM"

console.log(hours , " " , minutes , " " , seconds );
setInterval(()=>{
seconds++;
if(seconds === 60 ){
minutes ++;
seconds = 0;
}
if(minutes === 60 ){
hours++;
minutes = 0;
}
if(hours === 12){

       time =  time === "PM" ?  "AM" :  "PM";
    }
    if(hours === 13){
    hours = 1;
    }
    console.log(hours.padStart(2,"0"),minutes,seconds,time )

},1000)
