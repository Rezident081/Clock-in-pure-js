class Clock {

    constructor(){

        this.setTime(new Date());
        this.addToHtml(this.hours,this.minutes,this.seconds);
    }

    setTime(date){
        this.hours = date.getHours();
        this.minutes = this.formatTime(date.getMinutes());
        this.seconds = this.formatTime(date.getSeconds());
    }

    addToHtml(hours,minutes,seconds){
        const wrapBlock = document.getElementsByClassName("clock-container")[0],
              bHours = document.getElementsByClassName("hours")[0],
              bMinutes = document.getElementsByClassName("minutes")[0],
              bSeconds = document.getElementsByClassName("seconds")[0];
        wrapBlock.classList.toggle("tic");
        bHours.innerHTML = hours;
        bMinutes.innerHTML = minutes;
        bSeconds.innerHTML = seconds;
    }

    actionTime(){

        this.setTime(new Date());
        this.addToHtml(this.hours, this.minutes, this.seconds);
    }

    formatTime(item){
        return item < 10 ? "0" + item : item; 
    }

}

module.exports = Clock;