class Clock {

    constructor(){
        this.now = new Date();
    }

    getSeconds(){
        return this.setTwoDigids(this.now.getSeconds());
    }

    getMinutes(){
        return this.setTwoDigids(this.now.getMinutes());
    }

    getHours(){
        return this.setTwoDigids(this.now.getHours());
    }

    setTwoDigids(val){
        if(val.toString().length <= 1){
            return "0" + val.toString();
        }
        return val.toString();
    }

}

export default Clock;