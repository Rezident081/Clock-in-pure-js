import "../scss/main.scss";
import Clock from "./Clock/Clock.js";

function startTime(){
    let time = new Clock();
    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();

    document.getElementsByClassName("hours")[0].innerHTML = hours;
    document.getElementsByClassName("minutes")[0].innerHTML = minutes;
    document.getElementsByClassName("seconds")[0].innerHTML = seconds;

}
startTime();
setInterval( startTime, 1000 );
