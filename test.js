const time1= document.querySelector(".watch .time")
const startbtn=document.getElementById("start");
const stopbtn=document.getElementById("stop")


let seconds=0;
let interval=null

startbtn.addEventListener("click", start)
stopbtn.addEventListener('click', stop)

function timer(){
    seconds++;


//format out time


let hrs= Math.floor(seconds /3600)
let min= Math.floor((seconds-(hrs*3600))/60)
let secs= seconds % 60

if(secs < 10) secs = '0' + secs;
if(min < 10) min = '0' + min;;
if(hrs < 10) hrs = '0' + hrs;


// let secs= seconds % 60
// let mins=Math.floor(seconds /60)
// let hrs=Math.floor(seconds/3600)

time1.innerText= `${hrs}:${min}:${secs}`
}

timer()  

function start  (){
    if(interval){
        return
    }
    interval =setInterval(timer,1000)
}

function stop (){
    clearInterval(interval)
    interval=null
}

