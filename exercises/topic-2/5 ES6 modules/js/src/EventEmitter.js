/* Class EventEmitter */
class EventEmitter{
    constructor(){
        this.events = {}
    }
    on(eventName, callback){
        if(this.events[eventName]){
            this.events[eventName].push(callback);
        }
        else{
            this.events[eventName] = [callback];
        }
        console.log("Hello from on");

    }
    emit(eventName){
        if (this.events[eventName]) {
            this.events[eventName].forEach(emit => {
                if (typeof emit === 'function') {
                    emit.call(this);
                }
                else{
                    console.log("Error");
                }
            });
        }
        //console.log("Hello from emit");
    }
    off(eventName, callback){
        this.events[eventName].pop(callback);
        console.log("Hello from off");
    }
    showEvents(){
        console.log(this.events);
        return this.events;
    }
}