let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function timeToString(time){

    let hrs = Math.floor(time / 3600000);

    let mins = Math.floor((time % 3600000) / 60000);

    let secs = Math.floor((time % 60000) / 1000);

    let millis = time % 1000;

    hrs = String(hrs).padStart(2,"0");
    mins = String(mins).padStart(2,"0");
    secs = String(secs).padStart(2,"0");
    millis = String(millis).padStart(3,"0");

    return `${hrs}:${mins}:${secs}.${millis}`;
}

function updateDisplay(){

    elapsedTime = Date.now() - startTime;

    display.innerHTML = timeToString(elapsedTime);

}

document.getElementById("start").onclick = function(){

    if(!timerInterval){

        startTime = Date.now() - elapsedTime;

        timerInterval = setInterval(updateDisplay,10);

    }

}

document.getElementById("pause").onclick = function(){

    clearInterval(timerInterval);

    timerInterval = null;

}

document.getElementById("reset").onclick = function(){

    clearInterval(timerInterval);

    timerInterval = null;

    elapsedTime = 0;

    display.innerHTML = "00:00:00.000";

    laps.innerHTML = "";

}

document.getElementById("lap").onclick = function(){

    if(elapsedTime===0) return;

    let li = document.createElement("li");

    li.innerHTML = "Lap " + (laps.children.length+1) + " : " + timeToString(elapsedTime);

    laps.prepend(li);

}