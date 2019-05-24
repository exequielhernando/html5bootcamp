"use strict";
let onOff = false;

class Movie {
    constructor(title, year, duration) {
        this.title = title;
        this.year = year;
        this.duration = duration;
    }
    
    play() {
        let screen = document.querySelector(".screen");
        let total_duration = this.duration;
        onOff = true;
        let duration = setTimeout(function(){
            screen.innerHTML = "the movie will start soon";
            Countdown(total_duration)}, 1000); 
        function Countdown(total_duration) {
            let intervalo = setInterval(function() {
                screen.innerHTML = total_duration;
                if (total_duration === 0) {
                    clearInterval(intervalo);
                    screen.innerHTML = "The movie had finished";
                }
                else if(onOff === true){
                    total_duration--;
                }
            }, 1000);
        }
        return duration;
    }
    
    pause() {
        onOff = false;        
    }
    
    resume() {
        let resume = "Title: "+ this.title + " Year: " + this.year + " Duration: " + this.duration;
        return resume;
    }
    
}
class Actor{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
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
        
    }
    emit(eventName){
        this.events[eventName].forEach(emit => {
            emit.call(this);
        });
    }
    off(eventName, callback){
        this.events[eventName].pop(callback);
    }
}

let movie = [
    new Movie("Harry Potter 1", "2001", "15"), 
    new Movie("Harry Potter 2", "2002", "20"),
    new Movie("Harry Potter 3", "2004", "25"),
    new Movie("Harry Potter 4", "2005", "10"),
    new Movie("Harry Potter 5", "2007", "11")
]
let btn_play = document.getElementById("btn_play");
let btn_pause = document.getElementById("btn_pause");


for (let i = 0; i < movie.length; i++) {
    console.log(movie[i].resume());
};
btn_play.addEventListener("click", function(){
    movie[0].play(movie[0]);
})
btn_pause.addEventListener("click", function(){
    movie[0].pause(movie[0]);
})

const eventEmitter = new EventEmitter();

eventEmitter.on("change", () =>{
    console.log("Hello from there"); 
});
eventEmitter.emit("change");

eventEmitter.off("change", () =>{
})
eventEmitter.emit("change");