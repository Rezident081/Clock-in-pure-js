import "../scss/main.scss";
import Clock from "./Clock/Clock.js";


var test = new Clock();

setInterval(function(){
    test.actionTime();
}, 1000);