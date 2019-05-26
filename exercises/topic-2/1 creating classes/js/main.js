"use strict";
let onOff = false;
class Movie {
    constructor(title, year, duration) {
        this.title = title;
        this.year = year;
        this.duration = duration;
    }
    
    play() {
        let screen = document.querySelector(".screen_1");
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
        console.log("Play");
        
        return duration;
    }
    
    pause() {
        onOff = false;
        console.log("Pause");
                
    }
    
    resume() {
        let resume = "Title: "+ this.title + " Year: " + this.year + " Duration: " + this.duration + "<br/>" + "<br/>" ;
        return resume;
    }
    addCast(cast){
        let full_date = " ";                
        if (cast.length > 1) {
            for (let index = 0; index < cast.length; index++) {
                full_date += "Actor name: " + cast[index].name + "///  Age: " + cast[index].age + "</br>" + "<br/>";
            }
        } else {
            full_date += "Actor name: " + cast.name + "///  Age: " + cast.age + "</br>" + "<br/>" ;
        }
        return full_date;        
    }
}
class Actor{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
class EventEmitter extends Movie{
    constructor(title, year, duration){
        super(title, year, duration);
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
        this.events[eventName].forEach(emit => {
            emit.call(this);
            console.log("Hello from emit");            
        });
    }
    off(eventName, callback){
        this.events[eventName].pop(callback);
        console.log("Hello from off");
    }
    
}

class Logger{
    constructor(){
        this.logs = {};
    }
    log(info){

    }
}
let movie = [
    new Movie("Harry Potter 1", "2001", 15), 
    new Movie("Harry Potter 2", "2002", 20),
    new Movie("Harry Potter 3", "2004", 25),
    new Movie("Harry Potter 4", "2005", 10),
    new Movie("Harry Potter 5", "2007", 11)
]
const eventEmitter = new EventEmitter("Rapido y furioso", "2000", "10");
const new_saga = [
    new EventEmitter("Rapido y furioso 2", "2001", "50"),
    new EventEmitter("Rapido y furioso 3", "2003", "50"),
    new EventEmitter("Rapido y furioso 4", "2007", "50"),
    new EventEmitter("Rapido y furioso 5", "2009", "50"),
    new EventEmitter("Rapido y furioso 6", "2011", "50")
]
let btn_play = document.getElementById("btn_play");
let btn_pause = document.getElementById("btn_pause");
let screen = document.querySelector(".screen_2");
screen.innerHTML = " ";

for (let i = 0; i < movie.length; i++) {
    screen.innerHTML += movie[i].resume();     
};
for (let i = 0; i < new_saga.length; i++) {
    screen.innerHTML += new_saga[i].resume();
};

btn_play.addEventListener("click", function(){
    movie[0].play();
    eventEmitter.play();
});
btn_pause.addEventListener("click", function(){
    movie[0].pause();
    eventEmitter.pause();
});



eventEmitter.on("change", () =>{
});
eventEmitter.emit("change");

eventEmitter.off("change", () =>{
    
})
eventEmitter.emit("change");


const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

terminator.addCast(arnold);
terminator.addCast(actors);
screen.innerHTML += terminator.resume();
screen.innerHTML += terminator.addCast(arnold);
screen.innerHTML += terminator.addCast(actors);
