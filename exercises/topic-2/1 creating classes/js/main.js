"use strict";
document.addEventListener("DOMContentLoaded", function(){
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
    /* Class Movie with extends of EventEmitter */
    class Movie extends EventEmitter {
        constructor(title, year, duration) {
            super();
            this.full_cast = [];
            this.title = title;
            this.year = year;
            this.duration = duration;

        }
        
        play() {
            this.emit("play");
            console.log(`The  ${this.title} movie is playing</br>`);  
            return (`The  ${this.title} movie is playing</br>`);
        }
        
        pause() {
            this.emit("pause")
            console.log(`The ${this.title} movie was paused</br>`); 
            return (`The ${this.title} movie was paused</br>`);    
        }
        
        resume() {
            this.emit("resume")
            console.log(`Title: ${this.title} - Year: ${this.year} - Duration: ${this.duration}<br/>`);
            return (`Title: ${this.title} - Year: ${this.year} - Duration: ${this.duration}<br/>`);
        }
        addCast(cast){            
            this.full_cast = this.full_cast.concat(cast);
        }
        showCast(){
            let full_cast = ` `;
            for (let index = 0; index < this.full_cast.length; index++) {
                 full_cast += `Actor name: ${this.full_cast[index].name} - Age ${this.full_cast[index].age}</br>`;
            }   
            return full_cast;         
        }
    }
    /* Class Actor */
    class Actor{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
    }
    /* Class Logger */
    class Logger{
        constructor(){
            this.logs = {};
        }
        log(info){
            let output = `Information: The "${info}" event has been emitted`;
            console.log(output);
        }
    }
    /* Instances of movie clases */
    let movie = [
        new Movie("Harry Potter 1", "2001", 15), 
        new Movie("Harry Potter 2", "2002", 20),
        new Movie("Harry Potter 3", "2004", 25),
        new Movie("Harry Potter 4", "2005", 10),
        new Movie("Harry Potter 5", "2007", 11)
    ]
    /* Methods of Movie are used to see the result */
    let btn_play = document.getElementById("btn_play");
    let btn_pause = document.getElementById("btn_pause");
    let screen = document.querySelector(".screen_2");
    screen.innerHTML = " ";
    for (let i = 0; i < movie.length; i++) {
        screen.innerHTML += movie[i].resume();   

        btn_play.addEventListener("click", function(){
            screen.innerHTML += movie[i].play();

        });
        btn_pause.addEventListener("click", function(){
            screen.innerHTML += movie[i].pause();
        }); 
    };
    // EventEmitter method
    const eventEmitter = new EventEmitter();
    eventEmitter.on("change", () =>{
    });
    eventEmitter.emit("change");
    
    eventEmitter.off("change", () =>{
        
    })
    eventEmitter.emit("change");
    
    // addCast Method
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
    screen.innerHTML += terminator.showCast(arnold);
    
    // Logger instance
    const log = new Logger();
    terminator.on('play', () => {
        log.log('play')
    });
    terminator.play();        

    // mixin
    const ironman = new Movie('Ironman', 2008, 126);
    const social = {
        share(friendName){
            alert(`${friendName} share ${this.title}`)
        },
        like(friendName){
            alert(`${friendName} like ${this.title}`)
        }
    } 
      // copy the methods
      Object.assign(ironman, social);
      ironman.share('Mike Blossom');  
      ironman.like('Jared Padalecki');    

});

