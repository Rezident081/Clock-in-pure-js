import "../scss/main.scss";
import Clock from "./Clock/Clock.js";


var cLock = new Clock();

setInterval(function(){
    cLock.actionTime();
}, 1000);